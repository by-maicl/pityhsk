const myWebhookUrl = 'https://discord.com/api/webhooks/1270419198543396894/TSw7ZXiNwjk8ZffHHCKMcdQtb0qwfTteicC4BTCxFv_zhXBUBOK0lYoAl-bSG9Ln82Iq';
const form = document.getElementById('formStartPlay');
const errorWindow = document.getElementById('errorWindow');

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('username');
    const discordTag = formData.get('discord-tag');
    const aboutUser = formData.get('about-user');

    let message =
        '**Ім\'я:** ' + name + '\n' +
        '**Discord:** ' + discordTag + '\n' +
        '**Інформація:** ' + aboutUser;

    let result = await sendWebhookMessage(myWebhookUrl, message);
    redirectToResultPage(result);
});

async function sendWebhookMessage(webhookUrl, messageContent) {
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: messageContent }),
    });

    if (!response.ok) {
        console.error(`Помилка при відправці повідомлення: ${response.statusText}`);
        return false;
    } else {
        console.log('Повідомлення успішно відправлено!');
        return true;
    }
}

function redirectToResultPage(sendResult) {
    if (!sendResult) {
        errorWindow.style.opacity = 1;
        setTimeout(function () {
            errorWindow.style.opacity = 0;
        }, 5000);
    } else {
        self.location = 'form-complete.html';
    }
}


