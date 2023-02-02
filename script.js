function createBasketBallDivs () {
    let basketballDiv = document.getElementById("basketballCourt")

    for (let i=0; i < 220; i++){

        let createdDiv = document.createElement("div")
        createdDiv.id = `${i}`
        createdDiv.style.border = "solid 0.25px green"

        createdDiv.addEventListener("mousedown",mouseDown)
        createdDiv.addEventListener("mousedown",mouseUp)
        document.addEventListener("keydown",keyDown)
        document.addEventListener("keyup",keyUp)
        createdDiv.addEventListener("mouseover",locations)


        basketballDiv.appendChild(createdDiv)
    }
}


let isMouseDown = false;
let iskeyPressed = false;
let keyPressed = "";
let currentLocation = "";


function mouseDown(evt){
    evt.preventDefault()
    isMouseDown = true
}

function mouseUp(evt){
    evt.preventDefault()
    isMouseDown = false
    console.log(isMouseDown)
}

function keyDown(evt){
    evt.preventDefault()
    iskeyPressed = true
    keyPressed = evt.key

    if (keyPressed == "2"){
        console.log("two")
    } else if (keyPressed == "3"){
        console.log("three")
    }

}

function keyUp(evt){
    evt.preventDefault()
    iskeyPressed = false
}

function locations(evt){
    evt.preventDefault()
    currentLocation = evt.srcElement.attributes.id.nodeValue
    console.log(currentLocation)
}

















createBasketBallDivs()