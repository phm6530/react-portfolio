const { S3Client } = require('@aws-sdk/client-s3');

//S3client Connect 인스턴스 생성
const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_KEY_ACCESS,
        secretAccessKey: process.env.AWS_KEY_SECRET,
    },
    region: process.env.AWS_KEY_REGION,
});

module.exports = { s3 };
