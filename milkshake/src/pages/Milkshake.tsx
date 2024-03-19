import { useState } from 'react';
import MilkshakeSelection from '../components/MilkshakeSelection';
import VoteResults from '../components/VoteResults';

export default function Milkshake() {

    const [votes, setVotes] = useState<{ [key: number]: number }>({});

    return (
        <div className="App">
        <header className="App-header">
            <h1>Vote for Your Favorite Milkshake</h1>
        </header>
        <MilkshakeSelection votes={votes} setVotes={setVotes} />
        {/* Pass votes state to VoteResults if managing state here */}
        <VoteResults votes={votes} />
        </div>
    );
};