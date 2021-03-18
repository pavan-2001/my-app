import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './MMU_Logo.jpg';

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1, 
    }, 
    gridContainer : {
        justifyContent : 'center', 
        flex : 1, 
        marginTop : '2%'
    },  

    paper : {
        heading : {
            fontSize : '100'
        },
        padding : theme.spacing(1), 
        textAlign : 'center', 
        margin : 'auto',
        backgroundColor : 'red', 
        color : 'white'
    }, 
    img: {
        marginLeft : '40%', 
        display: 'block',
        maxWidth: '15%',
        maxHeight: '50%',
      },
}));

export default function LoginPortal() {
    const [loginType, setLoginType] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <a href='https://www.mmumullana.org/overview/' >
                <img src={logo} className={styles.img}/>
            </a>
            <Grid container className={styles.gridContainer}>
                <Grid item xs={5}>
                    <Paper className={styles.paper}>
                        <h3 style={styles.paper.heading}><strong>Login Portal</strong></h3>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}