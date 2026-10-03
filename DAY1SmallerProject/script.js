let main= document.querySelector("main");
let button=document.querySelector("button");
let div=document.querySelector(".box");

button.addEventListener('click',function(){
    let col=Math.floor(Math.random()*256)
    let col1=Math.floor(Math.random()*256)
    let col2=Math.floor(Math.random()*256)

    div.style.backgroundColor = `rgb(${col}, ${col1}, ${col2})`;
    
});