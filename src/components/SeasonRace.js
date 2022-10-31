import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { members } from '../data/SeasonRacePlayersData.js';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const SeasonRace = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return members.map((player) => {
    return (
      <div>Work in Progress</div>
      //   <List>
      //     <ListItemButton onClick={handleClick}>
      //       <ListItemIcon>
      //         <InboxIcon />
      //       </ListItemIcon>
      //       <ListItemText primary={`${player}`} />
      //       {open ? <ExpandLess /> : <ExpandMore />}
      //     </ListItemButton>
      //     <Collapse in={open} timeout="auto" unmountOnExit>
      //       <List component="div" disablePadding>
      //         <ListItemButton sx={{ pl: 4 }}>
      //           <ListItemIcon>
      //             <Checkbox checked />
      //           </ListItemIcon>
      //           <ListItemText primary="Dungeon 1" />
      //         </ListItemButton>
      //       </List>
      //     </Collapse>
      //   </List>
    );
  });
};

export default SeasonRace;
