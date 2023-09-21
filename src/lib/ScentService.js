const API_URL = "http://localhost:8080/api/scent"; 

export async function fetchScents() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("error");
    }
    return response.json();
}
