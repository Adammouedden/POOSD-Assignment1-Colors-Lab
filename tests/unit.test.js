const { formatColor, buildColorPayload, buildSearchPayload } = require("../src/colorUtils");

describe("formatColor", () => {
    test("trims leading and trailing whitespace", () => {
        expect(formatColor("  red  ")).toBe("red");
    });

    test("converts color name to lowercase", () => {
        expect(formatColor("RED")).toBe("red");
    });

    test("handles mixed case with surrounding spaces", () => {
        expect(formatColor("  Light Blue  ")).toBe("light blue");
    });

    test("returns empty string unchanged", () => {
        expect(formatColor("")).toBe("");
    });

    test("leaves already-formatted color unchanged", () => {
        expect(formatColor("crimson")).toBe("crimson");
    });
});

describe("buildColorPayload", () => {
    test("builds correct payload structure", () => {
        const payload = buildColorPayload("red", 42);
        expect(payload).toEqual({ color: "red", userId: 42 });
    });

    test("formats color before including it in payload", () => {
        const payload = buildColorPayload("  BLUE  ", 1);
        expect(payload.color).toBe("blue");
    });

    test("payload is JSON serializable", () => {
        const payload = buildColorPayload("green", 5);
        expect(() => JSON.stringify(payload)).not.toThrow();
    });

    test("payload contains userId as provided", () => {
        const payload = buildColorPayload("azure", 99);
        expect(payload.userId).toBe(99);
    });
});

describe("buildSearchPayload", () => {
    test("builds correct search payload structure", () => {
        const payload = buildSearchPayload("blue", 1);
        expect(payload).toEqual({ search: "blue", userId: 1 });
    });

    test("trims whitespace from search term", () => {
        const payload = buildSearchPayload("  red  ", 1);
        expect(payload.search).toBe("red");
    });

    test("search payload is JSON serializable", () => {
        const payload = buildSearchPayload("violet", 3);
        expect(() => JSON.stringify(payload)).not.toThrow();
    });
});
