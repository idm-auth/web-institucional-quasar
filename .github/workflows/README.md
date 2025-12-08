# GitHub Actions - Deploy to S3

## Configuração de Secrets

Adicione os seguintes secrets no GitHub (Settings > Secrets and variables > Actions):

### Obrigatórios:
- `AWS_ACCESS_KEY_ID` - Access Key da AWS com permissões no S3
- `AWS_SECRET_ACCESS_KEY` - Secret Key da AWS
- `AWS_REGION` - Região do bucket S3 (ex: `us-east-1`)
- `S3_BUCKET` - Nome do bucket S3 (ex: `idm-auth-website`)

### Opcional:
- `CLOUDFRONT_DISTRIBUTION_ID` - ID da distribuição CloudFront (para invalidar cache)

## Permissões IAM necessárias

A Access Key precisa ter as seguintes permissões:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::SEU-BUCKET/*",
        "arn:aws:s3:::SEU-BUCKET"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

## Como funciona

1. Trigger: Push na branch `main`
2. Instala dependências com `npm ci`
3. Faz build com `npm run build`
4. Sincroniza arquivos do `dist/spa` para o S3
5. (Opcional) Invalida cache do CloudFront

## Configuração do S3 Bucket

O bucket precisa estar configurado para hosting estático:
- Static website hosting: Enabled
- Index document: `index.html`
- Error document: `index.html` (para SPA routing)
- Block public access: OFF
- Bucket policy: Permitir leitura pública

### Exemplo de Bucket Policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::SEU-BUCKET/*"
    }
  ]
}
```
