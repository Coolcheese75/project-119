function setup() {
    canvas = createCanvas(300, 225);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cInJB0bxA/model.json',modeLoaded);
    }
    
    function draw() {
        image(video, 0,0, 300,225);
        classifier.classify(video,gotResult);
    }
    
    function modeLoaded() {
        console.log("Model Loaded!");
    }
    
    function gotResult(error, results) {
     if (error) {
         console.error(error);
     } else {
         console.log(results)
         document.getElementById("result_family_name").innerHTML=results[0].label;
         document.getElementById("result_family_accuracy").innerHTML=results[0].confidence.toFixed(3);
     }
    }