---
id: introducao
title: Introdução à Integração
sidebar_position: 1
---

### Integração de Comunidades com a Plataforma Bfluence

Bem-vindo à documentação oficial da **API Pública da Bfluence**, criada para facilitar a integração entre **comunidades, marketplaces, plataformas de conteúdo e nossa rede de influenciadores (BFLUs)**.

---

### Objetivo

A integração tem como propósito:

- Rastrear vendas com cupons personalizados
- Registrar comissões automaticamente
- Promover influenciadores de forma estruturada
- Sincronizar dados com segurança e padronização

---

### O que essa integração permite?

✅ Consulta de influenciadores disponíveis para campanhas  
✅ Associação de cupons únicos por influenciador  
✅ Envio de transações com valores comissionados  
✅ Validação e auditoria de dados transacionais  
✅ Comunicação via JSON + JWT com autenticação segura

---

### Cenários comuns de uso

- **Plataformas de e-commerce** integrando campanhas com influenciadores
- **Clubes de assinatura** que promovem vendas via BFLUs
- **Plataformas educacionais** com modelo de indicação
- **Ecossistemas com parceiros e afiliados**

---

### Homologação e produção

Durante o processo de homologação, a equipe Bfluence fornecerá:

- Um `client_id` e `client_secret` para autenticação
- Um ambiente compartilhado para testes
- Token JWT para simulações autenticadas
- Suporte técnico durante todo o processo

Após validação, o mesmo fluxo pode ser replicado em produção com apenas a troca dos tokens.

---

### Documentação segmentada

Este manual está dividido em tópicos práticos:

- [Autenticação](./autenticacao.md)
- [Fluxo da Integração](./fluxo-bflus.md)
- [Endpoints e Payloads](../endpoints/get-bflus.md)
- [Requisitos Técnicos](../requisitos.md)

---

> Dica: mantenha esta doc acessível durante o desenvolvimento para garantir alinhamento com as regras da Bfluence.
