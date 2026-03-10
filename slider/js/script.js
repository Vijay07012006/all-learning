let ar = [
    "./images/ecom.png",
    "./images/movies.png",
    "./images/pf1.png",
    "./images/pf2.png",
    "./images/plants.png"
];

let img = document.querySelector('.slider img');
let slider = document.querySelector('.slider'); // 👈 yeh naya liya
let i = 0;

let pre = document.querySelector('#pre');
let nxt = document.querySelector('#nxt');

nxt.onclick = () => {
    i = (i + 1) % ar.length;
    img.src = ar[i];

    img.classList.remove('bounce');
    void img.offsetWidth;   
    img.classList.add('bounce');
}

pre.onclick = () => {
    i = (i - 1 + ar.length) % ar.length;
    img.src = ar[i];

    img.classList.remove('bounce');
    void img.offsetWidth;
    img.classList.add('bounce');
}

// ===== Auto slide ko function me daal diya =====
let slide;   // interval id yaha store hoga

let startSlide = () => {
    slide = setInterval(() => {
        i = (i + 1) % ar.length; // age se image aayegi
        // i = (i - 1 + ar.length) % ar.length;  //peeche se image aayi 

        img.src = ar[i];

        img.classList.remove('bounce');
        void img.offsetWidth;
        img.classList.add('bounce');

    }, 1000);
}

// Pehli baar start karo
startSlide();

// ===== Hover par pause / resume =====

// Jab cursor slider par aayega → ruk jao
slider.onmouseover = () => {
    clearInterval(slide);
}

// Jab cursor slider se hat jayega → fir se start ho jao
slider.onmouseout = () => {
    startSlide();
}
