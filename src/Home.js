import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



//codes start here
//codes start here 1 2 3
const drawerWidthL=300;

const useStyles=makeStyles((theme)=>({
    root:{
        display:'flex',
    },
    appBar:{
      transition:theme.transitions.create(['margin','width'],{
          easing:theme.transitions.easing.sharp,
          duration:theme.transitions.duration.leavingScreen,
      }),
    },
   appBarShift:{
       width:`calc(100%-${drawerWidthL}px)`,
       marginLeft:drawerWidthL,
       transition: theme.transitions.create(['margin','width'],{
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
       }),
   },
    menuButton:{
        marginRight:theme.spacing(2),
    },
    hide:{
        display:'none',
    },
    drawer:{
        width:drawerWidthL,
        flexShrink:0,
    },
    drawerPaper:{
        width:drawerWidthL,
    },
    drawerHeader:{
        display:'flex',
        alignItems:'centre',
        padding:theme.spacing(0,1),
        ...theme.mixins.toolbar,
        justifyContent:'flex-end',
    },
    content:{
        flexGrow:1,
        padding:theme.transitions.create('marin',{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen,
        }),
        marginLeft:-drawerWidthL,
    },
    contentShift:{
        trsnsation:theme.transitions.create('margin',{
         easing: theme.transitions.easing.easeOut,
         duration:theme.transitions.duration.entrigScreen,
        }),
        marginLeft:0,
    },
    formControl: {
        margin: theme.spacing(0),
      },
    
    formControlReport:{
        margin:theme.spacing(1),
        minWidth:120,
    },
    formControlOrder:{
        margin:theme.spacing(1),
        minWidth:120,
    },
    paper:{
        display:'flex',
        flexWrap:'wrap',
        '& > *':{
            margin:theme.spacing(1),
            width:theme.spacing(145),
            height:theme.spacing(8),
            marginLeft:theme.spacing(12),
            marginRight:theme.spacing(12),
        },
    },
  
}));
export default function PersistentDrawerLeft(){
    const classes=useStyles();
    const theme=useTheme();
    const [selectedDateFrom,setSelectedDateFrom]=React.useState(new Date());
    const [selectedDateTo,setSelectedDateTo]=React.useState(new Date());
    const [order,setOrder]=React.useState('');
    const [state,setState]=React.useState({
        international:false,
        national:false,
        approved:false,
        pendingApproval:false,
        disapproved:false,
        sciIndexed:false,
        scopusIndexed:false,
        googleScholar: false,
        ugcListed:false,
        pubmedIndexed:false,
        mmuAffiliation:false,
        mmuStudentWork:false,
        afterJoiningMMU:false,
        showDetail:false
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const [publications,setPublications]=React.useState('');
    const [open,setOpen]=React.useState(false);
    const handleDateChangeFrom=(date)=>{
        setSelectedDateFrom(date);
    };
    const handleDateChangeTo=(date)=>{
        setSelectedDateTo(date);
    };
    const handleChangeDetails = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const handleChangeReport=(event)=>{
        setPublications(event.target.value);
    };
    const handleChangeOrder=(event)=>{
        setOrder(event.target.value);
    };
    const handleDrawerOpen=()=>{
        setOpen(true);
    };
    const handleDrawerClose=()=>{
        setOpen(false);
    };
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar 
            position="fixed"
            className={clsx(classes.appBar,{
                [classes.appBarShift]:open,
            })}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton,open && classes.hide)}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Home
                </Typography>
            </Toolbar>
            </AppBar>
            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper:classes.drawerPaper,
            }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction==='ltr'?<ChevronLeftIcon/>:<ChevronRightIcon/>}
                    </IconButton>
                    {/* <h2><strong>Actions</strong></h2> */}
                </div>
                <Divider/>
                <List>
                  <ListItem>
                      <ListItemIcon>
                        <strong>SHORT BY DATE</strong>
                       
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="relative">
                                <KeyboardDatePicker
                                margin="2%"
                                id="date-picker-dialog"
                                label="From"
                                format="MM/dd/yyyy"
                                value={selectedDateFrom}
                                onChange={handleDateChangeFrom}
                                KeyboardButtonProps={{
                                    'aria-label':'change date',
                                }}/>
                            </Grid>
                        </MuiPickersUtilsProvider>
                       
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="relative">
                                <KeyboardDatePicker
                                margin="2%"
                                id="date-picker-dialog"
                                label="To"
                                format="MM/dd/yyyy"
                                value={selectedDateTo}
                                onChange={handleDateChangeTo}
                                KeyboardButtonProps={{
                                    'aria-label':'change date',
                                }}/>
                            </Grid>
                        </MuiPickersUtilsProvider>
                       
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemIcon>
                        <strong>JOURNAL</strong>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                        <FormGroup row>
                        <FormControlLabel control={
                            <Checkbox
                            checked={state.international}
                            onChange={handleChange}
                            name="international"
                            color="primary"
                            />     
                        }
                        label="International"
                        />
                        <FormControlLabel control={
                            <Checkbox
                            checked={state.national}
                            onChange={handleChange}
                            name="national"
                            color="primary"
                            />     
                        }
                        label="National"
                        />
                        </FormGroup>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemIcon>
                      <strong>APPROVED STATUS</strong>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <FormControl component="fieldset" className={classes.formControl}>
                          <FormGroup>
                          <FormControlLabel control={
                            <Checkbox
                            checked={state.approved}
                            onChange={handleChange}
                            name="approved"
                            color="primary"
                            />     
                        }
                        label="Approved"
                        />
                         <FormControlLabel control={
                            <Checkbox
                            checked={state.pendingApproval}
                            onChange={handleChange}
                            name="pendingApproval"
                            color="primary"
                            />     
                        }
                        label="Pending Approval"
                        />
                         <FormControlLabel control={
                            <Checkbox
                            checked={state.disapproved}
                            onChange={handleChange}
                            name="disapproved"
                            color="primary"
                            />     
                        }
                        label="Disapproved"
                        />
                          </FormGroup>
                          </FormControl>
                          </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemIcon>
                        <strong>SHORT BY INDEX</strong>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <FormControl component="fieldset" className={classes.formControl}>
                          <FormGroup>
                          <FormControlLabel control={
                            <Checkbox
                            checked={state.sciIndexed}
                            onChange={handleChange}
                            name="sciIndexed"
                            color="primary"
                            />     
                        }
                        label="SCI Indexed"
                        />
                         <FormControlLabel control={
                            <Checkbox
                            checked={state.scopusIndexed}
                            onChange={handleChange}
                            name="scopusIndexed"
                            color="primary"
                            />     
                        }
                        label="Scopus Indexed"
                        />
                         <FormControlLabel control={
                            <Checkbox
                            checked={state.googleScholar}
                            onChange={handleChange}
                            name="googleScholar"
                            color="primary"
                            />     
                        }
                        label="Google Scholar"
                        />
                        <FormControlLabel control={
                            <Checkbox
                            checked={state.ugcListed}
                            onChange={handleChange}
                            name="ugcListed"
                            color="primary"
                            />     
                        }
                        label="UGC Listed"
                        />
                        <FormControlLabel control={
                            <Checkbox
                            checked={state.pubmedIndexed}
                            onChange={handleChange}
                            name="pubmedIndexed"
                            color="primary"
                            />     
                        }
                        label="PubMed Indexed"
                        />
                          </FormGroup>
                          </FormControl>
                          </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <Divider/>
                  <ListItem>
                      <ListItemIcon>
                        <strong>AFFILIATION</strong>
                       
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <FormControl component="fieldset" className={classes.formControl}>
                              <FormGroup>
                                  <FormControlLabel control={
                                      <Checkbox
                                      checked={state.mmuAffiliation}
                                      onChange={handleChange}
                                      name="mmuAffiliation"
                                      color="primary"
                                      />
                                  }
                                  label="MMU Affiliation"
                                  />
                                  <FormControlLabel control={
                                      <Checkbox
                                      checked={state.mmuStudentWork}
                                      onChange={handleChange}
                                      name="mmuStudentWork"
                                      color="primary"
                                      />
                                  }
                                  label="MMU Student Work"
                                  />
                                  <FormControlLabel control={
                                      <Checkbox
                                      checked={state.afterJoiningMMU}
                                      onChange={handleChange}
                                      name="afterJoiningMMU"
                                      color="primary"
                                      />
                                  }
                                  label="After Joining MMU"
                                  />
                              </FormGroup>
                          </FormControl>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <strong>Report Type</strong>
                        <ListItemText/>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FormControl className={classes.formControlReport}>
                            <InputLabel id="publications-select-label">Reports</InputLabel>
                            <Select
                            labelId="publications-select-label"
                            id="publications-select"
                            value={publications}
                            onChange={handleChangeReport}
                            >
                                    <MenuItem value={10}>One</MenuItem>
                                    <MenuItem value={20}>Two</MenuItem>
                                    <MenuItem value={30}>Three</MenuItem>
                            </Select>
                        </FormControl>
                        <ListItemText/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <strong>DISPLAY</strong>
                        <ListItemText/>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FormControl className={classes.formControlOrder}>
                            <InputLabel id="order-select-label">Order by Year</InputLabel>
                            <Select
                            labelId="order-select-label"
                            id="order-select"
                            value={order}
                            onChange={handleChangeOrder}
                            >
                                    <MenuItem value={10}>One</MenuItem>
                                    <MenuItem value={20}>Two</MenuItem>
                                    <MenuItem value={30}>Three</MenuItem>
                            </Select>
                        </FormControl>
                        <ListItemText/>
                    </ListItemIcon>
                </ListItem>
                <ListItem>
                      <ListItemIcon>
                        <FormGroup row>
                        <FormControlLabel control={
                            <Checkbox
                            checked={state.showDetail}
                            onChange={handleChangeDetails}
                            name="showDetail"
                            color="primary"
                            />     
                        }
                        label="Show Detail"
                        />
                        </FormGroup>
                      </ListItemIcon>
                      <ListItemText/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                        <Button variant="contained" color="primary">Update Scopus Citation</Button>
                        <ListItemText/>
                    </ListItemIcon>
                </ListItem>
                </List>
                </Drawer>
                <main
                className={clsx(classes.content,{
                    [classes.contentSshift]:open,
                })}> 
                    <div className={classes.drawerHeader}/>
                    <Typography pagaraph>
                    <div className={classes.paper}>
                            <Paper elevation={3}>
                                Publications in Journal (Approved Publications) of the Faculty Dr. AMIT KUMAR BINDAL of Computer SC and Engineering Department, MM Engineering College, MM(Deemed to be University),Mullana upto 2021
                            </Paper>
                            </div>
                    </Typography>
                    </main>
        </div>
    );
}
