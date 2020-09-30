import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  //styles go here
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function App() {
  const [deckNum, setDeckNum] = useState(1);
  const classes = useStyles();

  const handleSubmit = (event) => {
    window.alert('submitted!');
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        Placeholder!
      </Paper>
    </Container>
  );
}

export default App;
