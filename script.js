function createBasketBallDivs () {
    let basketballDiv = document.getElementById("basketballCourt")
    for (let i=0; i < 220; i++){
        let createdDiv = document.createElement("div")
        createdDiv.id = `div${i}`
        createdDiv.style.border = "solid 0.25px green"


        createdDiv.addEventListener("mousedown",mouseDown)
        createdDiv.addEventListener("mousedown",mouseUp)
        document.addEventListener("keydown",amount)
        createdDiv.addEventListener("mouseover",locations)

        basketballDiv.appendChild(createdDiv)
    }
}

let isMouseDown = false;
let keyPressed = "";
let currentLocation = ""


function mouseDown(evt){
    evt.preventDefault()
    isMouseDown = true
}

function mouseUp(evt){
    evt.preventDefault()
    isMouseDown = false
    console.log(isMouseDown)
}

function amount(evt){
    evt.preventDefault()
    keyPressed = evt.key
}

function locations(evt){
    evt.preventDefault()
    currentLocation = evt.srcElement.attributes.id.nodeValue
}


















createBasketBallDivs()