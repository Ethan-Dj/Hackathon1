let mapArray = []

//array for each [2points made, 2points miss, 3points made 3 points missed]

function createBasketBallDivs () {
    let basketballDivhome = document.getElementById("home")
    let basketballDivaway = document.getElementById("away")

// home team divs are between 0 and 109
    for (let i=0; i < 110; i++){
        //creates array filled with stats
        mapArray.push([0,0,0,0])

        // create divs with style
        let createdDiv = document.createElement("div")
        createdDiv.id = `${i}`
        createdDiv.style.border = "solid 0.25px green"
        
        //creates event listener
        createdDiv.addEventListener("mousedown",mouseDown)
        document.addEventListener("keydown",keyDown)
        document.addEventListener("keyup",keyUp)
        createdDiv.addEventListener("mouseover",locations)

        basketballDivhome.appendChild(createdDiv)
    }

// away team divs are between 110 and 119
    for (let i=110; i < 220; i++){
        //creates array filled with stats
        mapArray.push([0,0,0,0])

        // create divs with style
        let createdDiv = document.createElement("div")
        createdDiv.id = `${i}`
        createdDiv.style.border = "solid 0.25px green"

        //creates event listener
        createdDiv.addEventListener("mousedown",mouseDown)
         document.addEventListener("keydown",keyDown)
        document.addEventListener("keyup",keyUp)
        createdDiv.addEventListener("mouseover",locations)

        basketballDivaway.appendChild(createdDiv)
    }
}

let isMouseDown = false;
let iskeyPressed = false;
let keyPressed = "";
let currentLocation;
let homeTeamScore = 0;
let awayTeamScore = 0;


// functions as result of the event listeners
function mouseDown(evt){
    evt.preventDefault()
    isMouseDown = true
}

function keyUp(evt){
    evt.preventDefault()
    iskeyPressed = false
}

function locations(evt){
    evt.preventDefault()
    currentLocation = evt.srcElement.attributes.id.nodeValue
}


// key down function is when something happens
function keyDown(evt){
    evt.preventDefault()
    iskeyPressed = true
    keyPressed = evt.key

    // this is the for the home team 
    

    if (isMouseDown == true){ // this says that the basket was made
        // checks if it was a 2 pointer
        if (keyPressed == "2" && iskeyPressed == true){
            mapArray[currentLocation][0] += 1

            if (currentLocation < 110){
                homeTeamScore += 2
            } else{
                awayTeamScore += 2
            }

            // checks if it was a 3 pointer
        } else if (keyPressed == "3" && iskeyPressed == true){
            mapArray[currentLocation][2] += 1
            
            if (currentLocation < 110){
                homeTeamScore += 3
            } else{
                awayTeamScore += 3
            }
        }
    } 
            
        // this says that the basket was missed
    else {
        // checks if it was a 2 pointer
        if (keyPressed == "2" && iskeyPressed == true){
        mapArray[currentLocation][1] += 1
        // checks if it was a 3 pointer
        } else if (keyPressed == "3" && iskeyPressed == true){
        mapArray[currentLocation][3] += 1
        }
    }
    
    console.log(mapArray[currentLocation])
} 

createBasketBallDivs()

// The above code makes the divs for the basketball court and sets up the data collection

// This code gets the data from the buttons depending on freethrows

let homeFTMadeCounter = 0
let homeFTMissedCounter = 0

let awayFTMadeCounter = 0
let awayFTMissedCounter = 0

document.getElementById("homeFTMade").addEventListener("click",homeMadeFT)
document.getElementById("homeFTMissed").addEventListener("click",homeMissedFT)

document.getElementById("awayFTMade").addEventListener("click",awayMadeFT)
document.getElementById("awayFTMissed").addEventListener("click",awayMissedFT)

function homeMadeFT(){
    let FTButton = document.getElementById("homeFTMade")
    homeFTMadeCounter += 1
}

function homeMissedFT(){
    let FTButton = document.getElementById("homeFTMissed")
    homeFTMissedCounter += 1
}

function awayMadeFT(){
    let FTButton = document.getElementById("awayFTMade")
    awayFTMadeCounter += 1
}

function awayMissedFT(){
    let FTButton = document.getElementById("awayFTMissed")
    awayFTMissedCounter += 1
}