import React, { useEffect, useMemo, useState } from "react";
import { useQuery } from "@apollo/client";
import Checkbox from "@mui/material/Checkbox";
import { codeReport } from "../data/warcraftlogsQueries";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FetchComponent = ({ code }) => {
  const { data: data, loading: loading, error: error } = useQuery(code);
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    const list = data?.reportData.report.masterData.actors.map(
      ({ name }) => name
    );
    setPlayerList(list);
  }, [data]);

  const includeTacomonde = useMemo(() => {
    return playerList?.includes("Tacomonde");
  }, [playerList]);

  return (
    <div>
      {/* Si sacas esta condicion y directamenr renderizas el checkbox, aparecen todos los checkbox vacios por un
       mili segundo y dsps se tildan.
       Ahora aparecen de a poco pero tildados desde el inicio.
       Por ahi taria bueno sacar la condicion o dejarla, pero que el div padre de todos los checkbox ya tenga una altura asi no va moviendo elementos*/}
      {playerList?.length > 0 && (
        <Checkbox {...label} checked={includeTacomonde} />
      )}
    </div>
  );
};

export default FetchComponent;
