import { useEffect, useState } from "react";
import axios from "axios";

const PlayerCard = ({ player }) => {
    return (
        <div className="max-w-xs rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center text-white shadow-lg">
            <img
                src={player.image || "/default-player.png"}
                alt={player.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-blue-500"
            />
            <h2 className="text-lg font-bold text-blue-400">{player.name}</h2>
            <p className="text-sm text-gray-300">{player.position}</p>
            <div className="mt-4 rounded-lg bg-gray-800 p-3">
                <p className="text-xs text-gray-400">Performance Stats</p>
                <div className="mt-2 flex justify-between text-sm font-semibold">
                    <p>
                        ⚽ Goals: <span className="text-green-400">{player.goals}</span>
                    </p>
                    <p>
                        🎯 Assists: <span className="text-blue-400">{player.assists}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

const PlayerGrid = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get("http://localhost:3001/players");
                setPlayers(response.data);
            } catch (error) {
                console.error("Failed to fetch players:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, []);

    if (loading) {
        return <p>Loading players...</p>;
    }
    console.log(players);

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};

export default PlayerGrid;
