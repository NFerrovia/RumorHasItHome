import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';
import { codeReport } from '../data/warcraftlogsQueries.js';
import { reportPlayers } from '../data/warcraftlogsQueries.js';
import { raiders } from '../data/membersData.js';
import Checkbox from '@mui/material/Checkbox';
import { gql } from '@apollo/client';
import FetchComponent from './FetchComponent.js';
import '../css/ActiveRaiders.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ActiveRaiders = () => {
  const { data: data, loading: loading, error: error } = useQuery(codeReport);
  const codeListArray = data
    ? data.reportData.reports.data.map(({ code }) => code)
    : [];

  const query0 =
    codeListArray.length > 0 &&
    gql`
      {
        reportData {
          report(code: "${codeListArray[0]}") {
            code
            revision
            zone {
              id
              name
            }
            masterData(translate: false) {
              actors(type: "player") {
                name
                subType
              }
            }
          }
        }
      }
      `;

  const query1 =
    codeListArray.length > 0 &&
    gql`
        {
          reportData {
            report(code: "${codeListArray[1]}") {
              code
              revision
              zone {
                id
                name
              }
              masterData(translate: false) {
                actors(type: "player") {
                  name
                  subType
                }
              }
            }
          }
        }
        `;

  const query2 =
    codeListArray.length > 0 &&
    gql`
    {
      reportData {
        report(code: "${codeListArray[2]}") {
          code
          revision
          zone {
            id
            name
          }
          masterData(translate: false) {
            actors(type: "player") {
              name
              subType
            }
          }
        }
      }
    }
    `;

  const query3 =
    codeListArray.length > 0 &&
    gql`
    {
      reportData {
        report(code: "${codeListArray[3]}") {
          code
          revision
          zone {
            id
            name
          }
          masterData(translate: false) {
            actors(type: "player") {
              name
              subType
            }
          }
        }
      }
    }
    `;

  const query4 =
    codeListArray.length > 0 &&
    gql`
    {
      reportData {
        report(code: "${codeListArray[4]}") {
          code
          revision
          zone {
            id
            name
          }
          masterData(translate: false) {
            actors(type: "player") {
              name
              subType
            }
          }
        }
      }
    }
    `;

  const query5 =
    codeListArray.length > 0 &&
    gql`
    {
      reportData {
        report(code: "${codeListArray[5]}") {
          code
          revision
          zone {
            id
            name
          }
          masterData(translate: false) {
            actors(type: "player") {
              name
              subType
            }
          }
        }
      }
    }
    `;

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {/* Desde aca podes empezar a borrar adro si querés xD Tacomonde */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Tacomonde"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/238/146705902-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Tacomonde"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Tacomonde" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Flavindy */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Flavindy"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/87/146973527-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Flavindy"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Flavindy" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Punjibottoms */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Punjibottoms"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/251/177091323-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Punjibottoms"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Punjibottoms" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Anakane */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Anakane"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/161/174531489-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Anakane"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Anakane" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Bigbahdwolff */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Bigbahdwolff"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/39/150010151-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Bigbahdwolff"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Bigbahdwolff" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Kaivana */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Kaivana"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/114/176428402-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kaivana"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Kaivana" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Marluxion */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Marluxion"
              src="https://render.worldofwarcraft.com/us/character/illidan/87/222084951-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Marluxion"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Marluxion" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />

        {/* Serathil */}

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Serathil"
              src="https://render.worldofwarcraft.com/us/character/lightbringer/210/119876818-avatar.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Serathil"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Attendance:
                </Typography>
                <div className="AttendanceContainer">
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query0} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query1} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query2} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query3} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query4} />
                  )}
                  {codeListArray.length > 0 && (
                    <FetchComponent playerName="Serathil" code={query5} />
                  )}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>

        {/* aca termina adro xD */}
      </List>
    </div>
  );
};

export default ActiveRaiders;
