import React, {Component} from 'react';
import List from "./components/List";
import Form from "./components/Form";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
const styles= theme=>({
  root:{
    flexGrow:1,
  },
  paper:{
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class App extends Component{
  render(){
    const {classes}=this.props;
    return(
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h2>Add a new article</h2>
          <Form />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h2>Articles</h2>
          <List />
        </Paper> 
      </Grid>
    </Grid>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
