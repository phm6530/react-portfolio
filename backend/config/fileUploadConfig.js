const multer = require('multer');
const { s3 } = require('../config/awsConfig');
const multerS3 = require('multer-s3');

const blogStorage = multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME, // S3 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // Content-Type 자동 설정
    metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
        const key = req.params.key;
        const page = req.query.page;
        const dateString = new Date()
            .toISOString()
            .replace(/:/g, '')
            .replace(/-/g, '')
            .replace('T', '')
            .replace(/\..+/, '');

        const [originName, ext] = file.originalname.split('.');
        const newFilename = `${originName}_${dateString}.${ext}`;

        const s3Key = `${page}/${key}/${newFilename}`;
        file.url = `uploads/${s3Key}`;

        cb(null, `uploads/${s3Key}`);
    },
});

// blogUpload
const blogUpload = multer({ storage: blogStorage });

module.exports = {
    blogUpload,
};
