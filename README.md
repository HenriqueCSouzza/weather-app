# WeatherApp

O WeatherApp foi criado para mostrar o clima, onde tras os seguintes dados:

- Clima atua
- Previsão dos próximos dias
- Força do vento
- Qualidade do ar
- Humidade
- Porcentagem de chuva
- Horário do nascer do sol
- Horário do por do sol
- Horário onde se tem mais movimentação humana (Golden hour)

---

## 1. Primeiros passos

Execute os passos abaixo:

1. Tenha instalado e configurado em sua máquina NodeJs, Git, Yarn
2. Clone o repositório. [HenriqueCSouzza/weather-app (github.com)](https://github.com/HenriqueCSouzza/weather-app.git)
3. Insira as variáveis de ambiente que se encontram no .env.example
4. Logo após é necessário executar os seguintes comando:

   ```bash
   cd weather-app
   yarn
   yarn dev
   ```

---

## 2. Tecnologias e dependências do projeto

Utilize sempre o yarn para gerenciar as dependências projeto

**2.1. TypeScript**  traz a robustez de uma tipagem estática, o que torna nosso projeto muito mais escalável, conciso e com a possibilidade de identificar bugs ainda em tempo de compilação. As configurações estão no arquivo tsconfig.json.

**2.2. EsLint:** Verificações de inconsistências, ele irá nos informar se erros no uso dos hooks, se os componentes estão seguindo o padrão. Ele nos informa dos erros sublinhando os erros para que possamos fazer as correções de maneira mais performática.

**2.3. Prettier:** O Prettier garante uma consistência em sua formatação de código e torna o processo de indentação automático.

**2.4. Vitest:** Executar testes automáticos, as configurações estão no arquivo ._vite.config.ts._ e \*\* _.src/setupTest.ts._ [Vitest · 🃏 A Vite-native testing framework. It's fast! (vitest.dev)](https://vitest.dev/)

**2.5. React Test Library:** Nos ajuda a manter componentes React Sustentáveis por meio de testes automáticos, nós também iramos utilizar o [Jest-Dom matchers](https://github.com/testing-library/jest-dom) que facilitam a nossa verificação. [Cheatsheet | Testing Library (testing-library.com)](https://testing-library.com/docs/react-testing-library/cheatsheet/)

**2.6 MaterialUi:** É uma biblioteca de componentes React de código aberto que implementa o Material Design do Google. É abrangente e pode ser usado na produção imediatamente. [MaterialUi](https://mui.com/material-ui/getting-started/)

**2.7 Serviços:** [api.openweathermap.org](https://openweathermap.org/api) | [api.sunrise-sunset.org](https://sunrise-sunset.org/)
