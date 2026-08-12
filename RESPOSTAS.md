# Respostas do LAB 01

Nome: Gabrielle Aparecida Cascardi Giroldo
Matricula: 26128308
Dupla (M2 em diante): Evelyn Victoria Araujo dos Santos

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro:** 01ef93bf

**Autor:** Tarcisio Melo

**Data:** 15/06/2026

**Linha alterada (antes e depois):** -  return (leitura - 32) * 5 / 9; +  return leitura * 9 / 5 + 32;

```
antes: return (leitura - 32) * 5 / 9;
depois: return leitura * 9 / 5 + 32;
```

---

## M3 - O segredo vazado

**O que voce esperava ver no `git status` e o que apareceu:** Esperava que o "credenciais.env" fosse aparecer como ignorado no git status, mas ele não apareceu nem como ignorado e nem como modificado.

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:** Sim, consegue ler a chave acessando o histórico de commits. Rodar "git rm --cached" faz com que o Git pare de rastrear o arquivo A PARTIR DE AGORA, não "esconde" o que já existia anteriormente.

---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

- `<<<<<<<` :
- `=======` :
- `>>>>>>>` :

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**

**Hash do commit de revert:**

**Por que `git revert` e nao `git reset` neste caso:**
