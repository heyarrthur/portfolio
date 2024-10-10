const responses = {
    "olá": "Olá! Como posso te ajudar hoje?",
    "como você está?": "Estou apenas um bot, mas obrigado por perguntar! E você?",
    "adeus": "Até mais! Tenha um ótimo dia!",
    "default": "Desculpe, não entendi isso. Pode reformular?"
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    addMessage(userInput, 'user');
    setTimeout(() => {
        const botResponse = getBotResponse(userInput.toLowerCase());
        addMessage(botResponse, 'bot');
    }, 1000);

    document.getElementById('user-input').value = '';
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    const icon = document.createElement('div');
    icon.classList.add('icon');

    if (sender === 'user') {
        icon.innerHTML = '<i class="fas fa-user-circle fa-2x"></i>';
    } else {
        icon.innerHTML = '<i class="fas fa-robot fa-2x"></i>';
    }

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = text;

    messageDiv.appendChild(icon);
    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    return responses[userMessage] || responses["default"];
}

document.getElementById('user-input').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
