const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
    .then(() =>{
        console.log("connection successful")
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
let allChats= [
    {
        from: "shraddha",
        to: "aman",
        msg: "jhdjkfhjdjd",
        created_at: new Date()
    },
    {
        from: "deepak",
        to: "shreya",
        msg: "sjjdjfio ojdjfid oiidjfij",
        created_at: new Date()
        
    },
    {
        from: "shreya",
        to: "anchal",
        msg: "hdjff iijdofhn ddfhh",
        created_at: new Date()
    },
    {
        from: "sahil",
        to: "thor",
        msg: "send khdiof ohdiofhiod",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);