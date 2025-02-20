import { useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";

function Player() {
    const [playerList, setPlayersList] = useState([]);

    const updateplayers = (index) => {
        setPlayersList(
            playerList.map((i, k) => {
                if (k === index) return { ...i, isActive: !i.isActive };
                return i;
            })
        );
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {playerList.map((i, k) => {
                    return (
                        <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
                            <p className="flex">
                                <img
                                    alt="icon"
                                    src={i.icon}
                                    className="mr-4 inline-block h-12 w-12"
                                />
                                {i.description}
                            </p>
                            <div className="mt-6 text-right">
                                <input
                                    type="checkbox"
                                    className="toggle toggle-success toggle-lg"
                                    checked={i.isActive}
                                    onChange={() => updateplayers(k)}
                                />
                            </div>
                        </TitleCard>
                    );
                })}
            </div>
        </>
    );
}

export default Player;
