var webpack = require('webpack');
var S3Plugin = require('webpack-s3-plugin');

module.exports = require('./shared.webpack.config')({
  plugins: [
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_DEFAULT_REGION
      },
      s3UploadOptions: {
        Bucket: process.env.AWS_S3_BUCKET
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
        Items: ["/*"]
      }
    })
  ]
});