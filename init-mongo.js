const conn = new Mongo();
const db = conn.getDB("med_db");

db.createCollection("pessoas");

db.pessoas.insertMany([
  {
    nome: "Julio da Gaita",
    nascimento: "09/15/1998",
    sexo: "Masculino",
    active: true,
  },
  {
    nome: "Bruna Rodrigues",
    nascimento: "03/22/1985",
    sexo: "Feminino",
    active: true,
  },
  {
    nome: "Leonardo Martins",
    nascimento: "02/08/2000",
    sexo: "Masculino",
    active: true,
  },
]);

