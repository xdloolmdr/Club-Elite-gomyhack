import React from "react";

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
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-400">
        <p><span className="font-semibold text-white">Age:</span> {player.age}</p>
        <p><span className="font-semibold text-white">Height:</span> {player.height} cm</p>
        <p><span className="font-semibold text-white">Weight:</span> {player.weight} kg</p>
        <p><span className="font-semibold text-white">Strong Foot:</span> {player.strongFoot}</p>
        <p><span className="font-semibold text-white">Nationality:</span> {player.nationality}</p>
      </div>
      <div className="mt-4 bg-gray-800 p-3 rounded-lg">
        <p className="text-xs text-gray-400">Performance Stats</p>
        <div className="flex justify-between text-sm font-semibold mt-2">
          <p>⚽ Goals: <span className="text-green-400">{player.goals}</span></p>
          <p>🎯 Assists: <span className="text-blue-400">{player.assists}</span></p>
        </div>
        <div className="flex justify-between text-sm font-semibold mt-2">
          <p>🟨 Yellow: <span className="text-yellow-400">{player.yellowCards}</span></p>
          <p>🟥 Red: <span className="text-red-500">{player.redCards}</span></p>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-400">Form: <span className="text-green-400 font-semibold">{player.form}</span></p>
    </div>
  );
};

export default PlayerCard;
