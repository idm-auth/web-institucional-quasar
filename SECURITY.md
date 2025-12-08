# Segurança

## Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para configurações sensíveis. Nunca commite arquivos `.env` no repositório.

### Configuração Local

1. Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

2. Configure as variáveis necessárias no arquivo `.env`

### Variáveis Disponíveis

- `VITE_API_BASE_URL`: URL base da API (padrão: https://api.idm-auth.io)
- `VITE_GA_MEASUREMENT_ID`: ID do Google Analytics (opcional)

## GitHub Configuration

### 1. Criar Environment "prod"
`Settings > Environments > New environment > prod`

### 2. Configurar Secrets (sensíveis)
`Settings > Secrets and variables > Actions > Secrets`

- `DEPLOY_USER_AWS_ACCESS_KEY_ID`: Access Key do usuário IAM
- `DEPLOY_USER_AWS_SECRET_ACCESS_KEY`: Secret Key do usuário IAM

### 3. Configurar Variables (não sensíveis)
`Settings > Secrets and variables > Actions > Variables`

- `DEPLOY_USER_AWS_REGION`: Região AWS (ex: us-east-1)
- `INSTITUCIONAL_WEBSITE_S3_BUCKET`: Nome do bucket S3
- `INSTITUCIONAL_WEBSITE_CLOUDFRONT_DISTRIBUTION_ID`: ID da distribuição CloudFront
- `VITE_API_BASE_URL`: URL da API (ex: https://api.idm-auth.io)
- `VITE_GA_MEASUREMENT_ID`: ID do Google Analytics (ex: G-MWTEQ4V24T)

## Atualizações de Segurança

Execute regularmente:

```bash
npm audit
npm audit fix
npm update
```

## Headers de Segurança

Para adicionar headers de segurança no CloudFront:

```bash
# Criar Response Headers Policy
aws cloudfront create-response-headers-policy \
  --response-headers-policy-config file://cloudfront-security-headers.json \
  --profile <seu-profile>

# Associar à distribuição CloudFront via console ou CLI
```

Headers configurados:
- `Strict-Transport-Security`: Force HTTPS
- `X-Content-Type-Options`: Previne MIME sniffing
- `X-Frame-Options`: Previne clickjacking
- `X-XSS-Protection`: Proteção XSS
- `Referrer-Policy`: Controla informações de referrer
- `Content-Security-Policy`: Restringe recursos carregados

## Reportar Vulnerabilidades

Para reportar vulnerabilidades de segurança, envie um email para: security@idm-auth.io
