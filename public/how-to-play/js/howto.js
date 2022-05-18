const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

previousBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

function previous(tutorialStep) {
    console.log("Step num: " + window.currentStep + " -> previous");
    console.log("Test" + !tutorialStep);
    if (window.currentStep > 1) {
        stopVid("frame" + window.currentStep);
        // const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = "orange"
        const oldStep = document.getElementById("step" + window.currentStep);
        if (!isNaN(tutorialStep)) {
            window.currentStep = tutorialStep;
        } else {
            window.currentStep--;
            console.log("normal nav");
        }
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    } 
    
    if (window.currentStep == 1) {
        // const previousBtn = document.getElementById("previousBtn");
        previousBtn.disabled = true;
        previousBtn.style.backgroundColor = "grey"
        console.log("previousBtn.disable = true")
    }
}

function next(tutorialStep) {
    console.log("maxNumberSteps: " + (window.maxNumberSteps));
    console.log("Step num: " + window.currentStep + " -> next");
    console.log("Test with num" + tutorialStep);
    if (window.currentStep < window.maxNumberSteps) {
        stopVid("frame" + window.currentStep);
        const oldStep = document.getElementById("step" + window.currentStep);
        // const previousBtn = document.getElementById("previousBtn");
        previousBtn.disabled = false;
        previousBtn.style.backgroundColor = "orange"
        if (!isNaN(tutorialStep)) {
            window.currentStep = tutorialStep;
        } else {
            window.currentStep++;
            console.log("normal nav");
        }
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    }

    if (window.currentStep >= window.maxNumberSteps) {
        // const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "grey"
        console.log("nextBtn.disable = true")
    }
}

async function stopVid(frameRef) {
    console.log("Stop Vid" + frameRef);
    let youTubeFrame = document.getElementById(frameRef);
    youTubeFrame.src += "&enablejsapi=1";
    youTubeFrame.contentWindow.postMessage(
        JSON.stringify({
            'event': 'command',
            'func': 'stopVideo',
            'args': ''
        }), 
        "*"
    );
}

function jumpToStep(event) {
    if (event.currentTarget.tutorialStep === 1) {
        previous(event.currentTarget.tutorialStep);
    }
    else {
        next(event.currentTarget.tutorialStep);
    }
}

function initialiseLocalNav() {
    let headings = document.getElementsByTagName("h2");    
    let algoNavPanel = document.getElementById("algo-directory");
    for (let index = 0; index < headings.length; index++) {
        let heading = headings[index].innerHTML
        let liTag = document.createElement("li");
        let anchorTag = document.createElement("a");
        let text = document.createTextNode(heading);
        anchorTag.href = "#";
        anchorTag.appendChild(text);
        liTag.appendChild(anchorTag);
        liTag.addEventListener('click', jumpToStep, false);
        liTag.tutorialStep = index + 1;
        algoNavPanel.appendChild(liTag);
    }
}

window.onload = function init() {
    window.currentStep = 1;
    window.maxNumberSteps = document.getElementsByTagName("article").length;
    initialiseLocalNav();
    console.log(window.maxNumberSteps);
    previousBtn.disabled = true;
};
