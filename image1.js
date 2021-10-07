img1 = "";
status1 = "";
output1 = [];

function preload()
{
    img1 = loadImage('A.C.jpg');
}

function setup()
{
    canvas = createCanvas(650, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
} 

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img1, gotResult);
}

function gotResult(error, result)
{
    if (error) {
        console.log(error);
    }
        console.log(result);
        output1 = result;
}

function draw()
{
    image(img1, 0, 0, 650, 420);
    if (status != ""){
        for (i=0; i<output1.length; i++){
            document.getElementById("status1").innerHTML = "Status: Objects Detected";
            fill("red");
            confidence = floor(output1[i].confidence * 100);
            text(output1[i].label+" "+confidence+"%", output1[i].x + 20, output1[i].y + 20);
            noFill();
            stroke("red");
            rect(output1[i].x, output1[i].y, output1[i].width, output1[i].height);


        }
    }
    
}

function back()
{
    window.location = "index.html";  
}
