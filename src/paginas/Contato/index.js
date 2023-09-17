import React, { useState } from 'react';
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode armazenar os dados localmente (por exemplo, em localStorage)
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Dados armazenados com sucesso!');
  };

  return (
    <div className='comunicacao'>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="infos">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="infos">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>escreva sua Mensagem/Dúvida:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleInputChange}
          />
        </div>
        <button className='btncomunicacao' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
