
window.onload=()=>{
    const transisi=document.querySelector('.transition');
    const anchors =document.querySelectorAll('a');
setTimeout(() => {
    transisi.classList.remove('is-active')
}, 500);
for(let i=0; i<anchors.length; i++){
    const anchor =anchors[i];
    anchor.addEventListener('click',e=>{
        e.preventDefault();
        let target =e.target.href;
        transisi.classList.add('is-active');
        setTimeout(() => {
           window.location.href=target;    
        },500)
    });
}

window.onload=()=>{
    const transisi=document.querySelector('.transition');
    const anchors =document.querySelectorAll('a');
setTimeout(() => {
    transisi.classList.remove('is-active')
}, 500);
for(let i=0; i<anchors.length; i++){
    const anchor =anchors[i];
    anchor.addEventListener('click',e=>{
        e.preventDefault();
        let target =e.target.href;
        transisi.classList.add('is-active');
        setTimeout(() => {
           window.location.href=target;    
        },500)
    });
}
}
}