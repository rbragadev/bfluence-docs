---
id: "transacao"
title: "Modelo: Transação"
sidebar_position: 2
---

# 💰 Modelo de Dados: Transação

Este é o modelo de payload utilizado para enviar transações comissionadas à Bfluence, por meio do endpoint:

```
POST /communities/hub/client/{client_id}/community_transaction
```

---

## 🧾 Exemplo de Payload

```json
{
  "community_bflu_id": "0001",
  "description": "Venda de produto XPTO",
  "total_amount": 45.50,
  "sold_value": 150.00,
  "coupon_name": "GLAM123",
  "date_created": "2025-05-01T10:00:00Z",
  "date_updated": "2025-05-01T10:01:00Z"
}
```

---

## 📌 Campos do payload

| Campo                  | Tipo     | Obrigatório | Descrição                                             |
|------------------------|----------|-------------|--------------------------------------------------------|
| `community_bflu_id`    | string   | Sim         | ID do influenciador vinculado à transação              |
| `description`          | string   | Sim         | Descrição livre da transação                           |
| `total_amount`         | decimal  | Sim         | Valor da comissão calculada pela comunidade           |
| `sold_value`           | decimal  | Não         | Valor total da venda (útil para relatórios e auditoria)|
| `coupon_name`          | string   | Sim         | Cupom utilizado na transação                           |
| `date_created`         | ISODate  | Sim         | Data de criação da transação                           |
| `date_updated`         | ISODate  | Sim         | Data da última atualização                             |

---

## 🔐 Headers complementares

Além do payload JSON, é obrigatório enviar os seguintes headers:

| Header         | Tipo    | Descrição                                     |
|----------------|---------|-----------------------------------------------|
| `client_id`    | string  | Identificador único da comunidade             |
| `client_secret`| string  | Chave de autenticação fornecida pela Bfluence |
| `Authorization`| string  | JWT no formato Bearer                         |

---

## 📎 Observações

- A Bfluence **não recalcula valores** — apenas valida e persiste os dados.
- O campo `sold_value` é útil para relatórios internos e auditorias estatísticas.
- A `date_created` deve representar a data real da transação, e `date_updated` deve refletir eventuais correções.

---

> Para o uso deste modelo em contexto real, veja o endpoint [POST /community_transaction](../endpoints/post-community-transaction.md)
