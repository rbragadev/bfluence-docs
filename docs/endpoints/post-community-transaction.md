---
id: post-community-transaction
title: POST /community_transaction
sidebar_position: 2
---

# 💸 Endpoint: `POST /communities/hub/client/{client_id}/community_transaction`

Este endpoint permite que a comunidade envie transações comissionadas **já calculadas** para a Bfluence, de forma segura e assíncrona.

---

## 📌 Finalidade

Registrar na Bfluence:

- O valor comissionado de uma venda
- O cupom utilizado
- O influenciador (BFLU) responsável
- As datas de criação e atualização da transação

> A **lógica de cálculo da comissão** é totalmente de responsabilidade da comunidade integradora.

---

## 🌐 Endpoint

```http
POST /communities/hub/client/{client_id}/community_transaction
```

> O parâmetro `client_id` é obrigatório e faz parte da rota.

---

## 🔐 Headers obrigatórios

| Header           | Tipo   | Obrigatório | Descrição                                           |
|------------------|--------|-------------|------------------------------------------------------|
| `Authorization`  | string | Sim         | Token JWT no formato Bearer                         |
| `client_id`      | string | Sim         | Identificador da comunidade fornecido pela Bfluence |
| `client_secret`  | string | Sim         | Chave secreta da comunidade para autenticação       |

---

## 📥 Corpo da requisição (JSON)

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

## 🧾 Descrição dos campos

| Campo                  | Tipo     | Obrigatório | Descrição                                          |
|------------------------|----------|-------------|-----------------------------------------------------|
| `community_bflu_id`    | string   | Sim         | ID do influenciador responsável pela transação      |
| `description`          | string   | Sim         | Breve descrição da transação                        |
| `total_amount`         | decimal  | Sim         | Valor da comissão calculado pela comunidade         |
| `sold_value`           | decimal  | Não         | Valor total da venda (opcional para relatórios)     |
| `coupon_name`          | string   | Sim         | Cupom utilizado na venda                            |
| `date_created`         | ISODate  | Sim         | Data de criação da transação                        |
| `date_updated`         | ISODate  | Sim         | Última atualização da transação                     |

---

## ✅ Resposta esperada

```json
{
  "status": "success",
  "message": "Transação registrada com sucesso"
}
```

---

## ⚠️ Validações realizadas pela Bfluence

- Campos obrigatórios presentes e com tipos corretos
- Formato das datas `ISODate` válido
- Relacionamento com um BFLU já sincronizado via `GET`

> **A Bfluence não recalcula valores.** Apenas persiste os dados enviados pela comunidade.

---

## 📎 Observações

- O envio pode ser feito de forma assíncrona ou em lotes individuais.
- Campos incorretos serão ignorados ou retornarão erro 400.

---

> Veja também o modelo completo da [estrutura da transação](../modelos/transacao.md)
