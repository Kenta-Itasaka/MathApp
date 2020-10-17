cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3 mb s3://${S3_FILES} --region ap-northeast-1
aws s3 website s3://${S3_FILES}/ --index-document index.html
