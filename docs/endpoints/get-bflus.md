---
id: get-bflus
title: GET /get-bflus
sidebar_position: 1
---

#### Endpoint: `GET /communities/hub/client/{client_id}/get-bflus`

Este endpoint retorna a lista de influenciadores (BFLUs) vinculados à sua comunidade, com dados atualizados e seus respectivos cupons promocionais.

---

### Finalidade

Permitir que o sistema da comunidade:

- Liste os BFLUs aprovados
- Obtenha cupons vinculados
- Armazene e sincronize localmente os dados

---

### Endpoint

```http
GET /communities/hub/client/{client_id}/get-bflus?page=1&page_size=10
```

> O parâmetro `client_id` deve ser substituído pelo identificador da sua comunidade.

---

### Headers obrigatórios

| Header         | Tipo   | Obrigatório | Descrição                          |
|----------------|--------|-------------|-------------------------------------|
| `Authorization`| string | Sim         | Token JWT no formato Bearer         |

---

### Parâmetros de rota

| Nome         | Tipo   | Obrigatório | Descrição                                  |
|--------------|--------|-------------|---------------------------------------------|
| `client_id`  | string | Sim         | Identificador da comunidade fornecido pela Bfluence |

---

### Parâmetros de query (opcional)

| Nome         | Tipo   | Descrição                         |
|--------------|--------|-----------------------------------|
| `page`       | number | Página da listagem (default: 1)   |
| `page_size`  | number | Quantidade de itens por página    |

---

### Exemplo de requisição

```http
GET /communities/hub/client/12345/get-bflus?page=1&page_size=20
Authorization: Bearer eyJhbGciOi...
```

---

### Exemplo de resposta

```json
[
  {
    "community_bflu_id": "0001",
    "community_bflu_cpf": "00000000000",
    "community_bflu_coupon": "GLAM123",
    "community_client_bflu_status": "active",
    "community_client_response_status": "approved",
    "community_client_rejection_reason": null,
    "update_date": "2025-05-01T12:00:00Z"
  }
]
```

---

### Campos retornados

| Campo                               | Tipo     | Descrição                                      |
|-------------------------------------|----------|------------------------------------------------|
| `community_bflu_id`                 | string   | ID do influenciador na comunidade              |
| `community_bflu_cpf`                | string   | CPF do influenciador                           |
| `community_bflu_coupon`            | string   | Cupom associado a esse influenciador           |
| `community_client_bflu_status`      | string   | Status atual do BFLU na comunidade             |
| `community_client_response_status`  | string   | Resultado da análise da comunidade             |
| `community_client_rejection_reason` | string   | Motivo da rejeição, se aplicável               |
| `update_date`                       | ISODate  | Data da última atualização desses dados        |

---

### Observações

- Este endpoint não exige paginação obrigatória, mas é recomendada em bases com muitos registros.
- Os dados devem ser armazenados e atualizados localmente para garantir performance e confiabilidade.

---

> Próximo passo: [POST /community_transaction](./post-community-transaction.md)
