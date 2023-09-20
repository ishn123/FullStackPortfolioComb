const exp = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const youtube = require("youtube-notification");
// const emailJS = require("emailjs");
const serviceID = 'default_service';
const templateID = 'template_ltl49k5';
dotenv.config();
const channelId = process.env.CHANNEL_ID;
const buildPath = path.join(__dirname,"build");
console.log(buildPath);
const app = exp();
app.use(cors());
app.use(bodyParser.json());
app.use(exp.static(buildPath));


const notifier = new youtube({
    hubCallback:"https://full-stack-port.onrender.com/youtube/notifications"
})


app.use("/youtube/notifications",notifier.listener());
app.get("*",(req, res, next) => {
    console.log(req);
    res.sendFile(path.join(buildPath,"index.html"));
  });

app.post("/sendemail", async(req, res) => {
    const {email,message} = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "webbeaver007@gmail.com",
            pass: "qrir uqlb juef cyhm"
        }
    });
    await transporter.sendMail({
        from: "webbeaver007@gmail.com",
        to: "webbeaver007@gmail.com",
        subject: "From Portfolio Website",
        text: `From email ${email} with message\n ${message}`
    })
    .then((data)=>{
        console.log("Work done");
        res.sendStatus(201);
    })
    .catch((err)=>{
        console.log("Work not done");
        console.log(err);
        res.sendStatus(501);
    }
    );

    
})

app.listen(8000,()=>{
    console.log("Listening to Port 8000....");
})
notifier.subscribe(channelId);
notifier.on("subscribe",(data)=>{
    console.log(data);
    console.log(`The channel notification is now getting listened by dnddn`);
});
notifier.on("notified",(data)=>{
    console.log(data);
    console.log(`New updates from channel name ${data.channel.name} with title ${data.video.title}`);
    // emailJS.send(serviceID,templateID,)
})

