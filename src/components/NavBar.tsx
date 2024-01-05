import { Link } from "react-router-dom";
import { ListItemButton, List, ListItemIcon, ListItemText, IconButton, Drawer, Grid } from '@mui/material';
import { Home, EmojiPeople, Laptop, Psychology } from '@mui/icons-material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { teal } from '@mui/material/colors';

const drawerWidth = 150;

function NavBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{
          display: 'flex',
          width: '100%'}}>
          <IconButton aria-label="https://github.com/kimmykokonut/" onClick={() => window.open('https://github.com/kimmykokonut/')}>
            <GitHubIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="https://www.linkedin.com/in/robinson-kim/" onClick={() => window.open('https://www.linkedin.com/in/robinson-kim/')}>
            <LinkedInIcon fontSize="large" />
          </IconButton>

          <IconButton aria-label="mailto: kimmykokonut@gmail.com" onClick={() => window.open('mailto: kimmykokonut@gmail.com')}>
            <MailOutlineIcon fontSize="large" />
          </IconButton>

          <Stack sx={{ marginLeft: "auto" }} direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: teal[900] }}>KR</Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton component={Link} to="/" selected>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to="/about">
              <ListItemIcon>
                <EmojiPeople />
                <ListItemText primary="about me" />
              </ListItemIcon>
            </ListItemButton >

            <ListItemButton component={Link} to="/projects">
              <ListItemIcon>
                <Laptop />
                <ListItemText primary="projects" />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to="/skills">
              <ListItemIcon>
                <Psychology />
                <ListItemText primary="skills" />
              </ListItemIcon>
            </ListItemButton>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  )
}
export default NavBar;