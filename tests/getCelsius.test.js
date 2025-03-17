const getCelsius = require("./getCelsius");

test("Из Фаренгейтов в Цельсии", () => {
    expect(getCelsius(87)).toBe(30);
});