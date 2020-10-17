cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3api put-bucket-cors --bucket ${S3_FILES} \
--cors-configuration file://CORS.json