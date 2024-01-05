import kaboom from "kaboom";

import carpetImage from "../sprites/carpet.png";
import wallImage from "../sprites/wall.png";
import doorImage from "../sprites/door.png";
import deskImage from "../sprites/desk.png";
import chairImage from "../sprites/chair.png";
import chairSwivelImage from "../sprites/chair_swivel.png";
import beanImage from "../sprites/bean.png";
import plImage from "../sprites/pennylee.png";
import ssImage from "../sprites/sophiasmith.png";
import rpImage from "../sprites/princessparis.png";

import plVid from "../videos/plVid.mp4"; // https://spankbang.com/54tpn/video/tits
import ssVid from "../videos/ssVid.mp4"; // https://spankbang.com/5l4j8/video/teachers+titties
import rpVid from "../videos/rpVid.mp4"; // https://spankbang.com/5othu/video/i+love+being+s+slut

kaboom({
  background: [105, 105, 105]
})

loadSprite("wall", wallImage)
loadSprite("carpet", carpetImage)
loadSprite("desk", deskImage)
loadSprite("chair", chairImage)
loadSprite("chairSwivel", chairSwivelImage)
loadSprite("door", doorImage)
loadSprite("bean", beanImage)
loadSprite("pennylee", plImage)
loadSprite("sophiasmith", ssImage)
loadSprite("princessparis", rpImage)

scene("main", (levelIdx) => {
  const levels = [
    [
      "---------",
      "-0000000-",
      "-0000000-",
      "-00000001",
      "20000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-00000003",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "---------",
    ],
    [
      "---------",
      "-0000P00-",
      "-00dddd0-",
      "|0000000-",
      "-0c0c0c0-",
      "-0000000-",
      "-0c0p0c0-",
      "---------",
    ],
    [
      "---------",
      "-000S000-",
      "-00ddd00-",
      "-0c0s0c0|",
      "-0000000-",
      "-0c0c0c0-",
      "-0000000-",
      "---------",
    ],
    [
      "---------",
      "-000wR00-",
      "-00rdd00-",
      "-00000c0-",
      "-0000000-",
      "|0c0c0c0-",
      "-0000000-",
      "---------",
    ],
  ]

  addLevel(levels[levelIdx], {
    tileWidth: 64,
    tileHeight: 64,
    pos: vec2(64, 64),
    tiles: {
      "0": () => [
        sprite("carpet"),
        area(),
        ],
      "-": () => [
        sprite("wall"),
        area(),
        body({ isStatic: true }),
        ],
      "d": () => [
        sprite("desk"),
        area(),
        body({ isStatic: true }),
        "desk",
        ],
      "c": () => [
        sprite("chair"),
        area(),
        "chair",
        ],
      "w": () => [
        sprite("chairSwivel"),
        area(),
        "chair",
        ],
      "|": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 0 },
        ],
      "1": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 1 },
        ],
      "P": () => [
        sprite("pennylee"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Sit down! Do what you're meant to be doing." },
      ],
      "p": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: plVid },
        ],
      "2": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 2 },
        ],
      "S": () => [
        sprite("sophiasmith"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Quiet please." },
      ],
      "s": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: ssVid },
        ],
      "3": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 3 },
        ],
      "R": () => [
        sprite("princessparis"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Oh my God! It's been so long!" },
      ],
      "r": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: rpVid },
        ],
      }

  })

  const player = add([
    sprite("bean"),  
    pos(150, 250),    
    area(),
    body(),          
  ])

  const dialog = add([
    text("Press ESC to leave video or dialogue"),
  ])

  let canMove = true;

  player.onCollide("special_chair", (ch) => {

    canMove = false;

    const videoEl = document.getElementById("vPlayer");
    videoEl.src = ch.vid;
    videoEl.style.display = "block"
  
    onKeyDown("escape", () => {
      videoEl.style.display = "none"
      videoEl.pause()
      canMove = true;
    })

  })

  player.onCollide("character", (ch) => {
    canMove = false;
    dialog.text = ch.msg
  })

  player.onCollide("door", (d) => {
    go("main", d.idx)
  })

  player.onUpdate(() => {
    camPos(player.pos)
  })

  // player movement directions
  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
  }

  // player movement
  if (canMove) {
    for (const dir in dirs) {
      onKeyDown(dir, () => {
        if (canMove) {
          dialog.text = ""
          player.move(dirs[dir].scale(320))
        }
      })
    }  
  }

  onKeyDown("escape", () => {
    dialog.text = ""
    canMove = true;
  })

})

go("main", 0)