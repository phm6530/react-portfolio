const nodeMailer = require('nodemailer');

const myMail = nodeMailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
    },
});

const mailOpt = (who, contents, radioOption, yourContact) => {
    const mailOptions = {
        from: process.env.MAIL_ID,
        to: process.env.MAIL_ID,
        subject: `[${radioOption}] ${who}님의 문의사항`,
        html: `
            [${radioOption}]<br>
            보내신분 : ${who} <br>
            연락처 : ${yourContact} <br>
            문의내용  :  ${contents}    <br>
      `,
    };
    return mailOptions;
};

const sendMail = async (mailOption) => {
    try {
        await myMail.sendMail(mailOption);
    } catch (error) {
        throw new Error('메일 전송 에러' + error.message);
    }
};

module.exports = {
    mailOpt,
    sendMail,
};
