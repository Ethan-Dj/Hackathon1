function createBasketBallDivs () {
    let basketballDiv = document.getElementById("basketballCourt")
    console.log("here")
    for (let i=0; i < 220; i++){
        console.log(i)
        let createdDiv = document.createElement("div")
        createdDiv.id = `div${i}`
        createdDiv.style.border = "solid 0.25px green"


        createdDiv.addEventListener("mousedown",mouseDown)
        createdDiv.addEventListener("mousedown",mouseUp)
        createdDiv.addEventListener("key",amount)
        createdDiv.addEventListener("mouseover",location)

        basketballDiv.appendChild(createdDiv)
    }
}





















createBasketBallDivs()