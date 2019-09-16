var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(960, 800, {backgroundColor : 0xb8a4f5});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("cat.png");



var grassland = new PIXI.Sprite(PIXI.Texture.fromImage("grassland.png"));
var flower = new PIXI.Sprite(PIXI.Texture.fromImage("flower1.png"));
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
flower.anchor.x = 0.5;
flower.anchor.y = 0.5;
flower.position.x = 96;
flower.position.y = 150;
stage.addChild(flower);

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

var cat = new PIXI.Sprite(texture);

cat.anchor.x = 0.5;
cat.anchor.y = 0.5;

cat.position.x = 512;
cat.position.y = 416;

//cat.scale.x = 0.2;
//cat.scale.y = 0.2;

cat.height = 32;
cat.width = 32;

stage.addChild(cat);

var cat_direction = 0; //Cat is facing left

function keydownEventHandler(e)
{
  if (e.keyCode == 87) // W Key
  {
    if (cat.position.y >= 10)
    {
      cat.position.y -= 32;
    }
  }

  if (e.keyCode == 83) // S Key
  {
    if (cat.position.y <= 790)
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

    if (cat.position.x >= 10)
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

    if (cat.position.x <= 990)
    {
      cat.position.x += 32;
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
