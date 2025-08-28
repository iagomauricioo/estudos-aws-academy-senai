import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const input = {
    TableName: "lostcats",
    Key:{
        petname: {
            S: "Hosepipe"
        }
    },
    UpdateExpression: "SET breed = :b",
    ExpressionAttributeValues: {
        ":b": {
            "S": "British Shorthair"
        }
    },
    ReturnValues: "UPDATED_NEW"
}

async function editItemInDynamo(input) {
    try {
        const command = new UpdateItemCommand(input);
        const response = await client.send(command);
        console.log("Item editado com sucesso: ", response);
    }
    catch (e) {
        console.error("Falha ao editar item: ", e);
    }
}

editItemInDynamo(input);