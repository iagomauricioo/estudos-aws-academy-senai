# 🗄️ DynamoDB Client - Cat Lost and Found Database

Este projeto demonstra como criar e gerenciar uma tabela DynamoDB na AWS para armazenar informações sobre gatos perdidos usando Node.js e o AWS SDK v3.

## 📋 Descrição

O projeto implementa um sistema de banco de dados para o serviço "Cat Lost and Found", permitindo armazenar, consultar e gerenciar informações sobre gatos perdidos encontrados. Utiliza o Amazon DynamoDB como banco de dados NoSQL gerenciado.

## 🏗️ Arquitetura

- **DynamoDB**: Banco de dados NoSQL gerenciado pela AWS
- **Tabela**: `lostcats` com estrutura otimizada para consultas
- **AWS SDK v3**: Para interação com serviços AWS
- **Node.js 8.10.0**: Runtime JavaScript

## 📁 Estrutura do Projeto

```
node_client-dynamodb/
├── node_8.10.0/           # Scripts principais do DynamoDB
│   ├── create_table.js     # Cria a tabela lostcats
│   ├── upload_items.js     # Popula a tabela com dados
│   ├── query_table.js      # Consulta dados na tabela
│   ├── add_index.js        # Adiciona índices secundários
│   ├── edit_item.js        # Edita itens existentes
│   └── solution/           # Arquivos de solução completos
└── resources/              # Recursos e dados
    ├── cat_data.json       # Dados dos gatos perdidos
    └── seed.js             # Script para popular o banco
```

## 🚀 Funcionalidades

1. **Criação de Tabela**: Cria tabela `lostcats` com chave primária `petname`
2. **População de Dados**: Carrega dados iniciais de gatos perdidos (4 gatos)
3. **Consultas**: Realiza consultas na tabela usando diferentes critérios
4. **Índices**: Adiciona índices secundários para otimizar consultas
5. **Edição**: Permite modificar informações dos gatos

## ⚠️ Pré-requisitos Importantes

**Antes de executar consultas**, você deve:
1. ✅ Criar a tabela `lostcats`
2. ✅ **Propagar o banco com dados iniciais** (usando `seed.js`)
3. ✅ Confirmar que a propagação foi bem-sucedida

## 📊 Estrutura da Tabela

### Tabela: `lostcats`
- **Chave Primária**: `petname` (String)
- **Atributos**:
  - `breed_str`: Raça do gato
  - `gender_str`: Gênero (Male/Female)
  - `date_found_str`: Data em que foi encontrado
  - `notable_features_str`: Características notáveis

### Dados de Exemplo
- **Puddles**: Russian Blue, Male, encontrado em 2019-01-02
- **Hosepipe**: British Shorthair, Male, encontrado em 2019-01-05
- **Dinka**: Black Moggie, Female, encontrado em 2019-03-02
- **Simba**: Bengal, Male, encontrado em 2019-04-02

## 📦 Dependências

- `@aws-sdk/client-dynamodb`: Cliente DynamoDB da AWS
- Node.js 8.10.0 ou superior

## ⚙️ Configuração

### Pré-requisitos

- Node.js instalado
- Credenciais AWS configuradas
- Permissões para criar e gerenciar tabelas DynamoDB

### Instalação

```bash
npm install @aws-sdk/client-dynamodb
```

## 🔧 Como Usar

### 1. Criar a Tabela

```bash
node create_table.js
```

### 2. Popular com Dados Iniciais

**⚠️ IMPORTANTE**: Antes de executar consultas no banco de dados, você deve propagar a tabela `lostcats` com dados iniciais.

#### Passo a Passo para Propagação:

1. **Navegue para a pasta resources**:
```bash
cd ~/environment/resources
```

2. **Confirme se está na pasta correta** (deve conter `cat_data.json` e `seed.js`)

3. **Instale as dependências**:
```bash
npm install aws-sdk
```

4. **Execute o script de propagação**:
```bash
node seed.js
```

5. **Confirme a execução** - você deve ver a mensagem "OK"

6. **Volte para a pasta de código**:
```bash
cd ..
cd node_8.10.0
```

7. **Verifique se a propagação foi bem-sucedida** executando uma consulta simples:
```bash
node query_table.js
```

#### ✅ Confirmação de Sucesso:
- A mensagem "OK" deve aparecer após executar `seed.js`
- A tabela deve conter 4 registros de gatos
- Consultas subsequentes devem retornar dados válidos

#### Arquivos de Propagação:
- **`cat_data.json`**: Contém dados de 4 gatos perdidos (Puddles, Hosepipe, Dinka, Simba)
- **`seed.js`**: Script que popula a tabela com os dados do JSON

#### Dados Incluídos:
- **Puddles**: Russian Blue, Male, encontrado em 2019-01-02
- **Hosepipe**: British Shorthair, Male, encontrado em 2019-01-05  
- **Dinka**: Black Moggie, Female, encontrado em 2019-03-02
- **Simba**: Bengal, Male, encontrado em 2019-04-02

### 3. Consultar Dados

```bash
node query_table.js
```

### 4. Adicionar Índices (opcional)

```bash
node add_index.js
```

### 5. Editar Itens (opcional)

```bash
node edit_item.js
```

## 🔍 Operações Disponíveis

- **CreateTable**: Cria a tabela com schema definido
- **PutItem**: Insere novos gatos perdidos
- **Query**: Consulta gatos por diferentes critérios
- **UpdateItem**: Modifica informações existentes
- **CreateIndex**: Adiciona índices para otimização

## 📈 Performance

- **Throughput**: 1 unidade de leitura/escrita por segundo
- **Índices**: Otimizados para consultas frequentes
- **Escalabilidade**: Automática baseada na demanda

## 🔒 Segurança

- **IAM**: Controle de acesso baseado em políticas
- **Encryption**: Dados criptografados em repouso
- **Audit**: Logs de todas as operações

## 📚 Recursos AWS Utilizados

- **Amazon DynamoDB**: Banco de dados NoSQL gerenciado
- **AWS SDK for JavaScript v3**: Cliente para interação com DynamoDB
- **IAM**: Gerenciamento de permissões

## 🐛 Troubleshooting

### Erro de Credenciais
```bash
aws configure
```

### Erro de Permissões
Confirme se sua conta tem permissões para:
- Criar tabelas DynamoDB
- Executar operações CRUD
- Gerenciar índices

### Erro de Região
Verifique se a região configurada está correta

## 📝 Arquivos de Solução

O diretório `solution/` contém versões completas dos scripts com todas as configurações necessárias preenchidas.

## 🔗 Próximos Passos

- Implementar API REST para o banco
- Adicionar autenticação e autorização
- Criar interface web para gerenciamento
- Implementar notificações automáticas 