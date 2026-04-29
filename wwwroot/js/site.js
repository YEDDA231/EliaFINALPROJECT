const API_URL = "https://cloud.flowiseai.com/api/v1/vector/upsert/06b70cbe-3e62-4cf4-8e33-9d74263c3edd";

/**
 * Browser version of the Flowise API call for static hosting.
 * Note: this may fail if the API blocks CORS in browsers.
 */
async function query(payload) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Flowise request failed: ${response.status}`);
    }

    return response.json();
}

async function runExampleQuery() {
    try {
        const output = await query({
            overrideConfig: {
                topK: 1,
                googleGenerativeAPIKey: "example",
                modelName: "example",
                tasktype: "example"
            }
        });
        console.log("Flowise response:", output);
    } catch (error) {
        console.error("Flowise API call failed in browser:", error);
    }
}

runExampleQuery();
