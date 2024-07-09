const generateButton = document.querySelector("#memeButton")
const memeTitle = document.getElementById("memeTitle")
const memeAuther = document.querySelector(".memeAuther")
const memeImg = document.querySelector(".memeImg")

function memeGenerator(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(res => res.json())
    .then(data => {

        const {title, author, url} = data
        console.log(title, author, url);
        memeTitle.innerHTML = title
        memeAuther.innerHTML = author
        memeImg.src = url


        // memeTitle.innerHTML = data.title
        // memeAuther.innerHTML = `Meme By : ${data.author}`  
        // memeImg.src = data.url

 }
        
    )
    
}

generateButton.addEventListener("click", memeGenerator)

memeGenerator()