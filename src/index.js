const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) =>{
  const { teste } = request.query;
  console.log(teste);
  return response.json(["Engenharia da Computação", "Sistemas de Informação", "Análise e Desenvolvimento de Sistemas"]);
});

app.post("/courses", (request, response) =>{
  const body = request.body;
  console.log(body);
  return response.json(["Engenharia da Computação", "Sistemas de Informação", "Análise e Desenvolvimento de Sistemas", "Design"]);
});

app.put("/courses/:id", (request, response) =>{
  const { id } = request.params;
  console.log(id);
  return response.json(["Engenharia de Computação e Automação", "Sistemas de Informação", "Análise e Desenvolvimento de Sistemas", "Design"]);
});

app.patch("/courses/:id", (request, response) =>{
  return response.json(["Engenharia de Computação e Automação", "Sistemas de Informação", "Análise e Desenvolvimento de Sistemas", "Design de UI"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Engenharia de Computação e Automação", "Análise e Desenvolvimento de Sistemas", "Design de UI"]);
});

app.listen(3333);