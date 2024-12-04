// declairing modules
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = requier ("nodemailer");

// serer used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running")); // port 5000

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "samantha.chang.9612@gmail.com",
        pass: ""
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
})

router.past("/contact",(req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "samantha.chang.9612@gmail.com",
        subject: "Message from " + name + " Submission - Portfolio",
        html:`<p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>Message: ${message}</p>`
    };
    contactEmail.sendMail(mail,(error) => {
        if (error){
            res.json(error);
        } else {
            res.json({code: 200, status: "Message Sent"});
        }
    });
});

