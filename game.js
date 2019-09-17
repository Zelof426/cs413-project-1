var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(960, 800, {backgroundColor : 0xb8a4f5});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("cat.png");



var grassland = new PIXI.Sprite(PIXI.Texture.fromImage("grassland.png"));

var i;

var flower_texture1 = PIXI.Texture.fromImage("flower1.png");
var flower_texture2 = PIXI.Texture.fromImage("flower2.png");

//var flower_array = [];
/*for (i = 0; i < 5; i++)
{
    var flower = new PIXI.Sprite(flower_texture1);
    flower.texture = flower_texture1;
    flower_array[i] = flower;
}*/

// var flower = new PIXI.Sprite(PIXI.Texture.fromImage("flower1.png"));
var tree_trunk_left = new PIXI.Sprite(PIXI.Texture.fromImage("tree1.png"));
var tree_canopy_left = new PIXI.Sprite(PIXI.Texture.fromImage("tree2.png"));


/*var map = new PIXI.Container();
map.position.x = 500;
map.position.y = 400;

stage.addChild(map);*/

//map.addChild(grassland);
grassland.anchor.x = 0.5;
grassland.anchor.y = 0.5;
grassland.position.x = 480;
grassland.position.y = 400;
stage.addChild(grassland);

/*var terrain = new PIXI.Container();
terrain.position.x = 500;
terrain.position.y = 400;
map.addChild(terrain);*/

//grassland.addChild(terrain);

//terrain.addChild(flower);
/*for (i = 0; i < flower_array.length; i++)
{
    flower_array[i].anchor.x = 0.5;
    flower_array[i].anchor.y = 0.5;
    //flower_array[i].position.x = (Math.round((Math.random(32, 960)/32)*32));
    //flower_array[i].position.y = (Math.round((Math.random(32, 800)/32)*32));
    flower_array[i].position.x = 96;
    flower_array[i].position.y = 150;
    stage.addChild(flower_array[i]);
}*/

var flower1 = new PIXI.Sprite(flower_texture1);
flower1.texture = flower_texture1;

flower1.anchor.x = 0.5;
flower1.anchor.y = 0.5;
flower1.position.x = Math.round(Math.floor((Math.random()*896)+64)/32)*32;
flower1.position.y = Math.round(Math.floor((Math.random()*736)+64)/32)*32;
//flower1.position.x = 96;
//flower1.position.y = 160;
stage.addChild(flower1);

var flower2 = new PIXI.Sprite(flower_texture1);
flower2.texture = flower_texture1;

flower2.anchor.x = 0.5;
flower2.anchor.y = 0.5;
flower2.position.x = Math.round(Math.floor((Math.random()*896)+64)/32)*32;
flower2.position.y = Math.round(Math.floor((Math.random()*736)+64)/32)*32;
//flower1.position.x = 96;
//flower1.position.y = 160;
stage.addChild(flower2);


/*
//terrain.addChild(tree_trunk_left);
tree_trunk_left.anchor.x = 0.5;
tree_trunk_left.anchor.y = 0.5;
tree_trunk_left.position.x = 288;
tree_trunk_left.position.y = 288;
stage.addChild(tree_trunk_left);

tree_canopy_left.anchor.x = 0.5;
tree_canopy_left.anchor.y = 0.5;
tree_canopy_left.position.x = 288;
tree_canopy_left.position.y = 256;
stage.addChild(tree_canopy_left);
*/


var cat = new PIXI.Sprite(texture);

cat.anchor.x = 0.5;
cat.anchor.y = 0.5;

cat.position.x = 512;
cat.position.y = 448;

//cat.scale.x = 0.2;
//cat.scale.y = 0.2;

cat.height = 32;
cat.width = 32;

stage.addChild(cat);

var cat_direction = 0; //Cat is facing left

function keydownEventHandler(e)
{
  //Cat movement
  if (e.keyCode == 87) // W Key
  {
    if (cat.position.y >= 64)
    {
      cat.position.y -= 32;
    }
  }

  if (e.keyCode == 83) // S Key
  {
    if (cat.position.y <= 736)
    {
      cat.position.y += 32;
    }
  }

  if (e.keyCode == 65) // A Key
  {
    if (cat_direction == 1)
    {
        cat_direction = 0;
        cat.scale.x = 1;
        cat.height = 32;
        cat.width = 32;
    }

    if (cat.position.x >= 64)
    {
      cat.position.x -= 32;
    }
  }

  if (e.keyCode == 68) // D Key
  {
    if (cat_direction == 0)
    {
        cat_direction = 1;
        cat.scale.x = -1;
        cat.height = 32;
        cat.width = 32;
    }

    if (cat.position.x <= 896)
    {
      cat.position.x += 32;
    }
  }

   //Interaction
    if (e.keyCode == 69) // E Key
    {
        if (cat.position.x >= flower1.position.x &&
            cat.position.x <= flower1.position.x+32 &&
            cat.position.y >= flower1.position.y &&
            cat.position.y <= flower1.position.y+32)
        {
            var flower_eaten = new PIXI.Sprite(flower_texture2);
            flower_eaten.texture = flower_texture2;

            flower_eaten.anchor.x = 0.5;
            flower_eaten.anchor.y = 0.5;
            flower_eaten.position.x = cat.position.x;
            flower_eaten.position.y = cat.position.y;
            stage.addChild(flower_eaten);
            stage.addChild(cat);


            flower1.position.x = Math.round(Math.floor((Math.random()*896)+64)/32)*32;
            flower1.position.y = Math.round(Math.floor((Math.random()*736)+64)/32)*32;
            flower2.position.x = Math.round(Math.floor((Math.random()*896)+64)/32)*32;
            flower2.position.y = Math.round(Math.floor((Math.random()*736)+64)/32)*32;

        }
        if (cat.position.x >= flower2.position.x &&
            cat.position.x <= flower2.position.x+32 &&
            cat.position.y >= flower2.position.y &&
            cat.position.y <= flower2.position.y+32)
        {

        }
    }
}

document.addEventListener("keydown", keydownEventHandler);


function mouseHandler(e)
{
  cat.position.x = 200;
  cat.position.y = 200;
}

cat.interactive = true;
cat.on("mousedown", mouseHandler);

function animate()
{
  requestAnimationFrame(animate);
  renderer.render(stage);
}

animate();
