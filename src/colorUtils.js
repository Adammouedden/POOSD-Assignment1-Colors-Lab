function formatColor(color) {
    return color.trim().toLowerCase();
}

function buildColorPayload(color, userId) {
    return { color: formatColor(color), userId: userId };
}

function buildSearchPayload(search, userId) {
    return { search: search.trim(), userId: userId };
}

function parseLoginResponse(jsonText) {
    const data = JSON.parse(jsonText);
    return {
        id: data.id || 0,
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        error: data.error || ""
    };
}

function parseSearchResponse(jsonText) {
    const data = JSON.parse(jsonText);
    return {
        results: data.results || [],
        error: data.error || ""
    };
}

module.exports = { formatColor, buildColorPayload, buildSearchPayload, parseLoginResponse, parseSearchResponse };
