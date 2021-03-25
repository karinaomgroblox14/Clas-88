var canvas= new fabric.Canvas("myCanvas");

player_y= 10;
player_x= 10;

block_image_width= 30;
block_image_height= 30;

var player_objects= "";
var block_image_object= "";

function player_update() {
fabric.Image.fromURL("player.png", function(img) {

    player_objects= img;

player_objects.scaleToWidth(150);
player_objects.scaleToHeight(140);
player_objects.set({
top:player_y, 
left:player_x
});
canvas.add(player_objects);
}
);
}

function get_image(x) {
    fabric.Image.fromURL(x, function(img) {
    
        block_object= img;
    
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top:player_y, 
    left:player_x
    });
    canvas.add(block_object);
    }
    );
    }

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed= e.keyCode;
console.log(keyPressed);

if (keyPressed == 80 && e.shiftKey == true){
block_image_height= block_image_height+10;
block_image_width= block_image_width+10;
document.getElementById("width").innerHTML=block_image_width;
document.getElementById("height").innerHTML=block_image_height;
}
if (keyPressed == 77 && e.shiftKey == true){
    block_image_height= block_image_height-10;
    block_image_width= block_image_width-10;
    document.getElementById("width").innerHTML=block_image_width;
    document.getElementById("height").innerHTML=block_image_height;
    }

 if (keyPressed == 38){
up();
console.log("up");
 }
 if (keyPressed == 40) {
    down();
    console.log("down");
 }
 if (keyPressed == 37) {
    left();
    console.log("left");
 }
if (keyPressed == 39){
right();
console.log("right");
}
if (keyPressed == 71){
get_image("ground.jpg");
console.log("ground");
}
if (keyPressed == 87){
get_image("wall.jpg");
console.log("wall");
}
if (keyPressed == 76){
get_image("light_green.png");
console.log("light_green");
}
if(keyPressed == 84){
get_image("trunk.jpg");
console.log("trunk");
}
if(keyPressed == 82){
get_image("roof.jpg");
console.log("roof");
}
if(keyPressed == 89){
get_image("yellow_wall.png");
console.log("yellow_wall");
}
if (keyPressed == 68){
get_image("dark_green.png");
console.log("dark_green");
}
if(keyPressed == 67){
get_image("cloud.jpg");
console.log("cloud");
}
if(keyPressed == 85){
get_image("unique.png");
console.log("unique");
}
}
function up(){
if (player_y>=0){
player_y= player_y-block_image_height;
canvas.remove(player_objects);
player_update();
}
}
function down(){
if (player_y<=460){
player_y= player_y+block_image_height;
canvas.remove(player_objects);
player_update();
}
}
function right() {
if (player_x<=860){
player_x= player_x+block_image_width;
canvas.remove(player_objects);
player_update();
}
}
function left() {
if (player_x>=0) {
player_x= player_x-block_image_width;
canvas.remove(player_objects);
player_update();
}
}
