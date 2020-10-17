cd $(cd $(dirname $0); pwd)
. ../config.txt

aws dynamodb create-table --table-name ${TABLE_NAME} \
       --attribute-definitions AttributeName=${ATTRIBUTE_NAME},AttributeType=S \
       --key-schema AttributeName=${ATTRIBUTE_NAME},KeyType=HASH \
       --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5
