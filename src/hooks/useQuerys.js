import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { none } from "../utils/arrayUtils";

const PLAYERS = [
  "Tacomonde",
  "Flavindy",
  "Punjibottoms",
  "Anakane",
  "Bigbahdwolff",
  "Kaivana",
  "Marluxion",
  "Serathil",
  "Yenbach",
  "Lokrobster",
  "Lunararies",
  "Lízzy",
  "Bonesey",
  "Exeii",
  "Meltedfacess",
  "Zylander",
  "Nahul",
  "Sigmend",
  "Fayle",
  "Kyliejoy",
  "Etick",
  "Chincos",
  "Freàk",
  "Ripzeez",
];

const useQuerys = (querys) => {
  const { data: data0, loading: loading0, error: error0 } = useQuery(querys[0]);
  const { data: data1, loading: loading1, error: error1 } = useQuery(querys[1]);
  const { data: data2, loading: loading2, error: error2 } = useQuery(querys[2]);
  const { data: data3, loading: loading3, error: error3 } = useQuery(querys[3]);
  const { data: data4, loading: loading4, error: error4 } = useQuery(querys[4]);
  const { data: data5, loading: loading5, error: error5 } = useQuery(querys[5]);
  const [totalEvents, setTotalEvents] = useState([]);

  useEffect(() => {
    !loading0 &&
      !loading1 &&
      !loading2 &&
      !loading3 &&
      !loading4 &&
      !loading5 &&
      setTotalEvents([data0, data1, data2, data3, data4, data5]);
  }, [loading0, loading1, loading2, loading3, loading4, loading5]);

  const playersAssists =
    none(totalEvents, (event) => !event) &&
    PLAYERS.reduce((acc, player) => {
      let playerData;
      const attendanceByPlayer = totalEvents.map((event) => {
        //Search the player in the list of players of the event and get its info
        const playerInfo = event.reportData.report.masterData.actors.find(
          (playerAttended) => playerAttended.name === player
        );
        //get info event
        const eventInfo = event.reportData.report.zone;
        //save player info to add to the object latter
        playerData = playerInfo;
        //return boolean for attended flag and the event info
        return { attended: !!playerInfo, event: eventInfo };
      });
      const data = playerData || { name: player };
      return [...acc, { attendances: attendanceByPlayer, player: data }];
    }, []);

  return [playersAssists, loading5, error5];
};

export default useQuerys;
