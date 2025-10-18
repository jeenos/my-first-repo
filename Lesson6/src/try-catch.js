async function fetchData(primaryUrl, fallbackUrl) {
    try {
        console.log(`Trying primary URL: ${primaryUrl}`);
        const response = await fetch(primaryUrl);

        if (!response.ok) {
            throw new Error(`Primary returned bad status: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        console.log('Primary succeeded.');
        return json;

    } catch (primaryError) {
        console.warn('Primary request failed:', primaryError.message);

        try {
            console.log(`Trying fallback URL: ${fallbackUrl}`);
            const response2 = await fetch(fallbackUrl);

            if (!response2.ok) {
                throw new Error(`Fallback returned bad status: ${response2.status} ${response2.statusText}`);
            }
            const json2 = await response2.json();
            console.log('Fallback succeeded.');
            return json2;
        } catch (fallbackError) {
            throw new Error(`Both primary and fallback requests failed. Last error: ${fallbackError.message}`);
        }
    }
}

(async () => {
    const primary = 'https://nonexistent.example.invalid/endpoint';
    const fallback = 'https://jsonplaceholder.typicode.com/todos/1';

    try {
        const data = await fetchData(primary, fallback);
        console.log('Final data received:', data);
    } catch (err) {
        console.error('Final error:', err.message);
    }
})();
