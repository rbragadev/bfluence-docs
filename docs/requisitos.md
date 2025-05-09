---
id: requisitos
title: Requisitos Técnicos
sidebar_position: 5
---

### Requisitos Técnicos da Integração

Este documento resume todos os pré-requisitos técnicos, regras de formato e critérios mínimos necessários para a integração correta entre a sua comunidade e a Bfluence.

---

### Autenticação

- Baseada em **JWT (Bearer Token)** com assinatura HMAC (HS256)
- Tokens obtidos atraves de client_id e client_secret fornecidos pela equipe Bfluence
- Headers obrigatórios em todas as requisições:

```http
Authorization: Bearer <token_jwt>
```

---

### Formato de Payload

| Recurso     | Formato padrão | Alternativas disponíveis |
|-------------|----------------|---------------------------|
| Dados da API| JSON           | XML (sob demanda)         |
| Datas       | ISO 8601       | Ex: `2025-05-01T10:00:00Z`|

---

### Estrutura REST

- Todos os endpoints seguem o padrão RESTful
- Versionamento via rota: `/api/v1/`
- O corpo da requisição deve sempre usar `Content-Type: application/json`

---

### Segurança

- Todos os acessos devem ser realizados via **HTTPS**
- Tokens JWT devem ser protegidos em ambiente seguro
- `client_secret` nunca deve ser exposto em frontend

---

### Compatibilidade

| Ambiente              | Suporte |
|------------------------|---------|
| Plataformas customizadas | ✅     |
| Backends em PHP, Node, Python | ✅ |
| Frontend puro (sem backend) | ❌ (por segurança) |

---

### SLA e Suporte

| Etapa                              | Tempo estimado      |
|------------------------------------|----------------------|
| Análise de compatibilidade técnica | 1–2 dias úteis       |
| Homologação com ambiente de testes | 5–10 dias úteis      |
| Resposta média às dúvidas técnicas | até 1 dia útil       |

> O tempo pode variar conforme a complexidade da integração e disponibilidade das equipes.

---

### Observações Finais

- Testes em sandbox são recomendados antes de qualquer envio real de transações
- O time da Bfluence está disponível para suporte técnico durante todo o processo de integração
- Alterações futuras na API serão comunicadas previamente com impacto e instruções claras

---

> Em caso de dúvidas, entre em contato com a equipe técnica da Bfluence para suporte especializado.
