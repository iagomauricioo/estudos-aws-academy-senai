import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

const input = {
    AttributeDefinitions: [{
        AttributeName: "petname", 
        AttributeType: "S"
    }], 
    KeySchema: [{
        AttributeName: "petname", 
        KeyType: "HASH"
    }], 
    ProvisionedThroughput: {
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }, 
    TableName: "lostcats"
};

async function createADataBaseTable(input) {
    try {
        const command = new CreateTableCommand(input);
        const response = await client.send(command);
        console.log("Tabela criada com sucesso: ", response);
    }
    catch (e) {
        console.error("Erro na criação da tabela: ", e);
    }
}

createADataBaseTable(input);
