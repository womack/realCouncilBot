let memeText = (text) => {
    let reply = "";
    for (let i = 0; i < text.length; i++) {
        reply += text.charAt(i) + " ";
    }
    for (let i = 1; i < text.length; i++) {
        reply += "\n" + text.charAt(i);
    }
    return reply.toUpperCase();
};

let memeGrid = (width, height, text) => {

    let letter = text.split("");
    let linesDown = ((text.length - 1) * height) + 1;
    let linesAccross = ((text.length - 1) * width) + 1;
    let line = [], rline = [], count = 0;
    let up = true;
    let highest;
    let complete = [];
    let outputString = ""
    if (linesAccross >= linesDown) {
        highest = linesAccross;
    } else {
        highest = linesDown;
    }
    if (count == 0 || count == letter.length - 1) {
        for (let x = 0; x < highest; x++) {
            rline[x] = letter.reverse()[count];
            line[x] = letter.reverse()[count];
            if (count == letter.length - 1) {
                up = false;
                count--;
            } else if (count == 0) {
                up = true;
                count++;
            } else if (up) {
                count++;
            } else {
                count--;
            }
        }
    }
    for (let y = 0; y < linesDown; y++) {
        complete[y] = [];
        for (let x = 0; x < linesAccross; x++) {
            complete[y][x] = " ";
        }
    }
    for (let y = letter.length - 1; y < complete.length; y += (letter.length - 1) * 2) {
        for (let x = 0; x < complete[y].length; x++) {
            complete[y][x] = line[x];
        }
    }
    for (let y = 0; y < complete.length; y += (letter.length - 1) * 2) {
        for (let x = 0; x < complete[y].length; x++) {
            complete[y][x] = rline[x];
        }
    }
    for (let x = letter.length - 1; x < complete[0].length; x += (letter.length - 1) * 2) {
        for (let y = 0; y < complete.length; y++) {
            complete[y][x] = line[y];
        }
    }
    for (let x = 0; x < complete[0].length; x += (letter.length - 1) * 2) {
        for (let y = 0; y < complete.length; y++) {
            complete[y][x] = rline[y];
        }
    }
    for (let y = 0; y < linesDown; y++) {
        for (let x = 0; x < linesAccross; x++) {
            outputString += complete[y][x] + " ";
        }
        outputString += "\n";
    }
    return outputString;
}

module.exports = {
    memeText,
    memeGrid
}
