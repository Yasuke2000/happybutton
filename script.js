async function showRandomCat() {
    const apiURL = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    const apiKey = 'live_xUpQNe6N2CqBynmwFmQv7hyrO9Cbe8C2uA1jpXfrsW6aVi2mot2yRQMIC9EziX4d';
    const messages = [
        "I believe in you!",
        "You are loved!",
        "Keep pushing forward!",
        "You're doing great!",
        "Stay strong!"
        "I believe in you!",
    "You are loved!",
    "Keep pushing forward!",
    "You're doing great!",
    "Stay strong!",
    "You matter, never forget that.",
    "Each day holds a surprise—just wait and see.",
    "You are stronger than you think.",
    "Don’t give up, the beginning is always the hardest.",
    "You've got this!",
    "No matter what you’re facing, you’re not alone.",
    "You are braver than you believe, and stronger than you seem.",
    "Take it one step at a time.",
    "Sending a little love your way today.",
    "You are capable of amazing things.",
    "Remember to take it easy on yourself.",
    "Keep your chin up!",
    "You are a bright light in a big world.",
    "You deserve to be happy.",
    "Things will get better, hang in there.",
    "Smile, breathe, and go slowly.",
    "You are a joy to those around you.",
    "Be gentle with yourself, you’re doing the best you can.",
    "You bring so much light into the world.",
    "There's a whole lot of beauty when your eyes are open to it.",
    "Every day is a new beginning. Take a deep breath and start again.",
    "You're more helpful than you realize.",
    "Wishing you strength for today and hope for tomorrow.",
    "Keep pushing, your future self is cheering you on!",
    "Embrace your uniqueness. Time is much too short to be living someone else’s life."
    ];

    try {
        const response = await fetch(apiURL, {
            headers: {
                'x-api-key': apiKey
            }
        });
        const data = await response.json();
        const catUrl = data[0].url;
        document.getElementById('catGifContainer').innerHTML = `<img src="${catUrl}" alt="Cute cat gif" style="width:100%;">`;
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('supportiveMessage').innerText = randomMessage;
    } catch (error) {
        document.getElementById('supportiveMessage').innerText = 'Failed to load cat gif, but remember, you are amazing!';
    }
}
