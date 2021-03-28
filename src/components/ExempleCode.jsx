import React from 'react';

import Button from "./Button.jsx";
import ComponentA from "./ComponentA.jsx";
import ComponentB from "./ComponentB.jsx";
import ComponentePorClass from "./ComponentePorClass.jsx";


function ExempleCode() {

  const elemento = "World";
  const element2 = <div>Teesteeee</div>

  function soma(a,b) {
    return alert(a + b);
  }

  const hasCostumer = true;
  const hasCostumer2 = false;
  const hasCostumer3 = true;

  //pode ser retornado como um arrow function ou diretamente
  // Por arrow function
  const renderShowHistory = () => (
    <div>
      Clique no botçao abaixo para visualizar o historico dos clientes
      <Button className="btn-padrao" name="Historico dos clientes"></Button>
    </div>
  );  

  // diretamente
  const renderAddHistory = (
    <div>
      Clique abaixo para cadastrar o cliente
      <Button className="btn-padrao" name="Cadastrar" />
    </div>
  );


  const customer = "Bob redshild";

  const showCustomer = () => {
    if(!hasCostumer) return null

    return (
      <div>
        <h1>Nome do Cliente: {customer}</h1>
      </div>
    )
  }


  const clientes = [
    {
      id: 1,
      name: 'Jom',
      skills: ['React','Node']
    },
    {
      id: 2,
      name: 'Iris',
      skills: ['Sass','Javascript']
    },
    {
      id: 3,
      name: 'Bob',
      skills: ['React','Node', 'Sass', 'Javascript']
    },
  ]

  //O elemento key precisa ser um parametro de valor unico (q não repete)
  const renderCliente = (clientes, index) => {
    return (
      <div key={`cliente-${clientes.id}`}>
        <dt>{clientes.name}</dt>
        {clientes.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skills, index) => {
    return (
      <div key={index}>
        <dd>{skills}</dd>
      </div>
    )
  }

  const showEvent = (e) => {
    console.log(e);
  }
  const showEvent2 = (e) => {
    let response = prompt("Hey, how are you?", "...");
    alert(`ok you input ${response}`);
  }

  const handleChange = (e) => {
    const { value } = e.target
    console.log(value);
  }


  const clientes2 = [
    {
      id: 1,
      name: 'Jom',
      skills: ['React','Node']
    },
    {
      id: 2,
      name: 'Iris',
      skills: ['Sass','Javascript']
    },
    {
      id: 3,
      name: 'Bob',
      skills: ['React','Node', 'Sass', 'Javascript']
    },
  ]

  //O elemento key precisa ser um parametro de valor unico (q não repete)
  const renderCliente2 = (clientes, index) => {
    return (
      <div key={`cliente-${clientes.id}`}>
        <dt>{clientes.name} <button className="btn-padrao" onClick={(e) => handleClick(e, clientes.id)} >deletar cliente x</button> </dt>
        {clientes.skills.map(renderSkills2)}
      </div>
    )
  }

  const renderSkills2 = (skills, index) => {
    return (
      <div key={index}>
        <dd>{skills}</dd>
      </div>
    )
  }

  const handleClick = (e, id) => {
    console.log("deletar cliente");
    alert(`O ID do cliente: ${id}`)
  }
  //----------------------------------------


  return (
    <>
      <h1> { elemento }</h1>
      { element2 }
      {/* { soma(1, 2) } */}
      <Button onClick={() => soma(10, 20)} teste="TESTE" name="Bob unbelievable" />
      <hr/>

      {/* 
        Quando um componente esta aninhado é preciso usar a propriedade children 
        para poder ter acesso aos outros componentes
      */}

      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(30, 30)} name="Button add" />
        </ComponentB>
      </ComponentA>

      <hr/>

      <ComponentePorClass />

      <hr/>

      {/* Variaveis de Elemento || If inline com o Operador Logico && */}
      {hasCostumer && (
        <div>
          Clique no botçao abaixo para visualizar o historico dos clientes
          <Button className="btn-padrao" name="Historico dos clientes"></Button>
          <span>VARIAVEL = TRUE</span>
        </div>
      )}
      {hasCostumer2 && (
        <div>
          Clique no botçao abaixo para visualizar o historico dos clientes
          <Button className="btn-padrao" name="Historico dos clientes"></Button>
          <span>VARIAVEL = FALSE</span>
        </div>
      )}

      <hr/>

      {/* If-Else inline com Operador Condicional */}
      {hasCostumer3 ? (
        <div>
          Clique no botçao abaixo para visualizar o historico dos clientes
          <Button className="btn-padrao" name="Historico dos clientes"></Button>
        </div>
      ) : (
        <div>
          Clique abaixo para cadastrar o cliente
          <Button className="btn-padrao" name="Cadastrar" />
        </div>
      )
      }

      <hr/> 
      {/* Uma forma reduzida */}
      {hasCostumer3 ? renderShowHistory() : renderAddHistory}

      <hr/> 

      <div>
        {showCustomer()}
      </div>

      <hr/> 

      <div>
        <dl>
          {clientes.map(renderCliente)}
        </dl>
      </div>

      <hr/>
      <h3>EVENTOS</h3>
      <Button className="btn-padrao" name="Mostrar Evento" onClick={showEvent} />

      <br/>
      <br/>

      <input type="text" onChange={handleChange}/>
      <Button className="btn-padrao" name="Mostrar Evento" onClick={showEvent2}/>

      <hr/>

      <div>
        <dl>
          {clientes2.map(renderCliente2)}
        </dl>
      </div>

    </>
  )
}

export default ExempleCode;
