img4 = "";
status4 = "";
output4 = [];

function preload()
{
    img4 = loadImage('fan.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status4").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img4, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
        output4 = result;
}

function draw()
{
    image(img4, 0, 0, 650, 420);
    if (status != ""){
        for (i=0; i<output4.length; i++){
            document.getElementById("status4").innerHTML = "Status: Objects Detected";
            fill("red");
            confidence = floor(output4[i].confidence * 100);
            text(output4[i].label+" "+confidence+"%", output4[i].x + 20, output4[i].y + 20);
            noFill();
            stroke("red");
            rect(output4[i].x, output4[i].y, output4[i].width, output4[i].height);


        }
    }
}

function back()
{
    window.location = "index.html";  
}