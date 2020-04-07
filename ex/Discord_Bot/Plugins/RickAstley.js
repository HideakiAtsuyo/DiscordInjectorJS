global.Count = 0;

function Lyric() {

    let lyrics = [
        'We\'re no strangers to love',
        'You know the rules and so do I',
        'A full commitment\'s what I\'m thinking of',
        'You wouldn\'t get this from any other guy',
        'I just wanna tell you how I\'m feeling',
        'Gotta make you understand',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry',
        'Never gonna say goodbye',
        'Never gonna tell a lie and hurt you',
        'We\'ve known each other for so long',
        'Your heart\'s been aching but you\'re too shy to say it',
        'Inside we both know what\'s been going on',
        'We know the game and we\'re gonna play it',
        'And if you ask me how I\'m feeling',
        'Don\'t tell me you\'re too blind to see',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry',
        'Never gonna say goodbye',
        'Never gonna tell a lie and hurt you',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry',
        'Never gonna say goodbye',
        'Never gonna tell a lie and hurt you',
        'Never gonna give, never gonna give',
        '(Give you up)',
        '(Ooh) Never gonna give, never gonna give',
        '(Give you up)',
        'We\'ve known each other for so long',
        'Your heart\'s been aching but you\'re too shy to say it',
        'Inside we both know what\'s been going on',
        'We know the game and we\'re gonna play it',
        'I just wanna tell you how I\'m feeling',
        'Gotta make you understand',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry',
        'Never gonna say goodbye',
        'Never gonna tell a lie and hurt you',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry',
        'Never gonna say goodbye',
        'Never gonna tell a lie and hurt you',
        'Never gonna give you up',
        'Never gonna let you down',
        'Never gonna run around and desert you',
        'Never gonna make you cry'];
    return lyrics[Count];
};

// Gracias to Lemons1337/Discord-Blockify-Text

let send = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function (data) {
    let obj;

    try {
        obj = JSON.parse(data);
    } catch (err) {

    }

    if (obj && obj.content) {
        obj.content = Lyric();
        data = JSON.stringify(obj);
        Count++;
    };

    return send.apply(this, [data]);
}
