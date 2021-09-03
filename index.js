const fs = require("fs"); //importing file system
const { createCanvas, loadImage} = require("canvas");
const console = require("console");
const canvas = createCanvas(1000, 1000); // Global canvas
const ctx = canvas.getContext("2d"); // ctx will create and draw arts

const saveLayer = (_canvas) =>{
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
    console.log("image created");

};

const drawLayer = async () => {
    const image = await loadImage("./p5.png");
    ctx.drawImage(image, 0, 0, 1000, 1000);
    console.log("This is image run");
    saveLayer(canvas); // passing global canvas
};

drawLayer();