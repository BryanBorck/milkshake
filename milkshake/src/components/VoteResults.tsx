import React from 'react';

type Props = {
  votes: { [key: number]: number };
};

const VoteResults: React.FC<Props> = ({ votes }) => (
  <div className="results">
    {Object.entries(votes).map(([id, count]) => (
      <div key={id} className="p-2 m-2 border rounded shadow">
        Milkshake ID {id} has {count} votes.
      </div>
    ))}
  </div>
);

export default VoteResults;