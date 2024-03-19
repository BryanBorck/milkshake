import React from 'react';

type Milkshake = {
  id: number;
  name: string;
  image: string; // URL to an image
};

// Example milkshakes data
const milkshakes: Milkshake[] = [
    { id: 1, name: 'Abacaxi ao Vinho', image: 'pineapple-wine-milkshake-url' },
    { id: 2, name: 'Frutas Vermelhas', image: 'red-fruits-milkshake-url' },
    { id: 3, name: 'Maracujá', image: 'passion-fruit-milkshake-url' },
    { id: 4, name: 'Morango', image: 'strawberry-milkshake-url' },
    { id: 5, name: 'Chocolate', image: 'chocolate-milkshake-url' },
    { id: 6, name: 'Negresco', image: 'negresco-milkshake-url' },
    { id: 7, name: 'Ninho', image: 'ninho-milkshake-url' },
    { id: 8, name: 'Ovomaltine', image: 'ovomaltine-milkshake-url' },
    { id: 9, name: 'Ovoninho', image: 'ovoninho-milkshake-url' },
    { id: 10, name: 'Paçoca', image: 'peanut-candy-milkshake-url' },
    { id: 11, name: 'Farinha Láctea', image: 'milk-flour-milkshake-url' },
    { id: 12, name: 'Abacaxi', image: 'pineapple-milkshake-url' },
    { id: 13, name: 'Menta', image: 'mint-milkshake-url' },
  ];

export default function MilkshakeSelection({ votes, setVotes } : { votes: { [key: number]: number }, setVotes: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>  }) {

  const voteForMilkshake = (id: number) => {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [id]: (currentVotes[id] || 0) + 1,
    }));
  };

  return (
    <div className="p-4">
      {milkshakes.map((milkshake) => (
        <div key={milkshake.id} className="flex items-center justify-between p-2 m-2 border rounded shadow">
          <span>{milkshake.name}</span>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => voteForMilkshake(milkshake.id)}>
            Vote
          </button>
        </div>
      ))}
    </div>
  );
};