# 🐱 Cat Lost and Found Website - AWS S3 Project

Este projeto demonstra como criar e configurar um bucket S3 na AWS para hospedar um website estático simples usando Node.js e o AWS SDK v3.

## 📋 Descrição

O projeto implementa um website estático "Cat Lost and Found" que permite aos usuários visualizar informações sobre um gato perdido. O site é hospedado no Amazon S3 com configurações de website habilitadas.

## 🏗️ Arquitetura

- **Bucket S3**: Armazena arquivos estáticos (HTML, imagem)
- **Website S3**: Configurado para servir conteúdo estático
- **Política de Bucket**: Configurada para acesso público
- **AWS SDK v3**: Para interação com serviços AWS

## 📁 Estrutura do Projeto

```
node-create_bucket/
├── create_bucket.js      # Cria o bucket S3
├── upload_items.js       # Faz upload dos arquivos para o S3
├── websitehost.js        # Habilita website no bucket
├── permissions.js        # Configura política de acesso público
├── index.html           # Página HTML principal
├── cat.png             # Imagem do gato perdido
├── solution/            # Arquivos de solução completos
└── package.json         # Dependências do projeto
```

## 🚀 Funcionalidades

1. **Criação de Bucket**: Cria um bucket S3 na região us-east-1
2. **Upload de Arquivos**: Faz upload de arquivos HTML e imagem
3. **Configuração de Website**: Habilita funcionalidade de website estático
4. **Política de Acesso**: Configura permissões para acesso público

## 📦 Dependências

- `@aws-sdk/client-s3`: ^3.876.0

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

## 📝 Arquivos de Solução

O diretório `solution/` contém versões completas dos scripts com todas as configurações necessárias preenchidas.

## 🌐 Website

Após a configuração, o website estará disponível em:
- **URL do Website**: `http://20250826-iago-catlostandfoundwebsite.s3-website-us-east-1.amazonaws.com`
- **URL do Bucket**: `https://20250826-iago-catlostandfoundwebsite.s3.amazonaws.com`

## 🔒 Segurança

- O bucket é configurado com política de acesso público para permitir visualização do website
- Recomenda-se revisar as permissões antes de usar em produção

## 📚 Recursos AWS Utilizados

- **Amazon S3**: Armazenamento de objetos e hospedagem de website estático
- **AWS SDK for JavaScript v3**: Cliente para interação com serviços AWS
- **IAM**: Gerenciamento de permissões e políticas

## 🐛 Troubleshooting

### Erro de Credenciais
Certifique-se de que suas credenciais AWS estão configuradas corretamente:
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

## 📄 Licença

Este projeto está licenciado sob a Apache License 2.0 - veja o arquivo LICENSE para detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request para sugestões e melhorias.

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação da AWS ou abra uma issue no repositório.
