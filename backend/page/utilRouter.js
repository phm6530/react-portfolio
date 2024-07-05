const { NotFoundError } = require('../util/error');

//blog post img 업로더
const handleImgUploader = async (req, res, next) => {
    console.log('동작!');

    try {
        const file = req.file;
        console.log('file:::', file);
        res.json({ message: 'success', imgUrl: file.url });
    } catch (error) {
        const err = new NotFoundError(error.message);
        next(err);
    }
};

module.exports = {
    handleImgUploader,
};
