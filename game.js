var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(1000, 800, {backgroundColor : 0xb8a4f5});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture = PIXI.Texture.fromImage("cat.png");

var cat = new PIXI.Sprite(texture);

cat.anchor.x = 0.5;
cat.anchor.y = 0.5;

cat.position.x = 500;
cat.position.y = 400;

cat.scale.x = 0.2;
cat.scale.y = 0.2;

stage.addChild(cat);

function keydownEventHandler(e)
{
  if (e.keyCode == 87) // W Key
  {
    if (cat.position.y >= 10)
    {
      cat.position.y -= 10;
    }
  }

  if (e.keyCode == 83) // S Key
  {
    if (cat.position.y <= 790)
    {
      cat.position.y += 10;
    }
  }

  if (e.keyCode == 65) // A Key
  {
    if (cat.position.x >= 10)
    {
      cat.position.x -= 10;
    }
  }

  if (e.keyCode == 68) // D Key
  {
    if (cat.position.x <= 990)
    {
      cat.position.x += 10;
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
