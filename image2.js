img2 = "";
status2 ="";
output2 = [];

function preload()
{
    img2 = loadImage('Clock.webp');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img2, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
        output2 = result;
}

function draw()
{
    image(img2, 0, 0, 650, 420);
    if (status != ""){
        for (i=0; i<output2.length; i++){
            document.getElementById("status2").innerHTML = "Status: Objects Detected";
            fill("red");
            confidence = floor(output2[i].confidence * 100);
            text(output2[i].label+" "+confidence+"%", output2[i].x + 20, output2[i].y + 20);
            noFill();
            stroke("red");
            rect(output2[i].x, output2[i].y, output2[i].width, output2[i].height);


        }
    }
}



function back()
{
    window.location = "index.html";  
}