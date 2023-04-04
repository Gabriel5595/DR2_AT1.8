import React from 'react';

function ListaDePessoas({ pessoas }) {
  return (
    <ul>
      {pessoas.map((pessoa, index) => (
        <li key={index}>
          <p><strong>Nome:</strong> {pessoa.nome}</p>
          <p><strong>Email:</strong> {pessoa.email}</p>
          <p><strong>Trabalho:</strong> {pessoa.trabalho}</p>
          <p><strong>Departamento:</strong> {pessoa.departamento}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListaDePessoas;
