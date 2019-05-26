Nesse repositório eu peguei os dados do banco de dados e usei no front end com ejs e modularizei o código com o intuito de organizar e de evitar ter que reescrever o mesmo código já pronto.

O que eu fiz?

Criei 2 pastas no root, app e config. Em config, primeiramente, eu criei o arquivo server.js que é onde eu deixo setado as configurações do app. Então é lá que importo o express e crio o app.

Importo o app pronto em app.js. Em app.js eu vou chamar as Routes e rodar o servidor com o app.listen().

Ao invés de deixar o app.get() de cada rota no app.js, criei uma pasta dentro de ./app chamada Routes e nela terei um arquivo para cada rota.
IMPORTANTE: Precisaremos da variável app para rodar o método get, por exemplo. Então é importante enviarmos ele como parâmetro do app.js para o home.js.

Teoricamente, eu ia chamar o mysql e setar as informações para a conexão no home.js, já que lá é onde eu vou mandar as informações do banco de dados para o home.ejs, porém eu teria que escrever isso em todas as rotas que eu fosse usar o banco de dados.

Para facilitar, dentro de ./config eu criei o arquivo dbConnection.js, que é onde eu vou deixar isso já pronto. Então importarei:
const connection = dbConnection();
e teoricamente agora basta jogar o connection.query() com o comando SQL e a função de callback que vai renderizar a nossa página.
Como segundo parâmetro do método render, passaremos um objeto com a variável que queremos enviar e o seu valor, no caso eu disse que queria que recebesse a variável "pessoas" com o valor de "result"
res.render('../views/home', {pessoas: result});

Em ./app/routes/views/home.ejs, podemos adicionar código de javascript como:
<% codeHere() %>
e adicionar variáveis com:
<%= nomeDaVariavel %>

Vale também reparar em como eu chamo o css no html, baseado a como foi upado o static em ./config/server.js.