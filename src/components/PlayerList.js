import React from "react";
import useQuerys from "../hooks/useQuerys";
import "../css/PlayerList.css";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ querys }) => {
  const [playersList, loading, error] = useQuerys(querys);

  if (loading) return <h1>Loading</h1>;
  return (
    !!playersList[0].attendances.length &&
    playersList.map((playerData) => {
      return <PlayerCard data={playerData} />;
    })
  );
};

export default PlayerList;
