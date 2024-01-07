import mp from './../assets/images/peru.jpg';
import { Typography, Grid, CssBaseline, Paper, Box } from '@mui/material';

function About() {
  const profileStyle = {
    padding: '3%',
    paddingBottom: '3rem',
    backgroundImage: `url(${mp})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ccccc',
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
          <Typography variant='h2'>I am a seeker and a life-long learner, with a desire to connect and understand what is around me.
          </Typography>
        </Grid>
        <Paper 
        elevation={5} 
        sx={{ padding: '1rem', margin: '2rem', backgroundColor: '#bcc2be', opacity: '0.8' }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h4" gutterBottom>Originally from the East Coast with strong opinions on bagels and pizza, I have adapted to the Pacific Northwest as my life journey has filled my heart and brain with the beauty of nature, the complexity of language learning and the joy and challenge of the nature of change while bringing my past experiences into this new chapter as part of the tech world in Portland, Oregon.
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography variant="h5" gutterBottom>I am a passionate and organized team player with track record of thriving both independently and collaboratively. I am currently advancing my skills in web and mobile development through a comprehensive full-time full-stack software engineering bootcamp in-person at Epicodus. With a background in natural resources management and culinary arts, I bring a unique perspective to problem-solving and attention to detail. Excited to leverage my adaptable range of abilities and newly acquired coding skills in a software development role, where I can contribute to innovative solutions.
            </Typography>
          </Box>
          <Box sx={{ marginBottom: '1rem' }}>
            <Typography variant="h6">When I am not coding, you can look for me in the forest: foraging for mushrooms, hiking to alpine lakes, or nordic skiing.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </div>
  )
}
export default About;