var chatBox = document.getElementById('chatBox');
var chatInput = document.getElementById('chatInput');

var messages = {
    "hello": "Hello! 👋 Are you ready for the school picnic? 🏫",
    "yes": "Great! We'll have lots of fun activities. 🌳⚽🥪",
    "what activities": "We'll have games like soccer ⚽, basketball 🏀, and frisbee 🥏. Plus, we'll have a picnic with delicious food! 🧺🍉",
    "food": "We'll have sandwiches 🥪, fruits 🍎🍊, and drinks 🧃. Don't forget to bring your own favorite snacks! 😊",
    "weather": "The weather looks great for a picnic! 🌞🌤️⛅",
    "games": "We'll play various games such as soccer ⚽, basketball 🏀, and frisbee 🥏. Feel free to bring your own games too! 🎲🎯",
    "location": "The picnic will be held at the central park. 🏞️ Don't forget to bring a blanket to sit on! 🧺",
    "schedule": "The picnic starts at 10 AM and goes until 4 PM. We'll have lunch around 12 PM. 🕙🍽️",
    "bye": "Goodbye! See you at the picnic! 👋🌞"
};

function sendMessage() {
    var userMessage = chatInput.value.toLowerCase().trim();
    if (userMessage) {
        appendMessage(userMessage, 'user');
        respondToMessage(userMessage);
        chatInput.value = '';
    }
}

function appendMessage(text, sender) {
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<span class="emoji">${text}</span>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToMessage(text) {
    var response = messages[text] || "I'm not sure how to respond to that. 🤔 Try asking about the picnic activities, food, or schedule.";
    setTimeout(() => appendMessage(response, 'bot'), 500);
}
