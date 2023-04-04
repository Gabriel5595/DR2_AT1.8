import faker from 'faker';

function GeraPessoas(pagina) {
  const novasPessoas = [];

  for (let i = 0; i < 10; i++) {
    const nome = faker.name.findName();
    const email = faker.internet.email();
    const trabalho = faker.name.jobTitle();
    const departamento = faker.commerce.department();

    novasPessoas.push({ nome, email, trabalho, departamento });
  }

  return novasPessoas;
}

export default GeraPessoas;
