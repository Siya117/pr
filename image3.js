img3 = "";
status3 = "";
output3 = [];

function preload()
{
    img3 = loadImage('bed.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status3").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img3, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
        output3 = result;
}

function draw()
{
    image(img3, 0, 0, 650, 420);
    if (status != ""){
        for (i=0; i<output3.length; i++){
            document.getElementById("status3").innerHTML = "Status: Objects Detected";
            fill("red");
            confidence = floor(output3[i].confidence * 100);
            text(output3[i].label+" "+confidence+"%", output3[i].x + 20, output3[i].y + 20);
            noFill();
            stroke("red");
            rect(output3[i].x, output3[i].y, output3[i].width, output3[i].height);


        }
    }
}

function back()
{
    window.location = "index.html";  
}