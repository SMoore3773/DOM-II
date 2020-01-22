// Your code goes here
const mainHeadFB = document.querySelector('h1');

mainHeadFB.addEventListener("dblclick",() => {
    mainHeadFB.style.transform = 'translate(300px)';
    mainHeadFB.style.transition = 'ease-out 2s';
    mainHeadFB.style.transitionDelay = '.25s';

})
const mainHeadFBEL = (event) => {
    event.target.style.color = 'red';
};

const headBar = document.querySelector('.main-navigation');
headBar.addEventListener('wheel',()=>{
    headBar.style.zIndex = '5';
    
})
console.log(mainHeadFB);


const secHdrs = document.querySelectorAll('h2');
console.log(secHdrs);

const navLinkEHEnt = (event) => {
    event.target.style.color = 'red';
};
const navLinkEHLve = (event) => {
    event.target.style.color = 'black';
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseenter', navLinkEHEnt);
});
navLinks.forEach((link) => {
    link.addEventListener('mouseleave', navLinkEHLve);

});

const wtfbTxt = document.querySelector('h2');

wtfbTxt.addEventListener('scroll',() => {
    wtfbTxt.style.color = 'green';
});

const midImg = document.querySelectorAll('.img-content');

const imgEHEn = (event) => {
    event.target.style.transform = 'scale(1.15)';
    event.target.style.transition = 'all 0.2s';
}
const imgEHLe = (event) => {
    event.target.style.transform = 'scale(1.0)';
    event.target.style.transition = 'all 0.2s';
    event.target.style.zIndex = '0';
}
midImg.forEach((img) => {
    img.addEventListener('mouseenter', imgEHEn);
});
midImg.forEach((img) => {
    img.addEventListener('mouseleave', imgEHLe);
});


const stopLink = document.querySelectorAll('.nav-link');

stopLink.forEach (link => {
  link.addEventListener('click',(event) =>{
    event.preventDefault();
    event.target.style.color = 'blue';
    event.stopPropagation();
    
  });
});



const body = document.querySelector(".content-pick");
body.addEventListener("click", () => {
  body.style.backgroundColor="papayawhip";
  
})
const destination = document.querySelectorAll(".destination");

const desEH = (event) => {
    event.target.style.backgroundColor = 'oldLace'
    event.stopPropagation();
}

destination.forEach((des) => {
    des.addEventListener('click', desEH);
});


const btn = document.querySelectorAll('.btn');
console.log(btn);
const btnEH = (event) => {
    event.target.style.backgroundColor = 'green';
    event.target.style.color = 'darkblue';
    event.preventDefault();
}

btn.forEach((b) =>{
    b.addEventListener('click', btnEH);});
    
