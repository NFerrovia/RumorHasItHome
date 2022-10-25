import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../css/Events.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Events = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpand2Click = () => {
    setExpanded2(!expanded2);
  };

  return (
    <>
      <div className="events-container">
        {/* Card #1 */}

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardHeader
            // Avatar Button

            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }

            // settings button

            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }

            title="Call of Cthulu TTRPG"
            subheader="Ongoing"
          />
          <CardMedia
            component="img"
            height="400"
            image="https://howwerollpodcast.com/wp-content/uploads/2019/09/lovecraft-2-707x1024.jpg"
            alt="Blackwater Creek"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Dispatched to resolve the disappearance of Professor Roades and
              his wife, who have gone missing after a Miskatonic University
              field trip, the investigators soon find themselves embroiled in a
              dark tale of small-town corruption and degeneration....
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* Favourites Button */}

            {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}

            {/* Share Button */}

            {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Call of Cthulhu is Chaosium's tabletop roleplaying game of
                mystery and horror, where ordinary people delve into weird
                events and lore, and confront the terrifying and alien forces of
                the Cthulhu Mythos.
              </Typography>
              <Typography paragraph>
                Sessions are usually around 2-3 hours long, and are done through
                discord.
              </Typography>
              <Typography>
                Contact Taco for details on when our next session will be.
                Discord: Hunter#3911
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        {/* Card #2 */}

        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardHeader
            // Avatar Button

            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     R
            //   </Avatar>
            // }
            // settings button

            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }

            title="Boardgamearena Game Group"
            subheader="Ongoing"
          />
          <CardMedia
            className="cardMedia"
            component="img"
            height="400"
            image="http://x.boardgamearena.net/data/newsimg/logo2016.png"
            alt="Blackwater Creek"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Mordern turn-based boardgame matches on boardgamearena.com!
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* Favourites Button */}

            {/* <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton> */}

            {/* Share Button */}

            {/* <IconButton aria-label="share">
        <ShareIcon />
      </IconButton> */}

            <ExpandMore
              expand={expanded2}
              onClick={handleExpand2Click}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Some of us really love board games and we like playing them
                online, join us for some turn-based games!
              </Typography>
              <Typography paragraph>
                We usually play multiple games at the same time, cadence is slow
                and carefree at around 1-2 moves per day.
              </Typography>
              <Typography>
                Contact Slerne for details on when our next session will be.
                Discord: Slerne#9837
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};
export default Events;
