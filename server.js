let Discord = require("discord.js");
let client = new Discord.Client();
const welcome = require('./welcome')
const bot = new Discord.Client()
client.on('ready', () => {
  console.log('the client is ready!')
})



bot.on('guildMemberAdd', member => {
    member.guild.channels.get('861978104754995230').send("Welcome ${member.user.tag}please read rules in the rules channel :D"); 
});

client.on("message", message => {
  if (message.content === "ping") {
    return message.channel.send("pong");
  }
});

client.login("ODYxMzQ4MjkwMjI5NTY3NTA5.YOIfGw.xit2vqD0ysDGOzRTdzqPlH_UtnU");

client.on("message", message => {
  if (message.content === "hello") {
    return message.channel.send("hi");
  }
});

client.on("message", message => {
  if (message.content === "omaewamushinderu") {
    return message.channel.send("nani!!! https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fnani.jfif?1625518969001")

  }
});

client.on("message", message => {
  if (message.content === "chicken wing") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fchicken%20wing.jfif?1625501271115");
  }
});

client.on("message", message => {
  if (message.content === "potato man") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Ftrump.jfif?1625501448916");
  }
});

client.on("message", message => {
  if (message.content === "happy poem") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fthumbnails%2Fbaids.jpg?1625501620115");
  }
});

client.on("message", message => {
  if (message.content === "TONY") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fthumbnails%2Ftony.jpg?1625501709765")
  
  }
});

client.on("message", message => {
  if (message.content === "Maths homework apps") {
    return message.channel.send("https://justdomyhomework.com/blog/app-for-math-homework");
  }
});

client.on("message", message => {
  if (message.content === "deez") {
    return message.channel.send("nutz");
  }
});


client.on("message", message => {
  if (message.content === "nigerundayo") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fnigerundayo.jfif?1625517690189");
  }
});

client.on("message", message => {
  if (message.content === "teenlok is") {
    return message.channel.send("cheese");
  }
});

client.on("message", message => {
  if (message.content === "cheese is") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fcheese%20man.jfif?1625519460942");
  }
});


client.on("message", message => {
  if (message.content === "FINISHING MOVE... SPAM HELL") {
    return message.channel.send("ftvcxhb usfyhdsjieu8wghfidgiabihgbaihdsfisbdibsidfbisfbihsvfavsdfhispamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamaspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamspamamspamspamamspamspam");
  }
});

client.on("message", message => {
  if (message.content === "tk") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fthumbnails%2Ftk.jpg?1625520296958");
  }
});

client.on("message", message => {
  if (message.content === "junxi is") {
    return message.channel.send("allergic to plums");
  }
});

client.on("message", message => {
  if (message.content === "Plum god be like") {
    return message.channel.send("https://cdn.glitch.com/46ff8738-f42e-4fff-a317-b579ba515c4c%2Fplum.jfif?1625520909994");
  }
});


let express = require("express"),
    http = require('http'),
    app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendStatus(200); // Status: OK
});

let listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


client.on("message", message => {
  if (message.content === "") {
    return message.channel.send("allergic to plums");
  }
});