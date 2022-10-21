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
      {/* <div dangerouslySetInnerHTML={{ __html: raiders }} /> */}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                <div>
                  {codeListArray.length > 0 && <FetchComponent code={query0} />}
                  {codeListArray.length > 0 && <FetchComponent code={query1} />}
                  {codeListArray.length > 0 && <FetchComponent code={query2} />}
                  {codeListArray.length > 0 && <FetchComponent code={query3} />}
                  {codeListArray.length > 0 && <FetchComponent code={query4} />}
                  {codeListArray.length > 0 && <FetchComponent code={query5} />}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};

export default ActiveRaiders;
