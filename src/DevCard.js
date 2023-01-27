import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconMenu from './IconMenu'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
const DevCard = ({devname}) => {
  return (
    <Card elevation="8" sx={{ maxWidth: 325, width:'100%', margin:2}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography sx={{flexGrow:1}} variant="h6">{devname}</Typography>
          <IconButton
            color="inherit"
            >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            color="inherit"
            >
            <PauseIcon />
          </IconButton>
          <IconButton
            color="inherit"
            >
            <DoubleArrowIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <CardContent>
        <IconMenu />

      </CardContent>
    </Card>
  )
}
export default DevCard
