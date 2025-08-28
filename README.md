# 🚀 AWS Academy - Estudos e Projetos Práticos

Este repositório contém uma coleção de projetos práticos desenvolvidos durante os estudos na AWS Academy, organizados por tipo de cliente AWS para facilitar o aprendizado e referência.

## 📋 Visão Geral

Este workspace contém projetos práticos que demonstram o uso de diferentes serviços AWS através de clientes Node.js, implementando soluções reais para cenários comuns de desenvolvimento na nuvem.

## 🏗️ Arquitetura dos Projetos

Todos os projetos seguem uma arquitetura baseada em:
- **Node.js** como runtime JavaScript
- **AWS SDK v3** para interação com serviços AWS
- **Scripts modulares** para diferentes funcionalidades
- **Arquivos de solução** para referência completa
- **Documentação detalhada** para cada projeto

## 📁 Estrutura do Repositório

```
estudos-aws-academy/
├── node_client-s3/           # 🪣 Projeto de hospedagem de website estático
├── node_client-dynamodb/     # 🗄️ Projeto de banco de dados NoSQL
├── LICENSE                   # 📄 Licença Apache 2.0
└── README.md                 # 📖 Este arquivo
```

## 🎯 Projetos Disponíveis

### 🪣 **S3 Client** (`node_client-s3/`)
**Website Estático - Cat Lost and Found**
- Criação e configuração de bucket S3
- Hospedagem de website estático
- Upload de arquivos HTML e imagens
- Configuração de políticas de acesso público
- Website funcional com página de erro personalizada

**Tecnologias**: Amazon S3, AWS SDK v3, Node.js
**Resultado**: Website estático hospedado no S3 acessível publicamente

### 🗄️ **DynamoDB Client** (`node_client-dynamodb/`)
**Sistema de Banco de Dados - Cat Lost and Found**
- Criação de tabela DynamoDB
- População com dados de gatos perdidos
- Consultas e operações CRUD
- Gerenciamento de índices secundários
- Estrutura otimizada para consultas

**Tecnologias**: Amazon DynamoDB, AWS SDK v3, Node.js 8.10.0
**Resultado**: Banco de dados NoSQL funcional para gerenciar informações de gatos perdidos

## 🚀 Como Começar

### Pré-requisitos
- **Node.js** instalado (versão 8.10.0 ou superior)
- **Credenciais AWS** configuradas
- **Permissões** adequadas para os serviços utilizados

### Configuração Inicial
```bash
# Clone o repositório
git clone <repository-url>
cd estudos-aws-academy

# Configure suas credenciais AWS
aws configure
```

### Executando os Projetos
Cada pasta de projeto contém seu próprio README com instruções detalhadas:

1. **S3 Client**: `cd node_client-s3 && npm install`
2. **DynamoDB Client**: `cd node_client-dynamodb && npm install`

## 📚 Recursos AWS Utilizados

### Serviços Principais
- **Amazon S3**: Armazenamento de objetos e hospedagem de websites
- **Amazon DynamoDB**: Banco de dados NoSQL gerenciado
- **IAM**: Gerenciamento de permissões e políticas

### SDKs e Ferramentas
- **AWS SDK for JavaScript v3**: Cliente oficial para Node.js
- **AWS CLI**: Interface de linha de comando
- **Node.js**: Runtime JavaScript

## 🎓 Objetivos de Aprendizado

### Conceitos Fundamentais
- **Infraestrutura como Código**: Scripts para automação AWS
- **Arquitetura Serverless**: Uso de serviços gerenciados
- **Segurança na Nuvem**: Configuração de políticas IAM
- **Escalabilidade**: Uso de serviços auto-escaláveis

### Habilidades Práticas
- **Configuração de serviços AWS** via código
- **Gerenciamento de permissões** e políticas de segurança
- **Desenvolvimento de aplicações** na nuvem
- **Troubleshooting** de problemas comuns

## 🔒 Segurança e Boas Práticas

- **Princípio do menor privilégio** para permissões IAM
- **Criptografia** em repouso e em trânsito
- **Logs de auditoria** para todas as operações
- **Políticas de acesso** bem definidas

## 🐛 Troubleshooting Comum

### Problemas de Credenciais
```bash
aws configure
aws sts get-caller-identity
```

### Problemas de Permissões
- Verifique se sua conta tem permissões para os serviços utilizados
- Confirme se as políticas IAM estão configuradas corretamente

### Problemas de Região
- Verifique se a região configurada está correta nos scripts
- Confirme se os serviços estão disponíveis na região escolhida

## 📝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a **Apache License 2.0** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Suporte

Para dúvidas ou problemas:

- Consulte a documentação da AWS
- Abra uma issue no repositório
- Consulte os READMEs específicos de cada projeto

## 🔗 Links Úteis

- [AWS Academy](https://aws.amazon.com/education/awsacademy/)
- [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/)
- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/)
- [Amazon DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)

---

**Desenvolvido durante os estudos na AWS Academy** 🎓