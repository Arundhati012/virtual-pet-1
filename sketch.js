var dog,happydog,database,foodS,foodStock

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  

  drawSprites();
  add (46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog addImage(doghappy);
  text("print foodStock")
  textSize(125)
  fill('green')
}
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
    }else{
      x=x-1;
    }
  database.ref('/').update({
  food:x
  })
}


