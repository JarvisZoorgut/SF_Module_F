import os
from aiohttp import web, WSMsgType

# Абсолютный путь до HTML-файла, который будет отдаваться по обычному HTTP-запросу
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WS_FILE = os.path.join(BASE_DIR, "websocket.html")


async def wshandler(request: web.Request):
    resp = web.WebSocketResponse()
    available = resp.can_prepare(request)

    # Если это не WebSocket-запрос — отдаем HTML
    if not available.ok:
        with open(WS_FILE, "rb") as fp:
            return web.Response(body=fp.read(), content_type="text/html")

    await resp.prepare(request)

    await resp.send_str("Welcome!!!")

    app = request.app
    app["sockets"].append(resp)
    print("Someone joined.")

    # Рассылаем всем остальным пользователям сообщение о новом участнике
    for ws in app["sockets"]:
        if ws is not resp and not ws.closed:
            await ws.send_str("Someone joined")

    try:
        async for msg in resp:
            if msg.type == WSMsgType.TEXT:
                # Рассылаем сообщение всем остальным клиентам
                for ws in app["sockets"]:
                    if ws is not resp and not ws.closed:
                        try:
                            await ws.send_str(msg.data)
                        except Exception as e:
                            print(f"Error sending to a socket: {e}")
            elif msg.type == WSMsgType.ERROR:
                print(f"WebSocket error: {resp.exception()}")
    finally:
        app["sockets"].remove(resp)
        print("Someone disconnected.")

        # Уведомляем остальных
        for ws in app["sockets"]:
            if not ws.closed:
                await ws.send_str("Someone disconnected.")

    return resp


async def on_shutdown(app: web.Application):
    for ws in app["sockets"]:
        await ws.close()
    app["sockets"].clear()


def init():
    app = web.Application()
    app["sockets"] = []
    app.router.add_get("/", wshandler)
    app.on_shutdown.append(on_shutdown)
    return app


if __name__ == "__main__":
    web.run_app(init(), port=8080)
