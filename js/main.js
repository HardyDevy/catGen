let button1 = document.getElementById('newCat');
button1.addEventListener('click', () => {
    
    let i = Math.floor(Math.random() * dataText.length);
    let quote = document.querySelector('blockquote');
    quote.innerText = dataText[i].text;

    let i2 = Math.floor(Math.random() * dataImg.length);
    let img = document.querySelector('img');
    img.src = 'img/Pictures of Cats/' + dataImg[i2].img;

});

let button2 = document.getElementById('saveCat');