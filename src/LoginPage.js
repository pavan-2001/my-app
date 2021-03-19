import React, {useState, Fragment, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import logo from './Maharishi-Markandeshwar-University.png';

const loginOptions = [
    'Student', 
    'Faculty', 
    'HOD', 
    'Admin'
];

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1,
        margin : 'auto',
    }, 
    gridContainer : {
        justifyContent : 'center', 
        flex : 1, 
    },  
    paper : {
        padding : theme.spacing(1), 
        textAlign : 'center', 
        margin : 'auto',
        background : 'linear-gradient(#ff4081,#f50057 30%,#c51162 90%)', 
        color : 'white', 
        boxShadow : '5px 5px 15px 5px #880e4f',
        borderRadius : '3%', 
        marginTop : theme.spacing(-22)
    }, 
    loginPortal : {
        fontSize : 35, 
        marginTop : '6%', 
        marginBottom : '5%'
    }, 
    textField : {
        width : '60%',
        borderColor : 'white', 
        color : 'white', 
        marginBottom : theme.spacing(3),
        '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
        },
    },
    button : {
        backgroundColor : '#ad1457', 
        width : '60%', 
        variant : 'outlined',
        '&:hover' : {
            backgroundColor : '#dd33fa'
        },
        color : 'white', 
    },
    signUp : {
        margin : 'auto', 
        marginLeft : theme.spacing(2),
        marginTop : theme.spacing(2),
        fontSize : 17, 
    },
    spam : {
        color : 'white', 
        cursor : 'pointer',
    }, 
    errorMsg : {
        color : 'white',
        margin : 'auto', 
        marginTop : theme.spacing(5)
    }, 
    box : {
        margin : 'auto', 
        marginTop : theme.spacing(7), 
    }, 
    forgotPassword : {
        cursor : 'pointer', 
        margin : 'auto',  
        marginTop : theme.spacing(2),
        fontSize : 17
    }, 
    divider : {
        color : 'white', 
        margin : 'auto', 
        marginTop : theme.spacing(10), 
        width : '75%', 
        backgroundColor : 'white', 
    }, 
    footer : {
        margin : 'auto', 
        marginLeft : theme.spacing(47), 
        color : 'white', 
        marginTop : theme.spacing(2),
        marginBottom : theme.spacing(4), 
    }, 
    logo : {
        width : '10%', 
        margin : 'auto',         
    }
}));


export default function LoginPortal() {
    const [loginType, setLoginType] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const styles = useStyles();
    const [passwordIcon, setPasswordIcon] = useState(<VisibilityOffIcon/>);
    const [passwordType, setPasswordType] = useState('password');
    const [roleLabel, setRoleLabel] = useState('ID');
    const [error, setError] = useState('');

    const handlePasswordIcon = () => {
        if(passwordType === 'password') {
            setPasswordIcon(<VisibilityIcon/>);
            setPasswordType('text');
        }
        if(passwordType === 'text') {
            setPasswordIcon(<VisibilityOffIcon/>);
            setPasswordType('password');
        }
    }

    useEffect(() => {
        if(loginType === 'Student')
        {
            setRoleLabel('Roll No.');
        }
        else {
            setRoleLabel('Employee ID');
        }
    },[loginType,setRoleLabel]);
    
    return (
        <div className={styles.root}>
        <a href='https://www.mmumullana.org/overview/'><img className={styles.logo} src={logo} /></a>
            <Grid container className={styles.gridContainer}>
                <Grid item xs={5}>
                    <Paper className={styles.paper}>
                        <p className={styles.loginPortal} ><strong>Login Portal</strong></p>
                        <p className={styles.errorMsg} >{error}</p>
                        <div className={styles.box} >
                            <TextField 
                            select
                            label = 'Login Type' 
                            value = {loginType}
                            onChange = {(e) => setLoginType(e.target.value)}
                            variant = 'outlined'
                            className={styles.textField}>
                            {loginOptions.map((option) => (
                                <MenuItem key={option} value={option} >{option}</MenuItem>
                            ))}
                            </TextField>
                            <TextField
                            label = {roleLabel}
                            className = {styles.textField}
                            variant = 'outlined'
                            type = 'text'
                            value={role}
                            onChange={(e) => (setRole(e.target.value))}/>
                            <TextField
                                label = 'Password'
                                type={passwordType}
                                className={styles.textField}
                                variant = 'outlined'
                                value = {password}
                                onChange = {(e) => (setPassword(e.target.value))}
                                InputProps={{endAdornment : <IconButton onClick ={handlePasswordIcon} >{passwordIcon}</IconButton>}}
                            />
                            <Button 
                            variant = 'container'
                            className={styles.button}
                            startIcon = {<AccountCircleIcon/>}>Sign In</Button>
                        </div>
                        <p className={styles.forgotPassword} >Forgot Password</p>
                        <p className={styles.signUp} >Don't Have an account ? <spam className = {styles.spam} ><Link to='Sign UP' >Sign UP</Link></spam></p>
                    </Paper>
                </Grid>
            </Grid>
            <Divider className={styles.divider} />
            <p className={styles.footer} > &copy; 2021 MAHARISHI MARKANDESHWAR UNIVERSITY, AMBALA (HARYANA).ALL RIGHTS RESERVED.<br/>DEVELOPERS - PAVAN KUMAR , SANSKAR RAWAT , UDAY PANDIT , KAPIL KADIAN (B-TECH, CSE)<br/>BATCH :  2019 - 2023</p>
        </div>
    );
}