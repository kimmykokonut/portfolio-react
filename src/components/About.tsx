//import hawaii from './../assets/images/hawaii.jpg';
import mp from './../assets/images/peru.jpg';
import { Typography, Grid, CssBaseline, Paper } from '@mui/material';

function About() {
  const profileStyle = {
    padding: '3%',
    backgroundImage: `url(${mp})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ccccc',
    height: '100vh',
    backgroundSize: 'cover',
    color: 'black',
    filter: 'grayscale(30%)'
  }
  return (
    <div style={profileStyle}>
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={12}
        >
          <Typography variant='h2'>I am a seeker, a life-long leaner, a curious person with a desire to connect and understand</Typography>
        </Grid>
        <Paper elevation={5}>
          <Paper>
            <Typography variant="h5">Originally from the East Coast with strong opinions on bagels and pizza, I have adapted to the Pacific Northwest as my life journey has filled my heart and brain with the beauty of nature, the complexity of language (minor in Spanish, currently learning Italian) and the joy and challenge of change while bringing past experiences into my new chapter in the tech world in Portland, Oregon. </Typography>
            <Typography variant="h5">I am a passionate and organized team player with track record of thriving both independently and collaboratively. Currently advancing my skills in web and mobile development through a comprehensive full-time full-stack software engineering bootcamp in-person at Epicodus. With a background in natural resources management and culinary arts, I bring a unique perspective to problem-solving and attention to detail. Excited to leverage my adaptable range of abilities and newly acquired coding skills in a software development role, where I can contribute to innovative solutions.</Typography>
            <Typography variant="h5">When I am not coding, you can look for me in the forest: foraging for mushrooms, hiking to alpine lakes, or nordic skiing depending on the season</Typography>
          </Paper>
        </Paper>
      </Grid>
    </div>
  )
}
export default About;