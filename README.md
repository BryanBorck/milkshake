# milkshake

## Setando o frontend do zero

Vamos usar o seguinte stack: Typescript.JS + Tailwind CSS + Vite.JS. Abra o prompt no local que deseja colocar o projeto:

```
npm create vite@latest
```

Aparecerá uma opção de colocar um nome, eu coloquei _frontend_, mas você pode colocar qualquer um.

Escolha React, e depois Typescript + SWC (compilador mais rápido). Agora que seu projeto está criado, você abre ele:

```
cd frontend
```

E após isso, instale o _node_modules_ (dependências):

```
npm install
```

Agora, vamos instalar o Tailwind CSS:

```
npm install -D tailwindcss postcss autoprefixer
```

E então depois colocar:

```
npx tailwindcss init -p
```

E agora basta ir até o arquivo **tailwind.config.js** e substituir para o seguinte código:

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

PS.: Você pode abrir o VS Code usando o seguinte comando para ver o arquivo:

```
code .
```

Também deve abrir o arquivo **index.css** na pasta **src** e colocar as seguintes linhas no topo do arquivo:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Pronto, agora para rodar o projeto basta dar:

```
npm run dev
```

E abrir na porta especificada.


## Clonando (mais rápido)

Para visualização do projeto final: Abra o prompt comando do seu PC até um local que você queira clonar o repositório criado e coloque:

```
git clone https://github.com/BryanBorck/milkshake
```

Após isso, basta ver o código feito.
