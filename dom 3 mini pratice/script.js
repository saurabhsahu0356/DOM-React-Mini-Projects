let btn = document.querySelector("button")
let main = document.querySelector(".main")

let arr=["aaj kal", "sab best","bas tu bata kaisa","hai muje","lagta best","sab best ","Hoga meri jaan"]

btn.addEventListener('click',function(){
let hedd = document.createElement("h1")
let a = Math.floor(Math.random()*arr.length)
let x = Math.random()*90
let y = Math.random()*90
let z = Math.random()*360
let scle = Math.random()*3

hedd.style.position="absolute"
hedd.style.left= x+"%"
hedd.style.top= y+"%"
hedd.style.rotate= z+"deg"
hedd.style.scale= scle
hedd.style.whiteSpace= "nowrap"


hedd.innerHTML= arr[a]
main.appendChild(hedd)
})