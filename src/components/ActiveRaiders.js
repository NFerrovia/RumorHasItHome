import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';
import { codeReport } from '../data/warcraftlogsQueries.js';
import { report1 } from '../data/warcraftlogsQueries.js';
import { raiders } from '../data/membersData.js';
import Checkbox from '@mui/material/Checkbox';
import parse from 'html-react-parser';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ActiveRaiders = () => {
  const { data: data, loading: loading, error: error } = useQuery(codeReport);
  const { data: data1, loading: loading1, error: error1 } = useQuery(report1);

  if (loading) return 'Loading...';
  if (error) return <pre>{error.message}</pre>;
  if (loading1) return 'Loading...';
  if (error1) return <pre>{error1.message}</pre>;

  const codeList = data.reportData.reports.data.map(({ code }) => code);
  const players = data1.reportData.report.masterData.actors.map(
    ({ name }) => name
  );

  console.log(codeList[0]);
  console.log(players);

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        parse(raiders)
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
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
      {codeList.map((code) => (
        <li>{code}</li>
      ))}
      <img src="https://render.worldofwarcraft.com/us/character/lightbringer/238/146705902-avatar.jpg" />
      <div>Report:</div>
      <div>{data1.reportData.report.code}</div>
      <div>Attendance:</div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
          </tr>
        </thead>
        <tbody>
          {data1.reportData.report.masterData.actors.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.subType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveRaiders;
