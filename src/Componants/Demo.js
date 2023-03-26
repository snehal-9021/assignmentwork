import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailIcon from '@mui/icons-material/Mail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PostAddIcon from '@mui/icons-material/PostAdd';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }} style={{textAlign:"left"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
       
        <Divider />
        <List>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Home
        </Typography>
          {['Music','Crypto', 'Listing'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {index % 7=== 0 ? <GraphicEqIcon />: <ListAltIcon /> &&  index % 2 === 0 ?<SupportAgentIcon/> : <ListAltIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['crm','intranet','eCommerce', 'News'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                {index % 7=== 0 ? <  NotInterestedRoundedIcon/>: < NewspaperIcon /> &&  index % 2 === 0 ?< ShoppingCartIcon/> : <ListAltIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Apis
        </Typography>
          {['Chat', 'Contacts', 'mail'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 3 === 0 ? <ChatIcon/> : <ContactsIcon/>&& index % 2 === 0 ? <MailIcon />: <ContactsIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       card
        </Typography>
          {[ 'Widgets', 'Metrics'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                   {index % 2 === 0 ? <WidgetsIcon/> : <EqualizerIcon/> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          component
        </Typography>
          {[ 'Material Ui'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PostAddIcon/>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Extensions
        </Typography>
          {[ 'editors','drag n drop'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <EditIcon /> : <DragIndicatorIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    
    </Box>
  );
}