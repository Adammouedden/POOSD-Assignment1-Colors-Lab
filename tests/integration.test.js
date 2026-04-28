const { parseLoginResponse, parseSearchResponse } = require("../src/colorUtils");

describe("API response JSON structure — Login endpoint", () => {
    test("successful login response has all required fields", () => {
        const mockResponse = JSON.stringify({ id: 1, firstName: "John", lastName: "Doe", error: "" });
        const result = parseLoginResponse(mockResponse);
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("firstName");
        expect(result).toHaveProperty("lastName");
        expect(result).toHaveProperty("error");
    });

    test("successful login response fields have correct types", () => {
        const mockResponse = JSON.stringify({ id: 5, firstName: "Jane", lastName: "Smith", error: "" });
        const result = parseLoginResponse(mockResponse);
        expect(typeof result.id).toBe("number");
        expect(typeof result.firstName).toBe("string");
        expect(typeof result.lastName).toBe("string");
        expect(typeof result.error).toBe("string");
    });

    test("failed login response returns id of 0 and non-empty error", () => {
        const mockResponse = JSON.stringify({ id: 0, firstName: "", lastName: "", error: "User/Password combination incorrect" });
        const result = parseLoginResponse(mockResponse);
        expect(result.id).toBe(0);
        expect(result.error.length).toBeGreaterThan(0);
    });

    test("login response with valid user has id greater than 0", () => {
        const mockResponse = JSON.stringify({ id: 7, firstName: "Alice", lastName: "Brown", error: "" });
        const result = parseLoginResponse(mockResponse);
        expect(result.id).toBeGreaterThan(0);
        expect(result.error).toBe("");
    });
});

describe("API response JSON structure — SearchColors endpoint", () => {
    test("successful search response has results array and empty error", () => {
        const mockResponse = JSON.stringify({ results: ["red", "blue"], error: "" });
        const result = parseSearchResponse(mockResponse);
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.error).toBe("");
    });

    test("results array contains string color values", () => {
        const mockResponse = JSON.stringify({ results: ["crimson", "azure", "emerald"], error: "" });
        const result = parseSearchResponse(mockResponse);
        result.results.forEach((color) => {
            expect(typeof color).toBe("string");
        });
    });

    test("failed search response includes non-empty error and empty results", () => {
        const mockResponse = JSON.stringify({ id: 0, firstName: "", lastName: "", error: "No Records Found" });
        const result = parseSearchResponse(mockResponse);
        expect(result.results).toEqual([]);
        expect(result.error).toBe("No Records Found");
    });

    test("search response results array length matches expected count", () => {
        const colors = ["coral", "teal", "indigo"];
        const mockResponse = JSON.stringify({ results: colors, error: "" });
        const result = parseSearchResponse(mockResponse);
        expect(result.results).toHaveLength(3);
    });

    test("AddColor success response has empty error field", () => {
        const mockResponse = JSON.stringify({ error: "" });
        const parsed = JSON.parse(mockResponse);
        expect(parsed).toHaveProperty("error");
        expect(parsed.error).toBe("");
    });
});
