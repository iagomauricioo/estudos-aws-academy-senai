# 🪣 S3 Client - Cat Lost and Found Website

Este projeto demonstra como criar e configurar um bucket S3 na AWS para hospedar um website estático simples usando Node.js e o AWS SDK v3.

## 📋 Descrição

O projeto implementa um website estático "Cat Lost and Found" que permite aos usuários visualizar informações sobre um gato perdido. O site é hospedado no Amazon S3 com configurações de website habilitadas e política de acesso público.

## 🏗️ Arquitetura

- **Bucket S3**: Armazena arquivos estáticos (HTML, imagem)
- **Website S3**: Configurado para servir conteúdo estático
- **Política de Bucket**: Configurada para acesso público
- **AWS SDK v3**: Para interação com serviços AWS

## 📁 Estrutura do Projeto

```
node_client-s3/
├── create_bucket.js      # Cria o bucket S3
├── upload_items.js       # Faz upload dos arquivos para o S3
├── websitehost.js        # Habilita website no bucket
├── permissions.js        # Configura política de acesso público
├── public_policy.json    # Política IAM para acesso público
├── index.html           # Página HTML principal
├── cat.png             # Imagem do gato perdido
├── error.html          # Página de erro personalizada
├── package.json         # Dependências do projeto
├── package-lock.json    # Lock das dependências
├── node_modules/        # Módulos Node.js instalados
└── solution/            # Arquivos de solução completos
```

## 🚀 Funcionalidades

1. **Criação de Bucket**: Cria um bucket S3 na região us-east-1
2. **Upload de Arquivos**: Faz upload de arquivos HTML e imagem
3. **Configuração de Website**: Habilita funcionalidade de website estático
4. **Política de Acesso**: Configura permissões para acesso público
5. **Página de Erro**: Configura página de erro personalizada

## 🌐 Website

### Página Principal (`index.html`)
- **Título**: "Cat Lost and Found"
- **Conteúdo**: Informações sobre gato perdido
- **Contato**: Número para contato
- **Imagem**: Foto do gato perdido

### Página de Erro (`error.html`)
- Página personalizada para erros 404 e outros

## 📦 Dependências

- `@aws-sdk/client-s3`: ^3.876.0
- Node.js e npm para gerenciamento de pacotes

## ⚙️ Configuração

### Pré-requisitos

- Node.js instalado
- Credenciais AWS configuradas (AWS CLI ou variáveis de ambiente)
- Permissões para criar e gerenciar buckets S3

### Instalação

```bash
npm install
```

## 🔧 Como Usar

### 1. Criar o Bucket

```bash
node create_bucket.js
```

### 2. Fazer Upload dos Arquivos

```bash
node upload_items.js
```

### 3. Configurar Website (opcional)

```bash
node websitehost.js
```

### 4. Configurar Permissões (opcional)

```bash
node permissions.js
```

## 🌍 URLs de Acesso

Após a configuração, o website estará disponível em:

- **URL do Website**: `http://20250826-iago-catlostandfoundwebsite.s3-website-us-east-1.amazonaws.com`
- **URL do Bucket**: `https://20250826-iago-catlostandfoundwebsite.s3.amazonaws.com`

## 🔒 Segurança e Permissões

### Política de Bucket
- **Acesso Público**: Configurado para permitir visualização do website
- **Política IAM**: Definida em `public_policy.json`
- **CORS**: Configurado para permitir acesso web

### Configurações de Segurança
- **Encryption**: Dados criptografados em repouso
- **Versioning**: Controle de versões dos arquivos
- **Logging**: Logs de acesso ao bucket

## 📚 Recursos AWS Utilizados

- **Amazon S3**: Armazenamento de objetos e hospedagem de website estático
- **AWS SDK for JavaScript v3**: Cliente para interação com serviços AWS
- **IAM**: Gerenciamento de permissões e políticas
- **S3 Website Hosting**: Funcionalidade de website estático

## 🔍 Operações Disponíveis

- **CreateBucket**: Cria o bucket S3
- **PutObject**: Faz upload de arquivos
- **PutBucketWebsite**: Habilita website estático
- **PutBucketPolicy**: Aplica política de acesso

## 📈 Performance e Escalabilidade

- **CDN**: Integração com CloudFront (opcional)
- **Escalabilidade**: Automática baseada na demanda
- **Latência**: Baixa latência global
- **Throughput**: Alto throughput para arquivos estáticos

## 🐛 Troubleshooting

### Erro de Credenciais
```bash
aws configure
```

### Erro de Região
Verifique se a região configurada está correta nos scripts

### Erro de Permissões
Confirme se sua conta tem permissões para:
- Criar buckets S3
- Configurar políticas de bucket
- Habilitar websites estáticos

### Erro de Nome de Bucket
- Nomes de bucket devem ser únicos globalmente
- Use apenas letras minúsculas, números e hífens

## 📝 Arquivos de Solução

O diretório `solution/` contém versões completas dos scripts com todas as configurações necessárias preenchidas.

## 🔗 Próximos Passos

- Configurar CloudFront para CDN
- Implementar HTTPS com certificado SSL
- Adicionar monitoramento e alertas
- Implementar backup automático
- Configurar replicação cross-region

## 💡 Dicas de Otimização

- Comprima imagens antes do upload
- Use nomes de arquivo descritivos
- Configure cache headers apropriados
- Monitore custos de armazenamento e transferência 