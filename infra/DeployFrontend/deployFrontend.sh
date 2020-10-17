cd $(cd $(dirname $0); pwd)
. ../config.txt

aws s3 sync ${S3_FRONTEND_FROM} s3://${S3_FRONTEND}/ --delete
