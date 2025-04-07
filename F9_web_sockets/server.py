import os
from aiohttp import web, WSMsgType

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
HTML_FILE = os.path.join(BASE_DIR, "index.html")


async def websocket_handler(request: web.Request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    request.app["clients"].add(ws)
    print("Client connected.")

    try:
        async for msg in ws:
            if msg.type == WSMsgType.TEXT:
                await ws.send_str("Server received your ping.")
            elif msg.type == WSMsgType.ERROR:
                print(f"WebSocket error: {ws.exception()}")
    finally:
        request.app["clients"].remove(ws)
        print("Client disconnected.")

    return ws


async def post_news(request: web.Request):
    try:
        data = await request.json()
        news = data.get("news")

        if not news:
            return web.json_response({"error": "Missing 'news' field"}, status=400)

        print(f"Received news: {news}")

        for client in set(request.app["clients"]):
            if not client.closed:
                try:
                    await client.send_str(news)
                except Exception as e:
                    print(f"Send error: {e}")

        return web.json_response({"status": "ok"})
    except Exception as e:
        return web.json_response({"error": str(e)}, status=500)


async def health_check(request: web.Request):
    return web.json_response({"status": "ok"})


async def index(request: web.Request):
    with open(HTML_FILE, "rb") as f:
        return web.Response(body=f.read(), content_type="text/html")


def create_app():
    app = web.Application()
    app["clients"] = set()

    app.router.add_get("/", index)
    app.router.add_get("/ws", websocket_handler)
    app.router.add_post("/news", post_news)
    app.router.add_get("/ping", health_check)

    return app


if __name__ == "__main__":
    web.run_app(create_app(), port=8080)
