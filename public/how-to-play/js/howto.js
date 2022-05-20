const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

previousBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

function previous(tutorialStep) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.currentStep > 1) {
        stopVid("frame" + window.currentStep);
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = "orange";
        const oldStep = document.getElementById("step" + window.currentStep);
        if (!isNaN(tutorialStep)) {
            window.currentStep = tutorialStep;
        } else {
            window.currentStep--;
        }
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    } 
    
    if (window.currentStep == 1) {
        // const previousBtn = document.getElementById("previousBtn");
        previousBtn.disabled = true;
        previousBtn.style.backgroundColor = "grey";
    }
}

function next(tutorialStep) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.currentStep < window.maxNumberSteps) {
        stopVid("frame" + window.currentStep);
        const oldStep = document.getElementById("step" + window.currentStep);
        previousBtn.disabled = false;
        previousBtn.style.backgroundColor = "orange";
        if (!isNaN(tutorialStep)) {
            window.currentStep = tutorialStep;
        } else {
            window.currentStep++;
        }
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    }

    if (window.currentStep >= window.maxNumberSteps) {
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "grey";
    }
}

async function stopVid(frameRef) {
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
    if (window.currentStep === 7) {
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
        let heading = headings[index].innerHTML;
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

initialiseLocalNav();

window.onload = function init() {
    window.currentStep = 1;
    window.maxNumberSteps = document.getElementsByTagName("article").length;
    previousBtn.disabled = true;
};
