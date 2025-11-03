import React, { Component } from 'react';

// 1️⃣ On définit le type du "state"
interface CounterState {
  count: number; // le compteur est un nombre
}

// 2️⃣ On crée un composant de classe typé
class Counter extends Component<{}, CounterState> {
  // 3️⃣ On initialise le state
  state: CounterState = {
    count: 0,
  };

  // 4️⃣ On définit une méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 5️⃣ On affiche le rendu
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// 6️⃣ Exportation
export default Counter;
