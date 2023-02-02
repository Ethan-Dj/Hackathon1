function createBasketBallDivs () {
    let basketballDiv = document.getElementById("basketballCourt")
    console.log("here")
    for (let i=0; i < 800; i++){
        console.log(i)
        let createdDiv = document.createElement("div")
        createdDiv.id = `div${i}`
        createdDiv.style.border = "solid 0.25px green"
        basketballDiv.appendChild(createdDiv)
    }
}

createBasketBallDivs()