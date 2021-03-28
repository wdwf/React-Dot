import React, { Component } from 'react';

class ComponentePorClass extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        clock: `${this.clock + 1}`,
      })
    }, 2000)
  }

  AlterarCopo = () => {
    //O setState consegue alterar a propriedade state da classe
    this.setState({
      copo: "refri"
    })
  }

  render() {
    const { clock, copo } = this.state;
    return (
      <div>
        {/* para acessar algo no state podemos fazer assim 
          <h1>{this.state.clock}</h1>
          Porem fica muito verboso então para diminuir fazemos a desestruturação
        */}
        
        <h1>{clock}</h1>

        <button onClick={() => {this.AlterarCopo()}}>{copo}</button>
      </div>
    )
  }
}

export default ComponentePorClass;