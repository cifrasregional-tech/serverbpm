# ServerBPM (Netlify Function)

Função Serverless no Netlify para buscar BPM e Tom de músicas via Tunebat.

## Estrutura
```
serverbpm/
 └── netlify/
      └── functions/
           └── bpm.js
```

## Deploy no Netlify
1. Suba este repositório no GitHub.
2. No Netlify, crie um novo site a partir do GitHub.
3. O Netlify detectará automaticamente `netlify/functions/bpm.js`.
4. Após o deploy, a função estará disponível em:

```
https://SEU-SITE.netlify.app/.netlify/functions/bpm?q=promessas
```
