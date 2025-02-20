export default function PlayerInfos({ player }) {
    console.log(player);
    return (
        <dialog
            id={`player_modal_${player._id}`}
            className="modal max-w-xs rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center text-white shadow-lg"
        >
            <div className="modal-box">
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
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </dialog>
    );
}
