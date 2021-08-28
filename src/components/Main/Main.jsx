import React, { useContext } from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import {ExpenseTrackerContext} from '../../context/context';


import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';
import InfoCard from '../InfoCard';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    // InfoCard is a hint for saying somthing.

    return (
        <Card className = {classes.root}>
             <CardHeader title = "Expense Tracker"
              subheader={<Typography className={classes.subColor}>by Sachit Kalia</Typography>} style = {{'backgroundColor': '#6a6ad2', 'color': 'white'}}/>
             <CardContent>
                 <Typography align="center" variant = "h5">Total Balance ₹{balance}</Typography>
                 <Typography variant = "subtitle2" style = {{lineHeight: '1.5em', marginTop: '20px'}}> 
                       <InfoCard/>  
                 </Typography>
                 <Divider className = {classes.divider}/>
                 <Form/>
             </CardContent>
             <CardContent className = {classes.cardContent}>
                    <Grid container spacing = {2}>
                        <Grid item xs = {12}>
                            <List/>
                        </Grid>
                    </Grid>
             </CardContent>
        </Card>
    )
}

export default Main
