async function showRandomCat() {
    const apiURL = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    const apiKey = 'live_xUpQNe6N2CqBynmwFmQv7hyrO9Cbe8C2uA1jpXfrsW6aVi2mot2yRQMIC9EziX4d';
    const messages = [
        "I believe in you!",
        "You are loved!",
        "Keep pushing forward!",
        "You're doing great!",
        "Stay strong!"
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
