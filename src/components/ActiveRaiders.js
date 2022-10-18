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
import { reportPlayers } from '../data/warcraftlogsQueries.js';
import { raiders } from '../data/membersData.js';
import Checkbox from '@mui/material/Checkbox';
import parse from 'html-react-parser';
import { gql } from '@apollo/client';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ActiveRaiders = () => {
  const { data: data, loading: loading, error: error } = useQuery(codeReport);

  // const codeList = data.reportData.reports.data.map(({ code }) => code);

  // let codeListArray = [];
  // for (let i = 0; i < 6; i++) {
  //   codeListArray.push(codeList[i]);
  // }

  // inicio quilombo queries

  //   const query0 = gql`
  // {
  //   reportData {
  //     report(code: "${codeListArray[0]}") {
  //       code
  //       revision
  //       zone {
  //         id
  //         name
  //       }
  //       masterData(translate: false) {
  //         actors(type: "player") {
  //           name
  //           subType
  //         }
  //       }
  //     }
  //   }
  // }
  // `;

  //   const query1 = gql`
  // {
  // reportData {
  //   report(code: "${codeListArray[1]}") {
  //     code
  //     revision
  //     zone {
  //       id
  //       name
  //     }
  //     masterData(translate: false) {
  //       actors(type: "player") {
  //         name
  //         subType
  //       }
  //     }
  //   }
  // }
  // }
  // `;

  //   const query2 = gql`
  // {
  // reportData {
  //   report(code: "${codeListArray[2]}") {
  //     code
  //     revision
  //     zone {
  //       id
  //       name
  //     }
  //     masterData(translate: false) {
  //       actors(type: "player") {
  //         name
  //         subType
  //       }
  //     }
  //   }
  // }
  // }
  // `;

  //   const query3 = gql`
  // {
  // reportData {
  //   report(code: "${codeListArray[3]}") {
  //     code
  //     revision
  //     zone {
  //       id
  //       name
  //     }
  //     masterData(translate: false) {
  //       actors(type: "player") {
  //         name
  //         subType
  //       }
  //     }
  //   }
  // }
  // }
  // `;

  //   const query4 = gql`
  // {
  // reportData {
  //   report(code: "${codeListArray[4]}") {
  //     code
  //     revision
  //     zone {
  //       id
  //       name
  //     }
  //     masterData(translate: false) {
  //       actors(type: "player") {
  //         name
  //         subType
  //       }
  //     }
  //   }
  // }
  // }
  // `;

  //   const query5 = gql`
  // {
  // reportData {
  //   report(code: "${codeListArray[5]}") {
  //     code
  //     revision
  //     zone {
  //       id
  //       name
  //     }
  //     masterData(translate: false) {
  //       actors(type: "player") {
  //         name
  //         subType
  //       }
  //     }
  //   }
  // }
  // }
  // `;

  // fin quilombo queries

  // const {
  //   data: dataPlayers,
  //   loading: loadingPlayers,
  //   error: errorPlayers,
  // } = useQuery(reportPlayers);

  // inicio quilombo useQueries

  // const { data: data0, loading: loading0, error: error0 } = useQuery(query0);
  // const { data: data1, loading: loading1, error: error1 } = useQuery(query1);
  // const { data: data2, loading: loading2, error: error2 } = useQuery(query2);
  // const { data: data3, loading: loading3, error: error3 } = useQuery(query3);
  // const { data: data4, loading: loading4, error: error4 } = useQuery(query4);
  // const { data: data5, loading: loading5, error: error5 } = useQuery(query5);

  // fin quilombo useQueries

  // if (loading) return 'Loading...';
  // if (error) return <pre>{error.message}</pre>;
  // if (loadingPlayers) return 'Loading...';
  // if (errorPlayers) return <pre>{errorPlayers.message}</pre>;

  // // inicio quilombo ifs

  // if (loading0) return 'Loading...';
  // if (error0) return <pre>{error0.message}</pre>;
  // if (loading1) return 'Loading...';
  // if (error1) return <pre>{error1.message}</pre>;
  // if (loading2) return 'Loading...';
  // if (error2) return <pre>{error2.message}</pre>;
  // if (loading3) return 'Loading...';
  // if (error3) return <pre>{error3.message}</pre>;
  // if (loading4) return 'Loading...';
  // if (error4) return <pre>{error4.message}</pre>;
  // if (loading5) return 'Loading...';
  // if (error5) return <pre>{error5.message}</pre>;

  // fin quilombo ifs

  // const players = dataPlayers.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );

  // const report0 = data0.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );
  // const report1 = data1.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );
  // const report2 = data2.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );
  // const report3 = data3.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );
  // const report4 = data4.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );
  // const report5 = data5.reportData.report.masterData.actors.map(
  //   ({ name }) => name
  // );

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
                {/* <div>
                  {report0.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                  {report1.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                  {report2.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                  {report3.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                  {report4.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                  {report5.includes('Tacomonde') ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )}
                </div> */}
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
      {/* {codeList.map((code) => (
        <li>{code}</li>
      ))} */}
      <img src="https://render.worldofwarcraft.com/us/character/lightbringer/238/146705902-avatar.jpg" />
      <div>Report:</div>
      {/* <div>{data1.reportData.report.code}</div> 
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
      </table> */}
    </div>
  );
};

export default ActiveRaiders;
