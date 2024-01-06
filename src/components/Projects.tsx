import nps from './../assets/images/park.png';
import praline from './../assets/images/praline.png';
import game from './../assets/images/game.png';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  
  return (
    <div>
        <Typography variant="h2">Projects</Typography>
        <Typography variant="h5">an evolving list of projects as I learn and add to my skillset</Typography>

      <Card variant="outlined" sx={{ maxWidth: '100vw', m: '1rem', height: 'auto' }}>
        <CardContent>
        <Typography variant='h4'>National Park Finder</Typography>
      <Typography variant="h6" >A pair project to explore API calls and MUI in React</Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 500 }}
          image={nps}
        />
        <CardActions>
          <IconButton aria-label="https://github.com/kimmykokonut/national-park-api" onClick={() => window.open('https://github.com/kimmykokonut/national-park-api')}>
            <GitHubIcon fontSize="large" />
          </IconButton>
          <Typography variant='h6'> React | Typescript | Material UI | Vite</Typography>
      {/* <a href="https://github.com/kimmykokonut/national-park-api">Github Link</a> */}
        </CardActions>
        </Card>

      <Card variant="outlined" sx={{ maxWidth: '100vw', m: '1rem', height: 'auto' }}>
        <CardContent>
          <Typography variant='h4'>Inventory Tracker</Typography>
          <Typography variant="h6" >Independent project that tracks inventory with CRUD functionality</Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 500 }}
          image={praline}
        />
        <CardActions>
          <IconButton aria-label="https://kimmykokonut.github.io/inventory-tracker-cra-redux/" onClick={() => window.open('https://kimmykokonut.github.io/inventory-tracker-cra-redux/')}>
            <GitHubIcon fontSize="large" />
          </IconButton>
          <Typography variant='h6'> React | Javascript | Bootstrap | Redux</Typography>
        </CardActions>
      </Card>


      <Card variant="outlined" sx={{ maxWidth: '100vw', m: '1rem', height: 'auto' }}>
        <CardContent>
          <Typography variant='h4'>Not Wordle</Typography>
          <Typography variant="h6" >A pair project to learn React and refactor class to functional components and add Redux to manage state</Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 500 }}
          image={game}
        />
        <CardActions>
          <IconButton aria-label="https://kimmykokonut.github.io/word-puzzle/" onClick={() => window.open('https://kimmykokonut.github.io/word-puzzle/')}>
            <GitHubIcon fontSize="large" />
          </IconButton>
          <Typography variant='h6'>React | Javascript | CSS | Redux</Typography>
        </CardActions>
      </Card>
    </div >
  )
}
export default Projects;