import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SyncIcon from '@mui/icons-material/Sync';

const compList = [
  "credit",
  "credit-fix",
  "credit-collector",
  "credit-granulator",
  "credit-insight",
  "contex",
  "datadepot"
]

export default function IconMenu() {
  return (
    // <Paper sx={{ width: '100%', backgroundColor:"gray" }} >
      <MenuList disablePadding>
        {compList.map((comp, i) => (
          <MenuItem key={i}>
            <ListItemIcon>
              <SyncIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText sx={{textAlign:'left'}}>{comp}</ListItemText>
            <Typography variant="body2" color="text.secondary">
              
            </Typography>
          </MenuItem>
        ))}

      </MenuList>
    // </Paper>
  );
}
