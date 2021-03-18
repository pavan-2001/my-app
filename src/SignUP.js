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

const loginOptions = [
    'Student', 
    'Faculty', 
    'HOD', 
    'Admin'
];

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1, 
        marginTop : '5%', 
    }, 
    gridContainer : {
        justifyContent : 'center', 
        flex : 1, 
        marginTop : '2%'
    },  
    paper : {
        padding : theme.spacing(1), 
        textAlign : 'center', 
        margin : 'auto',
        background : 'linear-gradient(#ff4081,#f50057 30%,#c51162 90%)', 
        color : 'white', 
        boxShadow : '5px 5px 15px 5px #880e4f',
        borderRadius : '3%'
    }, 
    collageName: {
        fontSize : 35, 
        width : 'auto',   
        margin : ''  
    },
    loginPortal : {
        fontSize : 25, 
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
        marginTop : theme.spacing(2),
        marginLeft : theme.spacing(19),
        fontSize : 17, 
        margin : 'auto'
    },
    spam : {
        color : 'white', 
        cursor : 'pointer', 
    }, 
    errorMsg : {
        color : 'white',
        margin : 'auto', 
        marginTop : theme.spacing(2)
    }, 
    box : {
        margin : 'auto', 
        marginTop : theme.spacing(3), 
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
            <Grid container className={styles.gridContainer}>
                <Grid item xs={5}>
                    <Paper className={styles.paper}>
                        <p className={styles.collageName} ><strong>Maharishi Markandeshwar University</strong></p>
                        <p className={styles.loginPortal} >Sign UP Portal</p>
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
                            startIcon = {<AccountCircleIcon/>}>Sign UP</Button>
                        </div>
                        <p className={styles.signUp} >Have an account ? <spam to='Sign IN' className = {styles.spam} ><Link to='Sign IN' >Sign IN</Link></spam></p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}