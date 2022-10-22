import { Checkbox } from "@mui/material";
import React from "react";

// {
//     "attendances": [
//         {
//             "attended": false,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 28,
//                 "name": "Sanctum of Domination"
//             }
//         },
//         {
//             "attended": false,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 28,
//                 "name": "Sanctum of Domination"
//             }
//         },
//         {
//             "attended": true,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 26,
//                 "name": "Castle Nathria"
//             }
//         },
//         {
//             "attended": true,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 26,
//                 "name": "Castle Nathria"
//             }
//         },
//         {
//             "attended": true,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 29,
//                 "name": "Sepulcher of the First Ones"
//             }
//         },
//         {
//             "attended": true,
//             "event": {
//                 "__typename": "Zone",
//                 "id": 29,
//                 "name": "Sepulcher of the First Ones"
//             }
//         }
//     ],
//     "player": {
//         "__typename": "ReportActor",
//         "name": "Sigmend",
//         "subType": "Rogue",
//         "server": "Lightbringer"
//     }
// }

const PlayerCard = ({ data }) => {
  const { attendances, player } = data;
  return (
    <div key={player.name} className="player-card">
      <div className="player-header">
        <img
          alt={`${player.name} profile`}
          className="player-avatar"
          src="https://render.worldofwarcraft.com/us/character/lightbringer/238/146705902-avatar.jpg"
        />
        <div className="player-info">
          <h4>{player.name}</h4> <p>Attendances:</p>
        </div>
      </div>
      <div className="attendances">
        {attendances.map((attendance, index) => (
          <div className="attendance" key={index}>
            <p>{attendance.event.name}</p>
            <Checkbox checked={attendance.attended} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;
