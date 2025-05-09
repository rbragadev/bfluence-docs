---
id: "bflu"
title: "Modelo: BFLU"
sidebar_position: 1
---

# 🧾 Modelo de Dados: BFLU

O objeto BFLU representa um influenciador disponível para campanhas dentro de uma comunidade parceira.

Este modelo é retornado no endpoint:

```
GET /communities/hub/client/{client_id}/get-bflus
```

---

## 🔁 Exemplo de retorno

```json
{
  "community_bflu_id": "0001",
  "community_bflu_cpf": "00000000000",
  "community_bflu_coupon": "GLAM123",
  "community_client_bflu_status": "active",
  "community_client_response_status": "approved",
  "community_client_rejection_reason": null,
  "update_date": "2025-05-01T12:00:00Z"
}
```

---

## 🧩 Campos do objeto BFLU

| Campo                              | Tipo     | Obrigatório | Descrição                                           |
|------------------------------------|----------|-------------|------------------------------------------------------|
| `community_bflu_id`                | string   | Sim         | ID único do influenciador na comunidade              |
| `community_bflu_cpf`               | string   | Sim         | CPF do influenciador (formato 00000000000)           |
| `community_bflu_coupon`           | string   | Sim         | Cupom promocional atribuído ao influenciador         |
| `community_client_bflu_status`     | string   | Sim         | Status atual da bflu na plataforma parceira          |
| `community_client_response_status` | string   | Sim         | Resultado do processamento ou integração             |
| `community_client_rejection_reason`| string   | Não         | Motivo da rejeição, se houver                        |
| `update_date`                      | ISODate  | Sim         | Data da última atualização do influenciador          |

---

## 📎 Observações

- O CPF é disponibilizado apenas para validação e não deve ser armazenado sem consentimento legal.
- O campo `update_date` é útil para sincronizações incrementais.

---

> Para detalhes sobre o uso deste modelo, veja o endpoint [GET /get-bflus](../endpoints/get-bflus.md)
