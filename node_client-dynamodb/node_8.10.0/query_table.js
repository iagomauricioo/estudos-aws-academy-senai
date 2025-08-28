import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const input = {
    TableName: "lostcats",
    ExpressionAttributeValues: {
        ":catname": {
            S: "Puddles"
        }
    },
    KeyConditionExpression: "petname = :catname",
    ProjectionExpression: "notable_features"
}

async function queryTable(input) {
    try {
        const command = new QueryCommand(input);
        const response = await client.send(command);
        console.log("Retorno da query: ", JSON.stringify(response, null, 2));
    }
    catch (e) {
        console.error("Erro: ", e);
    }
}

queryTable(input);