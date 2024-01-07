import nps from './../assets/images/park.png';
import praline from './../assets/images/praline.png';
import game from './../assets/images/game.png';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <div>
      <Typography variant="h2">Projects</Typography>
      <Typography variant="h5">an evolving list of projects as I learn and add to my skillset</Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        >
        <Grid item xs={12} sm={12} md={4}>
          <Card raised 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              height: '60vh', 
              justifyContent: 'space-between',
              border: "1px solid #000",
              marginBotton: "2rem",
              marginTop: "1rem" }}>
            <CardContent>
              <Typography variant='h4'>National Park Finder</Typography>
              <Typography variant="h6" >A pair project to explore API calls and MUI in React</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="400"
              sx={{ padding: "1em 1em 0 1 em", objectFit: "contain" }}
              image={nps}
            />
            <CardActions>
              <IconButton aria-label="https://github.com/kimmykokonut/national-park-api" onClick={() => window.open('https://github.com/kimmykokonut/national-park-api')}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <Typography variant='h6'> React | Typescript | Material UI | Vite</Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card raised 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              height: '60vh', 
              justifyContent: 'space-between', 
              border: "1px solid #000",
              marginBotton: "2rem",
              marginTop: "1rem" }}>
            <CardContent>
              <Typography variant='h4'>Inventory Tracker</Typography>
              <Typography variant="h6" >Independent project that tracks inventory with CRUD functionality</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="400"
              sx={{
                padding: "1em 1em 0 1 em", objectFit: "contain"}}
              image={praline}
            />
            <CardActions>
              <IconButton aria-label="https://kimmykokonut.github.io/inventory-tracker-cra-redux/" onClick={() => window.open('https://kimmykokonut.github.io/inventory-tracker-cra-redux/')}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <Typography variant='h6'> React | Javascript | Bootstrap | Redux</Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Card raised 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              height: '60vh', 
              justifyContent: 'space-between', 
              border: "1px solid #000",
              marginBotton: "2rem",
              marginTop: "1rem" }}>
            <CardContent>
              <Typography variant='h4'>Not Wordle</Typography>
              <Typography variant="h6" >A pair project to learn React and refactor class to functional components and add Redux to manage state</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="400"
              sx={{
                padding: "1em 1em 0 1 em", objectFit: "contain" }}
              image={game}
            />
            <CardActions>
              <IconButton aria-label="https://kimmykokonut.github.io/word-puzzle/" onClick={() => window.open('https://kimmykokonut.github.io/word-puzzle/')}>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <Typography variant='h6'>React | Javascript | CSS | Redux</Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div >
  )
}
export default Projects;