cd $(cd $(dirname $0); pwd)
. ../config.txt

aws iam create-role --role-name ${ROLENAME_DBACCESS} \
--assume-role-policy-document file://trustpolicy.json