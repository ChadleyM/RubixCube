window.currentStep = 1;
window.maxNumberSteps = 3;

function previous() {
    console.log("Step num: " + window.currentStep + " -> previous");
    if (window.currentStep > 1) {
        stopVid("frame" + window.currentStep);
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = false;
        nextBtn.style.backgroundColor = "orange"
        const oldStep = document.getElementById("step" + window.currentStep);
        window.currentStep--;
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    } 
    
    if (window.currentStep == 1) {
        const previousBtn = document.getElementById("previousBtn");
        previousBtn.disabled = true;
        previousBtn.style.backgroundColor = "grey"
        console.log("previousBtn.disable = true")
    }
}

function next() {
    console.log("maxNumberSteps: " + (window.maxNumberSteps));
    console.log("Step num: " + window.currentStep + " -> next");
    if (window.currentStep < window.maxNumberSteps) {
        stopVid("frame" + window.currentStep);
        const oldStep = document.getElementById("step" + window.currentStep);
        const previousBtn = document.getElementById("previousBtn");
        previousBtn.disabled = false;
        previousBtn.style.backgroundColor = "orange"
        window.currentStep++;
        const newStep = document.getElementById("step" + window.currentStep);
        oldStep.style.display = "none";
        newStep.style.display = "block";
    }

    if (window.currentStep >= window.maxNumberSteps) {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = true;
        nextBtn.style.backgroundColor = "grey"
        console.log("nextBtn.disable = true")
    }
}

function stopVid(frameRef) {
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

window.onload = function init() {
    const previousBtn = document.getElementById("previousBtn");
    previousBtn.disabled = true;
};
