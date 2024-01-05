import kaboom from "kaboom";

import carpetImage from "../sprites/carpet.png";
import wallImage from "../sprites/wall.png";
import doorImage from "../sprites/door.png";
import deskImage from "../sprites/desk.png";
import chairImage from "../sprites/chair.png";
import chairSwivelImage from "../sprites/chair_swivel.png";
import compImage from "../sprites/comp.png";
import beanImage from "../sprites/bean.png";
import plImage from "../sprites/pennylee.png";
import ssImage from "../sprites/sophiasmith.png";
import rpImage from "../sprites/princessparis.png";
import glImage from "../sprites/georgielyall.png";

import plVid from "../videos/plVid.mp4"; // https://spankbang.com/54tpn/video/tits
import ssVid from "../videos/ssVid.mp4"; // https://spankbang.com/5l4j8/video/teachers+titties
import rpVid from "../videos/rpVid.mp4"; // https://spankbang.com/5othu/video/i+love+being+s+slut
import glVid from "../videos/glVid.mp4"; // https://spankbang.com/6c7dn/video/my+favourite+british+girl+joi


kaboom({
  background: [105, 105, 105]
})

loadSprite("wall", wallImage)
loadSprite("carpet", carpetImage)
loadSprite("desk", deskImage)
loadSprite("chair", chairImage)
loadSprite("chairSwivel", chairSwivelImage)
loadSprite("comp", compImage)
loadSprite("door", doorImage)
loadSprite("bean", beanImage)
loadSprite("pennylee", plImage)
loadSprite("sophiasmith", ssImage)
loadSprite("princessparis", rpImage)
loadSprite("georgielyall", glImage)

let charismaPoints = 0;

scene("main", (levelIdx) => {
  const levels = [
    [
      "---------",
      "-000_000-",
      "-0000000-",
      "-000c0001",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "20000000-",
      "-00000003",
      "-0000000-",
      "-0000000-",
      "40000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
      "-0000000-",
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
      "-000G000-",
      "-00ddd00-",
      "-0c0g0c0-",
      "-0000000|",
      "-0c0c0c0-",
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
      "_": () => [
        sprite("comp"),
        area(),
        body({ isStatic: true }),
        "computer",
        { msg: "Press ENTER to gain charisma points!" },
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
        { vid: rpVid, timestamp1: 6, timestamp2: 270, thresh1: 0, irrMsg: "...", thresh2: 30 },
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
        { vid: ssVid, timestamp1: 5, timestamp2: 388, thresh1: 20, irrMsg: "I'm busy right now. (you need 20 charisma)", thresh2: 50 },
        ],


      "3": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 3 },
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
        { vid: plVid, timestamp1: 7, timestamp2: 286, thresh1: 40, irrMsg: "Get on with your work! (you need 40 charisma)", thresh2: 70 },
      ],

      "4": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 4 },
        ],
      "G": () => [
        sprite("georgielyall"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "If you come back later I can help you with your essay." },
      ],
      "g": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: glVid, timestamp1: 5, timestamp2: 364, thresh1: 50, irrMsg: "Sorry, I'm too busy to help you. (you need 50 charisma)", thresh2: 80 },
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
  let atComp = false;

  player.onCollide("special_chair", (ch) => {

    canMove = false;

    if (charismaPoints < ch.thresh1) {

      dialog.text = ch.irrMsg;

    } else {

      const videoEl = document.getElementById("vPlayer");
    
      if (ch.timestamp2 && charismaPoints >= ch.thresh2) {
        videoEl.src = ch.vid + "#t=" + ch.timestamp2;
      } else if (ch.timestamp1) {
        videoEl.src = ch.vid  + "#t=" + ch.timestamp1;;
      } else {
        videoEl.src = ch.vid;
      }
      videoEl.style.display = "block"
    
      onKeyDown("escape", () => {
        videoEl.style.display = "none"
        videoEl.pause()
        canMove = true;
      })

    }

  })

  player.onCollide("character", (ch) => {
    canMove = false;
    dialog.text = ch.msg
  })

  // charisma system
  onKeyPress("enter", () => {
    if (atComp) {
        charismaPoints++;
        dialog.text = `Charisma Points: ${charismaPoints}`
    }
  })

  player.onCollide("computer", (c) => {
    canMove = false;
    atComp = true;
    dialog.text = c.msg
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
    atComp = false;
  })

})

go("main", 0)