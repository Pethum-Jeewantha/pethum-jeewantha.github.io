const texts = [
    'Welcome',
    'Coming Soon...😉'
];

let i = 0;
let j = 0;

setInterval(()=> {

    $("#text").html(texts[j].substring(0, i+1));
    if (i === (texts[j].length + 30)){
        i = 0;
        j++;
        if (j === texts.length) j = 0;
    }
    i++;

}, 50);

