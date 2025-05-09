---
id: responsabilidades
title: Responsabilidades
sidebar_position: 4
---

### Responsabilidades na Integração

A seguir estão definidas as **responsabilidades técnicas e operacionais** da Bfluence e da Comunidade parceira no processo de integração.

> Essa separação garante clareza, governança de dados e segurança operacional.

---

### Responsabilidades da Bfluence

| Tarefa                                               | Descrição                                                                 |
|------------------------------------------------------|---------------------------------------------------------------------------|
| **Disponibilizar endpoint GET /get-bflus**           | Oferecer dados atualizados dos BFLUs, incluindo cupons e status           |
| **Validar transações recebidas**                     | Garantir que os dados enviados estejam completos, no formato esperado     |
| **Persistir dados de transação**                     | Armazenar transações com integridade e rastreabilidade                    |
| **Auditar dados (opcional)**                         | Validar valores enviados caso necessário, para fins estatísticos ou legais|
| **Emitir tokens e credenciais**                      | Fornecer `client_id`, `client_secret` e tokens JWT seguros                |
| **Prestar suporte técnico**                          | Auxiliar durante a fase de homologação e ajustes finos                    |

---

### Responsabilidades da Comunidade Parceira

| Tarefa                                               | Descrição                                                                 |
|------------------------------------------------------|---------------------------------------------------------------------------|
| **Consultar e armazenar BFLUs localmente**           | Realizar chamadas ao endpoint GET e persistir os dados em seu sistema     |
| **Manter os cupons atualizados e associados**        | Garantir que o cupom seja atribuído corretamente em suas vendas           |
| **Calcular a comissão por venda**                    | Utilizar sua própria lógica de comissionamento por transação              |
| **Enviar transações corretamente**                   | Utilizar o endpoint POST conforme schema e formato JSON definido          |
| **Manter integridade dos dados enviados**            | Garantir que o total_amount e sold_value estejam consistentes             |
| **Proteger as credenciais**                          | Armazenar `client_id`, `client_secret` e `JWT` com segurança              |

---

### Resumo Comparativo

| Responsável     | Bfluence ✅ | Comunidade ✅ |
|------------------|-------------|----------------|
| Expor endpoints  | ✅           | ❌             |
| Armazenar BFLUs  | ❌           | ✅             |
| Calcular comissão| ❌           | ✅             |
| Validar payloads | ✅           | ✅             |
| Enviar transações| ❌           | ✅             |
| Auditar valores  | Opcional     | ✅             |

---

> Para saber os pré-requisitos técnicos para a integração funcionar corretamente, continue em [Requisitos Técnicos](./requisitos.md)
