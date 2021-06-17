const sgMail=require('@sendgrid/mail');
const Mailgen=require('mailgen');
require('dotenv').config();

const sender=sgMail;
const GeneratorTemplate=Mailgen;



const createTemplate=(verifyToken,name)=>{
    const mailGenerator=new GeneratorTemplate({
        them:"default",
        product:{
            name:"Contacts",
            link:'http://localhost:3000/'
        }
    })
    const template={
        body:{
        name,
        intro: "Welcome to Contacts! We're very excited to have you on board.",
        action:{
            instructions:'To get started with Contacts, please click here:',
            button:{
                color:'#22BC66',
                text: 'Confirm your account',
                link:`http://localhost:3000/api/users/verify/${verifyToken}`
            }

        },
        outro:"Need help, or have questions?"
    }

    }
    const emailBody=mailGenerator.generate(template);
    return emailBody
}

const sendEmail=async(verifyToken, email, name)=>{
    const emailBody=createTemplate(verifyToken, email)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg={
        to:email,
        from:'novalenkov05@gmail.com',
        subject:'Sending with SendGrid is Fun',
        html:emailBody,
    }

    await sender.send(msg)
}



module.exports=sendEmail;