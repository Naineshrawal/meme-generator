let input = document.getElementById("input")
let error = document.getElementById("error")
let guesses = document.getElementById("guesses")
let submitbtn = document.getElementById("submitbtn")
let resetBtn = document.getElementById("resetBtn")
let atempt = document.getElementById("atempt")

let atempted = 0
let randomNumber;
let guessArr = []


let generateNo = ()=>{
    randomNumber =  Math.floor(Math.random() * 100)
}

function reset(){
    atempt.innerHTML = ""
    guesses.innerHTML = ""
    generateNo()
    input.value = ""
    error.style.color = "red"
    error.innerHTML = ""
    resetBtn.style.display = "none"
    submitbtn.style.display = "block"
    guessArr = []
}
reset()


const hanbleSubmit = ()=>{
    
  
   
    if(input.value.length > 0){
        error.innerHTML = ""
        if(input.value == randomNumber ){
            
            error.innerHTML = `Winner - Winner <br/>Congratulations you Guess Right <br> Ther Right Answer is </br> ${randomNumber}`
            error.style.color = "green"
            submitbtn.style.display = "none"
            resetBtn.style.display = "block"

            
            }else{
                    if (input.value > 100) {
                        error.innerHTML = "Number Shouldn't be Greater then 100"
                    }else{
                        
                        if(input.value>randomNumber){

                            error.innerHTML = "Your Guess No is High"
                        }else if(input.value<randomNumber){
                            error.innerHTML = " Your Guess No is low"

                    }

                    guessArr.push(input.value)
                    guesses.innerHTML = "Your Guesses : " + guessArr.join(", ")
                    // guesses.innerHTML += input.value + ", "
                    
                    
                    
                }
            }
            
            atempted++;
            atempt.innerHTML = atempted
        }else{
            error.innerHTML = "Please guess the number"
        }
        
        input.value = ""
}