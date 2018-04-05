const { db, Celeb } = require("../server/db/models");

const celebs = [
  {
    name: "Jennifer Lopez",
    fullPhoto: "https://i.imgur.com/flewa1k.jpg",
    chinCropPhoto: "https://i.imgur.com/FBbk0RC.jpg"
  },
  {
    name: "John Travolta",
    fullPhoto: "https://i.imgur.com/SN6iCYv.jpg",
    chinCropPhoto: "https://i.imgur.com/LLt5qIE.jpg"
  },
  {
    name: "Oprah",
    fullPhoto: "https://i.imgur.com/yZ1kAWt.jpg",
    chinCropPhoto: "https://i.imgur.com/XmDSh0z.jpg"
  },
  {
    name: "Chrissy Teigen",
    fullPhoto: "https://i.imgur.com/6wPX9q3.jpg",
    chinCropPhoto: "https://i.imgur.com/mCz7cin.jpg"
  },
  {
    name: "Daniel Day-Lewis",
    fullPhoto: "https://i.imgur.com/B5xtqoF.jpg",
    chinCropPhoto: "https://i.imgur.com/O9D0llf.jpg"
  },
  {
    name: "Rihanna",
    fullPhoto: "https://i.imgur.com/Q1IDtrp.jpg",
    chinCropPhoto: "https://i.imgur.com/1OaZrEC.jpg"
  },
  {
    name: "Brad Pitt",
    fullPhoto: "[img]https://i.imgur.com/JwwmiV4.jpg[/img]",
    chinCropPhoto: "https://i.imgur.com/Tma2NLc.jpg"
  },
  {
    name: "Barack Obama",
    fullPhoto: "https://i.imgur.com/9ST5MRQ.jpg",
    chinCropPhoto: "https://i.imgur.com/KL13f7N.jpg"
  },
];

const seed = () => Promise.all(celebs.map(celeb => Celeb.create(celeb)));

const main = () => {
  console.log("syncing db");
  db
    .sync({ force: true })
    .then(() => {
      console.log("seeding");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      console.log("SEEDING SUCCESS");
      db.close();
      return null;
    });
};

main();
