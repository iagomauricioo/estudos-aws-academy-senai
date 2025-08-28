import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const input = {
    "cat_1": {
        TableName: "lostcats",
        Item: {
            "petname":{
                S: "Puddles"
            },
            "breed":{
                S: "Russian Blue"
            }
        },
        ReturnConsumedCapacity: "TOTAL", 
    },
    "cat_2": {
        TableName: "lostcats",
        Item: {
            "petname":{
                S: "Hosepipe"
            },
            "breed":{
                S: "Scottish Fold"
            }
        }, 
        ReturnConsumedCapacity: "TOTAL"
    }
}

async function uploadItemstoDynamoDB(input) {
     try {
        const command = new PutItemCommand(input);
        const response = await client.send(command);
        console.log("Item enviado com sucesso: ", response);
     } 
     catch (e) {
        console.log("Falha ao enviar item: ", e);
     }
}

uploadItemstoDynamoDB(input.cat_1);
uploadItemstoDynamoDB(input.cat_2);