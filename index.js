let word = document.querySelectorAll("h2")
let btn = document.querySelector("button")

btn.onclick = () => {
    for(let i =0; i <= word.length - 1; i++){
        word[i].style.color="red"
        word[i].style.textAlign="center"

    }

}




