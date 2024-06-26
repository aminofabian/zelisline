// route.ts

import nodemailer from 'nodemailer';




export default async function ContactHandler(req, res) {
  const { name, email, message } = req.body;
  const user = process.env.user;
  const pass = process.env.pass;
  const data = {
    name,
    email,
    message
  };
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: user,
      pass: process.env.pass,
    },
    secure: true,
  });


  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  const mailData = {
    from: {
      name: `${name}`,
      address: `${email}`,
    },
    replyTo: email,
    to: `zelisline@gmail.com, ${email}`,
    subject: `form message`,
    text: message,
    html: `Thank you for contacting us. We've received your message as follows: ${message} We'll respond to you within 24 hours`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });

  // try {

  //   const mail = await transporter.sendMail({
  //     from: user,
  //     to: "zelisline@gmail.com",
  //     replyTo: email,
  //     subject: `Zelisline Contact Form Submission From ${name}`,
  //     html: `<p>You have a new contact form submission</p><br>
  //     <p><strong>Name: </strong>${name}</p><br>
  //     <p><strong>Email: </strong>${email}</p><br>
  //     <p><strong>Message: </strong>${message}</p><br>
  //     `,

  //   });

  //   return res.status(200).json({
  //     message: 'successful',
  //     data
  //   });

  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ error: 'Error sending message. Your message was not sent' });
  // }

}
