# Módulo Cadastro de Material - Knex.js
As três tecnologias usadas ness módulo são: Express, MYSQL e Knex.js sendo esse último responsável pela conexão da aplicação com o banco de dados. Para utilização do knex.js com o banco de dados MYSQL é necessário a instalação deste pacote e também o driver do MYSQL. Para ser mais prático, vamos utilizar o NPM para instalação de ambos.

```bash
$ npm install knex mysql
```

Feita a instalação o próximo passo para utilização do módulo é a configuração do Knex com o banco de dados para isso devemos criar na pasta do projeto um arquivo com o nome knexfile.js contendo as seguintes linhas de código

```js
module.exports = {
 client: 'mysql',
 connection: {
   host : '127.0.0.1',
   user : 'your_user',
   password : 'your_pass',
  database : 'med_materiais '
 }
};

```

Essa configuração só se torna válida utilizando o recurso de migração então, feita a criação do arquivo e seu preenchimento com as paramêtros de conexão vamos digitar o seguinte comando para realizar as migrações:

```bash
$ npx knex migrate:make create_materials
```
Esse comando irá criar uma migração chamada TIMESTAMP_create_materials.js sendo o TIMESTAMP a data e hora a qual o arquivo foi criado. Uma vez localizado esse arquivo deve-se adicionar as seguintes linhas de código:

```js
exports.up = function(knex) {
 return knex.schema.createTable('employees', function (table) {
   table.increments('id');
   table.string('nome_material');
   table.string('tipo_material');
   table.number('quant_material');
   table.boolean('is_admin');
 })
};

exports.down = function(knex) {
 return knex.schema.dropTable('materials');
};
```

após a adição do código devemos executar o seguinte comando para realizar migração:

```bash
$ npx knex migrate:up
```

O módulo de cadastro de material também conta com estratégias de autenticação associadas tais como: Cookie e JWT, porém, para simplificação do sistema optamos por não listar ela na documentação. Para criação da API basta usar os mesmos passos definidos na criação da API de salas usando express na mesma pasta. Após a configuração e instalação utilizamos o seguinte comando

```bash
$ npm start

```
