import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerCard = ({ player }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 text-white max-w-xs text-center">
      <img
        src={player.image || "/default-player.png"}
        alt={player.name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 mb-4"
      />
      <h2 className="text-lg font-bold text-blue-400">{player.name}</h2>
      <p className="text-gray-300 text-sm">{player.position}</p>
      <div className="mt-4 bg-gray-800 p-3 rounded-lg">
        <p className="text-xs text-gray-400">Performance Stats</p>
        <div className="flex justify-between text-sm font-semibold mt-2">
          <p>⚽ Goals: <span className="text-green-400">{player.goals}</span></p>
          <p>🎯 Assists: <span className="text-blue-400">{player.assists}</span></p>
        </div>
      </div>
    </div>
  );
};

function Player() {
    const [playerList, setPlayersList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/players');
                setPlayersList(response.data);
            } catch (error) {
                console.error('Failed to fetch players:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    const updateplayers = (index) => {
        setPlayersList(
            playerList.map((i, k) => {
                if (k === index) return { ...i, isActive: !i.isActive };
                return i;
            })
        );
    };

    if (loading) {
        return <p>Loading players...</p>;
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {playerList.map((player, k) => (
                    <PlayerCard key={k} player={player} />
                ))}
            </div>
        </>
    );
}

export default Player;
