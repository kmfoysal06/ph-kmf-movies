export const getMovies = async (endpoint) => {

    const response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.length > 0) {
        return data;
    } else {
        throw new Error("No results found for the specified query.");
    }
}
