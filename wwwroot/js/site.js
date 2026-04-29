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

function extractReply(data) {
    if (typeof data === "string") return data;
    if (data?.text) return data.text;
    if (data?.message) return data.message;
    if (Array.isArray(data) && data.length > 0) return JSON.stringify(data[0]);
    return JSON.stringify(data);
}

function addMessage(role, text) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    const item = document.createElement("div");
    item.className = `chat-bubble ${role}`;
    item.textContent = text;
    chatMessages.appendChild(item);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendChatMessage(userMessage) {
    const payload = {
        question: userMessage,
        overrideConfig: {
            topK: 1,
            googleGenerativeAPIKey: "example",
            modelName: "example",
            tasktype: "example"
        }
    };

    const output = await query(payload);
    return extractReply(output);
}

function initChatbot() {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");

    if (!chatForm || !chatInput || !sendBtn) return;

    addMessage("bot", "Hi! Ask me anything.");

    chatForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        addMessage("user", message);
        chatInput.value = "";
        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";

        try {
            const reply = await sendChatMessage(message);
            addMessage("bot", reply);
        } catch (error) {
            addMessage("bot", `Error: ${error.message}. Check browser console for details.`);
            console.error("Flowise API chat request failed:", error);
        } finally {
            sendBtn.disabled = false;
            sendBtn.textContent = "Send";
        }
    });
}

initChatbot();
