cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3api put-bucket-policy --bucket ${S3_FRONTEND} --policy file://S3PolicyFrontend.json
