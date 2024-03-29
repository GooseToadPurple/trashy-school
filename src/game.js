import kaboom from "kaboom";

import carpetImage from "../sprites/carpet.png";
import wallImage from "../sprites/wall.png";
import doorImage from "../sprites/door.png";
import deskImage from "../sprites/desk.png";
import chairImage from "../sprites/chair.png";
import chairBlueImage from "../sprites/chair_blue.png";
import chairSwivelImage from "../sprites/chair_swivel.png";
import compImage from "../sprites/comp.png";
import beanImage from "../sprites/bean.png";
import plImage from "../sprites/pennylee.png";
import ssImage from "../sprites/sophiasmith.png";
import rpImage from "../sprites/princessparis.png";
import glImage from "../sprites/georgielyall.png";
import llImage from "../sprites/lucylauren.png";
import lgImage from "../sprites/lucygresty.png";
import ajImage from "../sprites/axajay.png";
import sbImage from "../sprites/sapphireblue.png";
import jrImage from "../sprites/jayerose.png";
import ftImage from "../sprites/fayetaylor.png";
import viImage from "../sprites/violet.png";
import caImage from "../sprites/charlieatwell.png";
import ivImage from "../sprites/ivy.png";

import plVid from "../videos/plVid.mp4"; // https://spankbang.com/54tpn/video/tits
import ssVid from "../videos/ssVid.mp4"; // https://spankbang.com/5l4j8/video/teachers+titties
import rpVid from "../videos/rpVid.mp4"; // https://spankbang.com/5othu/video/i+love+being+s+slut
import glVid from "../videos/glVid.mp4"; // https://spankbang.com/6c7dn/video/my+favourite+british+girl+joi
import llVid from "../videos/llVid.mp4"; // https://spankbang.com/5hxsf-eh1qsc/playlist/downblouse+wankitnow
import lgVid from "../videos/lgVid.mp4"; // https://spankbang.com/4h1z5/video/hot+for+teacher+joi
import ajVid from "../videos/ajVid.mp4"; // https://spankbang.com/3wgav-8f79dv/playlist/win+teacher
import sbVid from "../videos/sbVid.mp4"; // https://spankbang.com/5bicn/video/impress+me
import jrVid from "../videos/jrVid.mp4"; // https://spankbang.com/6wrs1/video/wank+class+pt1
import ftVid from "../videos/ftVid.mp4"; // https://spankbang.com/60w2y/video/sdfsfsfs
import viVid from "../videos/viVid.mp4"; // https://spankbang.com/5owvn/video/extracurricular+activities
import caVid from "../videos/caVid.mp4"; // https://spankbang.com/8gy9k/video/punishment+joi
import ivVid from "../videos/ivVid.mp4"; // https://wankitnow.com/videos/ivy-one-on-one-tutoring

kaboom({
  background: [105, 105, 105]
})

loadSprite("wall", wallImage)
loadSprite("carpet", carpetImage)
loadSprite("desk", deskImage)
loadSprite("chair", chairImage)
loadSprite("chairBlue", chairBlueImage)
loadSprite("chairSwivel", chairSwivelImage)
loadSprite("comp", compImage)
loadSprite("door", doorImage)
loadSprite("bean", beanImage)
loadSprite("pennylee", plImage)
loadSprite("sophiasmith", ssImage)
loadSprite("princessparis", rpImage)
loadSprite("georgielyall", glImage)
loadSprite("lucylauren", llImage)
loadSprite("lucygresty", lgImage)
loadSprite("axajay", ajImage)
loadSprite("sapphireblue", sbImage)
loadSprite("jayerose", jrImage)
loadSprite("fayetaylor", ftImage)
loadSprite("violet", viImage)
loadSprite("charlieatwell", caImage)
loadSprite("ivy", ivImage)

let charismaPoints = 0;

scene("main", (levelIdx) => {
  const levels = [
    [
      "---------",
      "β000_000-",
      "-0000000-",
      "-000c0001",
      "-0000000-",
      "-0000000-",
      "-0000000δ",
      "20000000-",
      "-00000003",
      "-0000000-",
      "-0000000-",
      "40000000-",
      "-00000005",
      "-0000000-",
      "α0000000-",
      "-00000008",
      "90000000-",
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
    [
      "---------------------",
      "-0000000000000L000006",
      "|00000000lvvv0000000-",
      "-------------------7-",
    ],
    [
      "---------------",
      "-dd000Uw0000dd-",
      "-00000ddd00000-",
      "-00000u0c00000Γ",
      "50000000000000-",
      "---------------",
    ],
    [
      "-------5-",
      "-00A0000-",
      "-00ddd00-",
      "-00a0c00-",
      "-0000000-",
      "-0c0c0c0-",
      "-0000000-",
      "---------",
    ],
    [
      "---------------",
      "-dd000B0000000-",
      "-00000dd000000-",
      "|00c0000b000c0-",
      "-0000c0000c000-",
      "---------------",
    ],
    [
      "---------",
      "-dvJ0000-",
      "-d000dd0-",
      "-00j0v00-",
      "-0000000-",
      "-0v0v0v0-",
      "-0000000|",
      "---------",
    ],
    [
      "---------",
      "-0000vvv-",
      "-dd00000|",
      "-000000F-",
      "-00v0f0d-",
      "-000000d-",
      "-v00v00v-",
      "---------",
    ],
    [
      "---------",
      "-000I000-",
      "-00ddd00|",
      "-0c0i0c0-",
      "-0000000-",
      "-0c0c0c0-",
      "-0000000-",
      "---------",
    ],
    [
      "-------------",
      "-dd000H000dd-",
      "-0000ddd0000-",
      "600000h00000-",
      "-00000000000-",
      "-------------",
    ],
    [
      "---------",
      "-00000d0-",
      "-000000Y-",
      "-00c0y00-",
      "|0000000-",
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
      "v": () => [
        sprite("chairBlue"),
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


      "5": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 5 },
        ],
      "L": () => [
        sprite("lucylauren"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "I'm sorry, but you have to go to detention." },
      ],
      "l": () => [
        sprite("chairBlue"),
        area(),
        "special_chair",
        { vid: llVid, timestamp1: 7, timestamp2: 365, thresh1: 80, irrMsg: "There you are! Detention is this way. (you need 80 charisma)", thresh2: 110 },
      ],


      "6": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 6 },
        ],
      "U": () => [
        sprite("lucygresty"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Take a seat and I will speak to you." },
      ],
      "u": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: lgVid, timestamp1: 4.5, timestamp2: 551, thresh1: 150, irrMsg: "Your grades are appalling. (you need 150 charisma)", thresh2: 180 },
      ],

      "7": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 7 },
        ],
      "A": () => [
        sprite("axajay"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Oh hello! You look like you're new." },
      ],
      "a": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: ajVid, timestamp1: 4.5, timestamp2: 478, thresh1: 90, irrMsg: "You should go to the headmistress. (you need 90 charisma)", thresh2: 120 },
      ],

      "8": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 8 },
        ],
      "B": () => [
        sprite("sapphireblue"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "I have to have rules, I'm sorry." },
      ],
      "b": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: sbVid, timestamp1: 4.5, timestamp2: 299, thresh1: 50, irrMsg: "Please do your work in silence (you need 50 charisma)", thresh2: 80 },
      ],

      "9": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 9 },
        ],
      "J": () => [
        sprite("jayerose"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Congratulations on your results!" },
      ],
      "j": () => [
        sprite("chairBlue"),
        area(),
        "special_chair",
        { vid: jrVid, timestamp1: 4.6, timestamp2: 477.5, thresh1: 20, irrMsg: "Well done! You can go now. (you need 20 charisma)", thresh2: 50 },
      ],

      "α": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 10 },
        ],
      "F": () => [
        sprite("fayetaylor"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "I asked you to tidy!" },
      ],
      "f": () => [
        sprite("chairBlue"),
        area(),
        "special_chair",
        { vid: ftVid, timestamp1: 8, timestamp2: 424, thresh1: 60, irrMsg: "All I asked was for you to tidy! (you need 60 charisma)", thresh2: 90 },
      ],

      "β": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 11 },
        ],
      "I": () => [
        sprite("violet"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Ah, you're here! Take a seat." },
      ],
      "i": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: viVid, timestamp1: 7, timestamp2: 317.3, thresh1: 10, irrMsg: "Thank you for staying after school. (you need 10 charisma)", thresh2: 40 },
      ],

      "Γ": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 12 },
        ],
      "H": () => [
        sprite("charlieatwell"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Sit down. You are in big trouble." },
      ],
      "h": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: caVid, timestamp1: 4.7, timestamp2: 412.2, thresh1: 30, irrMsg: "Thank you for staying after school. (you need 30 charisma)", thresh2: 60 },
      ],

      "δ": () => [
        sprite("door"),
        area(),
        body({ isStatic: true }),
        "door",
        { idx: 13 },
        ],
      "Y": () => [
        sprite("ivy"),
        area(),
        body({ isStatic: true }),
        "character",
        { msg: "Oh, I'm glad you're hear!" },
      ],
      "y": () => [
        sprite("chair"),
        area(),
        "special_chair",
        { vid: ivVid, timestamp1: 7.5, timestamp2: 600, thresh1: 50, irrMsg: "Thank you for coming in. (you need 50 charisma)", thresh2: 80 },
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