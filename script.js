const promptInput = document.getElementById("prompt");
const chat = document.getElementById("chat");
const welcome = document.getElementById("welcome");

function sendMessage() {
    const message = promptInput.value.trim();

    if (!message) return;

    welcome.style.display = "none";

    addMessage(message, "user-message");

    promptInput.value = "";

    setTimeout(() => {
        addMessage(
            "I'm NOVA. Your interface is working! 🤖\n\nThe AI engine isn't connected yet. That's our next major step.",
            "ai-message"
        );
    }, 700);
}

function addMessage(text, className) {
    const message = document.createElement("div");

    message.className = `message ${className}`;
    message.textContent = text;

    chat.appendChild(message);

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function usePrompt(text) {
    promptInput.value = text;
    promptInput.focus();
}

function handleEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

function newChat() {
    chat.innerHTML = "";
    welcome.style.display = "block";
    promptInput.value = "";
    promptInput.focus();
}
