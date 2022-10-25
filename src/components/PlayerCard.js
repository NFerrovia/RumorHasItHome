import React, { useEffect, useRef, useState } from 'react';
import '../css/PlayerCard.css';
import { Checkbox } from '@mui/material';

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
  const [avatar, setAvatar] = useState('');
  const loadedFlag = useRef(false);
  let active = 0;

  useEffect(() => {
    (async () => {
      if (!loadedFlag.current && player.name) {
        try {
          const response = await fetch(
            `https://us.api.blizzard.com/profile/wow/character/lightbringer/${player.name.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=EU2U3uHNxaP9oSTaMdJaycy4rcRE61i2r0`
          );

          const result = await response.json();
          setAvatar(result?.assets[0].value);
        } catch (e) {
          setAvatar('https://render.worldofwarcraft.com/shadow/avatar/1-0.jpg');
        } finally {
          loadedFlag.current = true;
        }
      }
    })();
  }, [player.name]);

  return (
    data &&
    loadedFlag.current && (
      <div key={player.name} className="player-card">
        <div className="player-header">
          <img
            alt={`${player.name} profile`}
            className="player-avatar"
            src={avatar}
          />
          <div className="player-info">
            <h4>{player.name}</h4> <p>Status:</p>
          </div>
        </div>
        <div className="attendances">
          {attendances.map((attendance, index) => (
            <div className="attendance" key={index}>
              <p>{attendance.event.name}</p>
              <Checkbox checked={attendance.attended} />
              <div className="invisible">
                {attendance.attended ? (active += 1) : (active += 0)}
              </div>
            </div>
          ))}
        </div>
        <div className="status">{active >= 3 ? 'Active' : 'Inactive'}</div>
      </div>
    )
  );
};

export default PlayerCard;
