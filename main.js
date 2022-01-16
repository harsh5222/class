function setup () {
    canvas = createCanvas(280,280)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSyntesis
}

function clearCanvas() {
    background("white");
}

function preload () {
    classifier = ml5.imageClassifier("Doodelenet");
}

function draw () {
    stokeweight(13);
    stoke(0);
    if (mouseIsPressed) {
        line (pmouseX , pmousey, mouseX, mousey);
    }
}

function classifyCanvas () {
    classifier.classify (canvas, gotResult); 
}

function gotResult (error, result) {

    if (error) {
        console.error(error);
    }
    console.log (results);
    document.getElementById('label').innerHTML = 'label: ' + results[0].label;

    document.getElementById('Confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

    utterThis = newspeechSynthesisUtterance(result[0].label);
    synth.speak(utterThis);
}