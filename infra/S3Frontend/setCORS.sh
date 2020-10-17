cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3api put-bucket-cors --bucket ${S3_FRONTEND} \
--cors-configuration file://CORS.json