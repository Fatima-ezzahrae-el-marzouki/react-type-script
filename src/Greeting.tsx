import React from 'react';

// 1️⃣ On crée une interface pour typer les props du composant
interface GreetingProps {
  name: string; // "name" est une chaîne de caractères
}

// 2️⃣ On crée un composant fonctionnel typé avec React.FC
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // 3️⃣ On affiche le message
  return <div>Hello, {name}!</div>;
};

// 4️⃣ On exporte le composant pour pouvoir l'utiliser ailleurs
export default Greeting;
