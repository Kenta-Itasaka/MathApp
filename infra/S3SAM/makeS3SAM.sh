cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3 mb s3://${S3_SAM}