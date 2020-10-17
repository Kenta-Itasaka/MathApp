cd $(cd $(dirname $0); pwd)
. ../config.txt

aws iam put-role-policy --role-name ${ROLENAME_DBACCESS} \
--policy-name ${POLICYNAME_DBACCESS} \
--policy-document file://permission.json