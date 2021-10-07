img5 = "";
status5 = "";
output5 = [];

function preload()
{
    img5 = loadImage('chair.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status5").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img5, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
        output5 = result;
}

function draw()
{
    image(img5, 0, 0, 650, 420);
    if (status != ""){
        for (i=0; i<output5.length; i++){
            document.getElementById("status5").innerHTML = "Status: Objects Detected";
            fill("red");
            confidence = floor(output5[i].confidence * 100);
            text(output5[i].label+" "+confidence+"%", output5[i].x + 20, output5[i].y + 20);
            noFill();
            stroke("red");
            rect(output5[i].x, output5[i].y, output5[i].width, output5[i].height);


        }
    }
}

function back()
{
    window.location = "index.html";  
}