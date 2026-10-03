var btn = document.querySelector("button");
var main = document.querySelector("main");

btn.addEventListener('click',function(){
    let div= document.createElement('div');

    let x= Math.random()*100;
     let y= Math.random()*100;
     let r= Math.random()*360;
     let col=Math.floor(Math.random()*256)
    let col1=Math.floor(Math.random()*256)
    let col2=Math.floor(Math.random()*256)

    div.style.height='50px'
    div.style.width='50px'
    div.style.position='absolute'
    div.style.backgroundColor=`rgb(${col}, ${col1}, ${col2})`;

    div.style.left= x+'%'
    div.style.top= y+'%'
    div.style.rotate= r+'deg'

    main.appendChild(div);

});