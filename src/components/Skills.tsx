import { Card, Grid, List, ListItem, Typography } from '@mui/material';

function Skills() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
        <Card sx={{ backgroundColor: '#f5f5f5'}}>
          <List>
              <Typography variant='h4' gutterBottom>Technical Skills
              </Typography>
            <ListItem>
              <Typography variant="body1">JavaScript</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">JSX</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Typescript</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Test Driven Development (TDD)</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Git</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">React.js</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Redux.js</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Node.js</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Webpack</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Bootstrap</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">CSS</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Html</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Firebase and Firestore Database</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Agile</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Scrum</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">Pair Programming</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">API</Typography>
            </ListItem>
          </List>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: '#f5f5f5' }}>
          <List>
            <Typography variant='h4' gutterBottom>Soft Skills</Typography>
            <ListItem><Typography variant="body1">Communication</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Problem Solving</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Adaptable</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Time Management</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Attention to detail</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Empathetic</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Team collaborator</Typography>
            </ListItem>
            <ListItem><Typography variant="body1">Continuous learner</Typography>
            </ListItem>
          </List>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ backgroundColor: '#f5f5f5' }}>
          <List>
            <Typography variant='h4' gutterBottom>Skills to come...</Typography>
            <ListItem>
              <Typography variant="body1">C#</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">.NET Framework</Typography>
            </ListItem>
          </List>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default Skills;