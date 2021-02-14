var onetwo = new hoverEffect({
    parent: document.querySelector('#slider1'),
    intensity: 0.7,
    image1: 'img/Image1/Image 3.png',
    image2: 'img/Image1/Image 1.png',
    hover: false,
    displacementImage: 'img/heightMap.png'
});
let twothree = new hoverEffect({
    parent: document.querySelector('#slider2'),
    intensity: 0.7,
    image1: 'img/Image1/Image 1.png',
    image2: 'img/Image2/Image 2.png',
    hover: false,
    displacementImage: 'img/heightMap.png'
});
let threeone = new hoverEffect({
    parent: document.querySelector('#slider3'),
    intensity: 0.7,
    image1: 'img/Image1/Image 1.png',
    image2: 'img/Image3/Image 3.png',
    hover: false,
    displacementImage: 'img/heightMap.png'
});

const slide1 = document.querySelector('#slider1');
const slide2 = document.querySelector('#slider2');
const slide3 = document.querySelector('#slider3');
slide1.hidden = true;
slide2.hidden = true;
slide3.hidden = true;
onetwo.next();
var mytime;
const prev = document.getElementById("btn-first");
prev.onclick = ()=>{
    if (mytime) clearTimeout(mytime);
    slide2.hidden=true;
    twothree.previous();
    slide3.hidden=true;
    threeone.previous();
    slide1.hidden=false;
    onetwo.next();
    mytime = setTimeout(()=>middle.click(), 10000);
    
} 
const middle = document.getElementById("btn-second");
middle.onclick = ()=>{
    if (mytime) clearTimeout(mytime);
    slide1.hidden=true;
    onetwo.previous();
    slide3.hidden=true;
    threeone.previous();
    slide2.hidden=false;
    twothree.next();
    mytime = setTimeout(()=>last.click(), 10000);
    
}
const last = document.getElementById("btn-third");
last.onclick = ()=>{
    if (mytime) clearTimeout(mytime);
    slide1.hidden=true;
    onetwo.previous();
    slide2.hidden=true;
    twothree.previous();
    slide3.hidden=false;
    threeone.next();
    mytime = setTimeout(()=>prev.click(), 10000);
}
prev.click();
