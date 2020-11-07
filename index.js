canvas = new fabric.Canvas("myCanvas"); //defining a fabric based canvas

//Variables
var block_img_width = 30;
var block_img_height = 30;

let player_obj = "";
let block_img_obj = "";

let player_x = 10;
let player_y = 10;

function player_update() {
    fabric.Image.fromURL("ironman.png", function (img) { //fetching the image
        player_obj = img;
        player_obj.scaleToWidth(150); //make the width
        player_obj.scaleToHeight(140); //height
        player_obj.set({ //putting the y and x of the image
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);
    });
}

function new_Image(get_Image) {
    fabric.Image.fromURL(get_Image, function (img) {
        block_img_obj = img;
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_img_obj);
    });
}

window.addEventListener("keydown", function (e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
        block_img_height = block_img_height + 10;
        console.log("Shift and P are pressed together");
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keyPressed == "77") {
        block_img_height = block_img_height - 10;
        console.log("Shift and P are pressed together");
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keyPressed == "70") {
        new_Image("ironman_face.png");
        console.log("Iron Man's Face is summoned.")
    }
    if (keyPressed == "66") {
        new_Image("spiderman_body.png");
        console.log("Spider Man's body is summoned.")
    }
    if (keyPressed == "76") {
        new_Image("hulk_legs.png");
        console.log("Hulk's legs are summoned.")
    }
    if (keyPressed == "82") {
        new_Image("thor_right_hand.png");
        console.log("Thor's right hand is summoned.")
    }
    if (keyPressed == "72") {
        new_Image("captain_america_left_hand.png");
        console.log("Cap's left hand is summoned.")
    }
    if (keyPressed == "38") {
        up();
        console.log("Up key is pressed.");
    }
    if (keyPressed == "40") {
        down();
        console.log("Down key is pressed.");
    }
    if (keyPressed == "37") {
        left();
        console.log("Left key is pressed.");
    }
    if (keyPressed == "39") {
        right();
        console.log("Right key is pressed.");
    }

})

function up() {
    if (player_y > 0) {
        player_y = player_y - block_img_height;
        canvas.remove(player_obj);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_img_height;
        canvas.remove(player_obj);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - block_img_width;
        canvas.remove(player_obj);
        player_update();
    }
}

function right() {
    if (player_x <= 900) {
        player_x = player_x + block_img_width;
        canvas.remove(player_obj);
        player_update();
    }
}