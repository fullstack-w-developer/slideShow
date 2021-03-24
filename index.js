const images = document.querySelector(".images").children
const arr_right = document.querySelector(".arr-right")
const arr_left = document.querySelector(".arr-left")
let index = 0

arr_left.addEventListener("click", function(){
    next("prev")
})
arr_right.addEventListener("click", function(){
    next("next")
})

function next(n){
    if(n === "next"){
        index++
        if(index === images.length){
            index = 0
        }
    }else{
        if(index === 0){
            index = images.length - 1
        }else{
            index--
        }
    }
    
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("active")
    }
    images[index].classList.add("active")
}

setInterval(next,3000)