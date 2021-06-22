var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_image="";
var block_image="";

function player_image_update(){
fabric.Image.fromURL("baby groot.png",function(Img){
    player_image=Img;
    player_image.scaleToWidth(150);
    player_image.scaleToHeight(140);
    player_image.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_image);
});
}