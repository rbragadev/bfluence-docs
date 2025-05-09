---
id: autenticacao
title: Autenticação
sidebar_position: 2
---

### Autenticação

A API da Bfluence utiliza o padrão **Bearer Token (JWT)** para autenticação de todas as requisições privadas.

Esse fluxo garante segurança, rastreabilidade e controle de acesso para cada parceiro integrado.

---

### Como funciona a autenticação

### Etapa 1: Solicitar um token JWT

Antes de acessar os endpoints protegidos, sua aplicação deverá **solicitar um token de acesso** com suas credenciais:

```http
POST /auth/token
Content-Type: application/json
```

```json
{
  "client_id": "sua_comunidade_id",
  "client_secret": "sua_chave_secreta"
}
```

> Essa requisição deve ser feita diretamente do **servidor da sua aplicação**, nunca do frontend.

---

### Etapa 2: Usar o JWT nas chamadas autenticadas

Após obter o token JWT, todas as chamadas aos endpoints privados devem incluir o header:

```http
Authorization: Bearer <seu_token_jwt>
```

✅ **Atenção:** Não é necessário (e nem recomendado) enviar novamente `client_id` ou `client_secret` após obter o JWT.

---

### Exemplo de requisição autenticada

```http
GET /communities/hub/client/123/get-bflus
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

---

### Estrutura do JWT

O token JWT segue o padrão assinado com **HMAC (HS256)** e inclui:

- Expiração (`exp`)
- Identificação da comunidade
- Permissões concedidas

> O token é gerado exclusivamente pela Bfluence. A comunidade **não deve criar seus próprios tokens**.

---

### Renovação do Token

- O token possui tempo de expiração (exemplo: 24h)
- Ao expirar, basta solicitar um novo com o mesmo `client_id` e `client_secret`
- Tokens expirados retornam erro `401 Unauthorized`

---

### Boas práticas de segurança

- **Nunca exponha `client_secret` no frontend**
- Armazene tokens e credenciais em variáveis de ambiente seguras
- Em caso de comprometimento, solicite revogação imediata à Bfluence

---

### Resumo

| Etapa                      | O que enviar                         | Onde usar                 |
|----------------------------|---------------------------------------|---------------------------|
| Obter token                | `client_id` + `client_secret`         | Somente em `/auth/token` |
| Usar endpoints protegidos  | `Authorization: Bearer <token>`       | Em todos os outros        |

---

