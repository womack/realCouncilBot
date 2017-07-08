let memeText = function (text) {
    let reply = "";
    for (let i = 0; i < text.length; i++) {
        reply += text.charAt(i) + " ";
    }
    for (let i = 1; i < text.length; i++) {
        reply += "\n" + text.charAt(i);
    }
    return reply.toUpperCase();
}

module.exports = {
    memeText
}