// Your code goes here
const mainHeadFB = document.querySelector('h1');

const mainHeadFBEL = (event) => {
    event.target.style.color = 'red';
    
    
    // animate([[ { opacity: 1 },
    //     { opacity: 0.1, offset: 0.7 },
    //     { opacity: 0 } ],
    //   2000]);
};
console.log(mainHeadFB);
// mainHeadFB.forEach((link) => {
//     link.addEventListener('mouseenter', mainHeadFBEL);
// });

const secHdrs = document.querySelectorAll('h2');
console.log(secHdrs);

// secHdrs[0].addEventListener('scroll', () =>{

// });
const navLinkEHEnt = (event) => {
    event.target.style.color = 'red';
   
    event.target.transitionduration = '0.5s';
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


