import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const {SMP_HOST, SMP_PORT, SMP_USER, SMP_PASS} = process.env;

const transport = nodemailer.createTransport({
    host: SMP_HOST,
    port: SMP_PORT,
    auth:{
        user: SMP_USER,
        pass: SMP_PASS
    }
});

const sendMailUtil = async (email, subject, body) => {
    try {
        const mailOptions = {
            from: SMP_USER,
            to: email,
            subject,
            text: body
        };

    await transport.sendMail(mailOptions);

    } catch (error) {
        console.log(error);
        senMailError();
    }
};

export default sendMailUtil;