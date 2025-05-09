---
id: fluxo-bflus
title: "Fluxo: Sincronização de BFLUs"
sidebar_position: 3
---

### Fluxo: Sincronização de BFLUs

Este fluxo descreve o processo de consulta e armazenamento local dos influenciadores disponíveis na sua comunidade.

---

### Diagrama de sequência

```mermaid
sequenceDiagram
    participant Parceiro
    participant Bfluence
    participant BancoLocal

    Parceiro->>Bfluence: Autenticação (POST /auth/token)
    Bfluence-->>Parceiro: JWT

    Parceiro->>Bfluence: GET /get-bflus
    Bfluence-->>Parceiro: Lista de BFLUs com cupons

    loop Armazenamento local
        Parceiro->>BancoLocal: Salva dados dos BFLUs
    end
```

---

### Etapas

1. **Autenticação**: o parceiro solicita o token via `POST /auth/token`
2. **Consulta**: utiliza o JWT para consultar o endpoint `GET /get-bflus`
3. **Armazenamento local**: os dados são sincronizados no banco da comunidade
4. **Endpoint**: > [GET /get-bflus → Consulta de BFLUs](../endpoints/get-bflus.md)

> Este fluxo pode ser repetido periodicamente para manter os dados atualizados.

---

> A seguir: [Fluxo de Transações](./fluxo-transacoes.md)
