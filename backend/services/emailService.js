import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

  service:"gmail",

  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
  }

});

export const sendEmail = async (
  subject,
  message,
  sendTo
)=>{

  await transporter.sendMail({

    from:process.env.EMAIL_USER,

    to:sendTo,

    subject,

    html:message

  });

};