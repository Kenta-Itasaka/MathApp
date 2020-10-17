cd $(cd $(dirname $0); pwd)
. ./config.txt

aws cloudformation deploy --template-file template-output.yaml \
--stack-name ${STACK_NAME} --capabilities CAPABILITY_IAM \
--region ap-northeast-1