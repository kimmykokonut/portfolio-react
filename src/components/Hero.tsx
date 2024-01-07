import { CssBaseline, Container, Typography } from '@mui/material';
import bridge from './../assets/images/final.jpg';

function Hero() {
  const heroStyle = {
    backgroundImage: `url(${bridge})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ccccc',
    backgroundSize: 'cover',
    height: '100vh',
    color: 'black',
    filter: 'grayscale(50%)'
  }
  return (
    <div style={heroStyle}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h4" mt={1} sx={{ padding: '1rem' }}>Ciao! My name is</Typography>
        <Typography variant="h1" component="h1">Kim Robinson</Typography>
        <Typography variant="h5">full-stack developer | software adventurer | forager</Typography>
        <hr />
        <Typography variant="h5">Javascript | React | Html | CSS | Bootstrap | MUI | Git</Typography>
        <Typography variant="h6">Learning: C# | .net</Typography>
      </Container>
    </div>
  )
}
export default Hero;