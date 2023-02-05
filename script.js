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
        
        //creates event listener
        createdDiv.addEventListener("mousedown",mouseDown)
        createdDiv.addEventListener("mouseup",mouseUp)
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

        //creates event listener
        createdDiv.addEventListener("mousedown",mouseDown)
        createdDiv.addEventListener("mouseup",mouseUp)
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
    isMouseDown = true
}

function mouseUp(evt){
    isMouseDown = false
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

    

    if (isMouseDown == true){ // this says that the basket was made
        // checks if it was a 2 pointer
        if (keyPressed == "2" && iskeyPressed == true){
            mapArray[currentLocation][0] += 1
            if (currentLocation < 110){
                homeTeamScore += 2
                homeScore(homeTeamScore)
                home2PtPcCalc()
            } else{
                awayTeamScore += 2
                awayScore(awayTeamScore)
                away2PtPcCalc()
            }

        // checks if it was a 3 pointer
        } else if (keyPressed == "3" && iskeyPressed == true){
            mapArray[currentLocation][2] += 1 
            if (currentLocation < 110){
                homeTeamScore += 3
                homeScore(homeTeamScore)
                home3PtPcCalc()
            } else{
                awayTeamScore += 3
                awayScore(awayTeamScore)
                away3PtPcCalc()
            }
        }
    } 
            
        // this says that the basket was missed
    else {
        // checks if it was a 2 pointer
        if (keyPressed == "2" && iskeyPressed == true){
            mapArray[currentLocation][1] += 1
            if (currentLocation < 110){
                home2PtPcCalc()
            } else {
                away2PtPcCalc()
            }

        // checks if it was a 3 pointer
        } else if (keyPressed == "3" && iskeyPressed == true){
            mapArray[currentLocation][3] += 1
            if (currentLocation < 110){
                home3PtPcCalc()
            } else {
                away3PtPcCalc()
            }
        }
    }
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
    homeTeamScore += 1
    homeScore(homeTeamScore)
    homeFTPcClacl()
}

function homeMissedFT(){
    let FTButton = document.getElementById("homeFTMissed")
    homeFTMissedCounter += 1
    homeFTPcClacl()
}

function awayMadeFT(){
    let FTButton = document.getElementById("awayFTMade")
    awayFTMadeCounter += 1
    awayTeamScore += 1
    awayScore(awayTeamScore)
    awayFTPcClacl()
}

function awayMissedFT(){
    let FTButton = document.getElementById("awayFTMissed")
    awayFTMissedCounter += 1
    awayFTPcClacl()
}

// this code shows the score to the top

function homeScore(homeTeamScore){
    document.getElementById("pointsHome").innerText = homeTeamScore
}

function awayScore(awayTeamScore){
    document.getElementById("pointsAway").innerText = awayTeamScore
}

// this code calculates percentages of misses and makes

function home3PtPcCalc(){
    let makes = 0
    let misses = 0 
    for (let i=0; i < 110; i++){
        makes += mapArray[i][2]
        misses += mapArray[i][3]
    }
    home3PtPc = Math.round((makes/(misses+makes))*100)
    document.getElementById("threeHome").innerText = `3pt%: ${home3PtPc}`
}

function home2PtPcCalc(){
    let makes = 0
    let misses = 0 
    for (let i=0; i < 110; i++){
        makes += mapArray[i][0]
        misses += mapArray[i][1]
    }
    home2PtPc = Math.round((makes/(misses+makes))*100)
    document.getElementById("twoHome").innerText = `2pt%: ${home2PtPc}`
}

function away3PtPcCalc(){
    let makes = 0
    let misses = 0 
    for (let i=110; i < 220; i++){
        makes += mapArray[i][2]
        misses += mapArray[i][3]
    }
    away3PtPc = Math.round((makes/(misses+makes))*100)
    document.getElementById("threeAway").innerText = `3pt%: ${away3PtPc}`
}

function away2PtPcCalc(){
    let makes = 0
    let misses = 0 
    for (let i=0; i < 220; i++){
        makes += mapArray[i][0]
        misses += mapArray[i][1]
    }
    away2PtPc = Math.round((makes/(misses+makes))*100)
    document.getElementById("twoAway").innerText = `2pt%: ${away2PtPc}`
}

function homeFTPcClacl(){
    let pcCalcHome = Math.round((homeFTMadeCounter/(homeFTMadeCounter+homeFTMissedCounter))*100)
    document.getElementById("ftHome").innerText = `ftpt%: ${pcCalcHome}`
}

function awayFTPcClacl(){
    let pcCalcAway = Math.round((awayFTMadeCounter/(awayFTMadeCounter+awayFTMissedCounter))*100)
    document.getElementById("ftAway").innerText = `ftpt%: ${pcCalcAway}`
}

home3PtPcCalc()
away3PtPcCalc()

home2PtPcCalc()
away2PtPcCalc()

homeFTPcClacl()
awayFTPcClacl()

// This part makes the map
// for loop that calculates shot percentages 

function viewMapColor(){
    let makes = 0;
    let misses= 0 ;
    let shotPctg = 0;
    let shotsTaken = 0
    for(let i = 0; i < 220; i++){
        makes = mapArray[i][0] + mapArray[i][2]
        misses = mapArray[i][1] + mapArray[i][3]
        shotsTaken = makes + misses
        shotPctg = makes/shotsTaken
        let location = document.getElementById(`${i}`)
        location.style.backgroundColor ="orange"
        if (shotPctg > 0){
            location.style.opacity = `${shotPctg*0.75}`
            console.log(shotPctg)
        } else if (shotPctg == 0){
            location.style.backgroundColor = "blue"
            location.style.opacity = `0.2`
        } else {
            location.style.opacity = `0.01`
        }
    }
}

function removeMap(){
    for(let i = 0; i < 220; i++){
        for(let i = 0; i < 220; i++){
        let location = document.getElementById(`${i}`)
        location.style.opacity = `0.01`
        }
    }
}

viewMapColor()

document.getElementById("viewMap").addEventListener("click",viewMapColor)
document.getElementById("reset").addEventListener("click",removeMap)

