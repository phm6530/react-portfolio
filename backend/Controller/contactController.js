const { sendMail, mailOpt } = require('../service/contactService');

const requestMail = async (req, res, next) => {
    try {
        const { who, description, radioOption, yourContact } = req.body;
        const mailOption = mailOpt(who, description, radioOption, yourContact);
        await sendMail(mailOption);
        res.json({ message: '성공' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { requestMail };
