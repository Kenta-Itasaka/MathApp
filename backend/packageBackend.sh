cd $(cd $(dirname $0); pwd)
. ./config.txt

aws cloudformation package --template-file template.yaml \
--output-template-file template-output.yaml \
--s3-bucket ${S3_SAM}