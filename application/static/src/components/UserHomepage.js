import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  body: {
    flexGrow: 1,
    position: 'relative',
    top: '10%',
    [theme.breakpoints.up('sm')]: {
      top: '8%',
    },
    padding: '2%',
    maxHeight: '80%',
  },
  left: {
    width: '40%',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  card: {
    maxWidth: '90%',
  },
  profilePicture: {
    padding: '5%',
    borderRadius: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rewards: {
    marginBottom: '4%',
  },
  border: {
    borderRadius: '30px',
  }
});

class UserHomepage extends Component {
  
  render() {
    const { userData, classes } = this.props;
    return (
      <div className={ classes.body }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 } sm={ 6 }>
            <Paper className={ classes.paper, classes.border }>
              <Card className={ classes.border }>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Profile Picture"
                    image="https://avatars2.githubusercontent.com/u/2894642?s=400&v=4"
                    title="Profile Picture"
                    className={ classes.profilePicture }
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      { userData.username }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { userData.title }
                    </Typography> 
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <div>
              <Card className={ classes.rewards }>  
                <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                    Earned Rewards
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div>
              <Card>  
                <CardActionArea>
                <CardContent>
                  <Typography variant="h6">
                    Job Summary
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </div> 
          </Grid>
        </Grid>  
      </div>
    )
  }
}

export default withStyles(styles)(UserHomepage);
