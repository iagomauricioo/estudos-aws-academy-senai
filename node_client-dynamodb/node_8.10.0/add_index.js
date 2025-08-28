import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const input = {
    TableName: "lostcats",
    AttributeDefinitions: [{
        AttributeName: "breed",
        AttributeType: "S"
    }],
    GlobalSecondaryIndexUpdates: [{
        Create: {
            IndexName: "breed_index",
            KeySchema: [{
                AttributeName: "breed",
                KeyType: "HASH"
            }],
            Projection: {
                ProjectionType: "ALL"
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 1, 
                WriteCapacityUnits: 1
            }
        }
    }]
}                                                 

async function addIndex(input) {
     try {
         const command = new UpdateTableCommand(input);
         const response = await client.send(command);
         console.log("Tabela atualizada: ", response);
     }
     catch (e) {
         console.error("Erro ao atualizar tabela: ", e);
     }
}

addIndex(input);
