import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Breadcrumb } from 'app/components';
import { Box,Grid , Typography,
  Button,
  IconButton,
  Paper,
  Modal,
  FormControlLabel,
  Checkbox,
  CardContent,
  Rating,
  CardActions,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import makeStyles from '@emotion/styled'
import styled from '@emotion/styled';
import { GetApplicantUserDataRequest } from 'slice/applicant/profileUpdateSlice';


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '15px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));

const useStyles = makeStyles((theme) => ({
    body: {
      height: "inherit",
    },
    statusBlock: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
    },
    jobTileOuter: {
      padding: "30px",
      margin: "20px 0",
      boxSizing: "border-box",
      width: "100%",
    },
    popupDialog: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    avatar: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  }));

  

  
  const FilterPopup = (props) => {
    const classes = useStyles();
    const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
    return (
      <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
  
            padding: "50px",
            outline:"none",
            minwidth:"43%",
            height:"40%",
            margin: "103px 181px -4px 380px"
               
        
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            {/* <Grid container item alignItems="center">
              <Grid item xs={3}>
                Application Status
              </Grid>
              <Grid
                container
                item
                xs={9}
                justify="space-around"
                // alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rejected"
                        checked={searchOptions.status.rejected}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Rejected"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="applied"
                        checked={searchOptions.status.applied}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Applied"
                  />
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="shortlisted"
                        checked={searchOptions.status.shortlisted}
                        onChange={(event) => {
                          setSearchOptions({
                            ...searchOptions,
                            status: {
                              ...searchOptions.status,
                              [event.target.name]: event.target.checked,
                            },
                          });
                        }}
                      />
                    }
                    label="Shortlisted"
                  />
                </Grid>
              </Grid>
            </Grid> */}
            <Grid container item alignItems="center">
              <Grid item xs={3}>
                Sort
              </Grid>
              <Grid item container direction="row" xs={9}>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="name"
                      checked={searchOptions.sort["jobApplicant.name"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.name": {
                              ...searchOptions.sort["jobApplicant.name"],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="name"
                    />
                  </Grid>
                  <Grid item>
                    <label for="name">
                      <Typography>Name</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["jobApplicant.name"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.name": {
                              ...searchOptions.sort["jobApplicant.name"],
                              desc: !searchOptions.sort["jobApplicant.name"].desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["jobApplicant.name"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="jobTitle"
                      checked={searchOptions.sort["job.title"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "job.title": {
                              ...searchOptions.sort["job.title"],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="jobTitle"
                    />
                  </Grid>
                  <Grid item>
                    <label for="jobTitle">
                      <Typography>Job Title</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["job.title"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "job.title": {
                              ...searchOptions.sort["job.title"],
                              desc: !searchOptions.sort["job.title"].desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["job.title"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="dateOfJoining"
                      checked={searchOptions.sort.dateOfJoining.status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            dateOfJoining: {
                              ...searchOptions.sort.dateOfJoining,
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="dateOfJoining"
                    />
                  </Grid>
                  <Grid item>
                    <label for="dateOfJoining">
                      <Typography>Date of Joining</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort.dateOfJoining.status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            dateOfJoining: {
                              ...searchOptions.sort.dateOfJoining,
                              desc: !searchOptions.sort.dateOfJoining.desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort.dateOfJoining.desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={6}
                  justify="space-around"
                  alignItems="center"
                  style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
                >
                  <Grid item>
                    <Checkbox
                      name="rating"
                      checked={searchOptions.sort["jobApplicant.rating"].status}
                      onChange={(event) =>
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.rating": {
                              ...searchOptions.sort[["jobApplicant.rating"]],
                              status: event.target.checked,
                            },
                          },
                        })
                      }
                      id="rating"
                    />
                  </Grid>
                  <Grid item>
                    <label for="rating">
                      <Typography>Rating</Typography>
                    </label>
                  </Grid>
                  <Grid item>
                    <IconButton
                      disabled={!searchOptions.sort["jobApplicant.rating"].status}
                      onClick={() => {
                        setSearchOptions({
                          ...searchOptions,
                          sort: {
                            ...searchOptions.sort,
                            "jobApplicant.rating": {
                              ...searchOptions.sort["jobApplicant.rating"],
                              desc: !searchOptions.sort["jobApplicant.rating"]
                                .desc,
                            },
                          },
                        });
                      }}
                    >
                      {searchOptions.sort["jobApplicant.rating"].desc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
  
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px" }}
                onClick={() => getData()}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    );
  };
  
export const AcceptedApplicant = () => {

    const data =  useSelector((state) => state.profileApplicant.data)

    console.log(data)

    const dis = useDispatch();

    const[user,setUser] = useState('')

    useEffect(() => {
        setUser(data)
    },[])

    useEffect(() => {
        dis(GetApplicantUserDataRequest(user))
    },[user])


    
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchOptions, setSearchOptions] = useState({
      sort: {
        "jobApplicant.name": {
          status: false,
          desc: false,
        },
        "job.title": {
          status: false,
          desc: false,
        },
        dateOfJoining: {
          status: true,
          desc: true,
        },
        "jobApplicant.rating": {
          status: false,
          desc: false,
        },
      },
    });

    
  return (
    <>
    <Container >
         <Box style={{marginTop:"15px"}} className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Recruiter', path: '/recruiter/acceptedapplicant' }, { name: 'AcceptedApplicant' }]} />
      </Box>
      <Grid item >
        <Typography variant="h4" style={{display:'flex', justifyContent:'center'}}>Employees</Typography>
      </Grid>
      <Grid item style={{display:'flex', justifyContent:'center'}}> 
              <IconButton>
                <FilterListIcon onClick={() => setFilterOpen(true)} />
              </IconButton>
              <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        // getData={() => {        }}
        />
        </Grid>
      
           {
            <div>
            {data?.map((v) => {
              return (
                <Card sx={{ minWidth: 270, margin: '20px' }} >
                
                  <div style={{ display: 'flex', justifyContent: 'space-between',backgroundColor : "#E8E8E8", marginTop : "30px", width : "100%", borderRadius : "10px", }}>
                                     
                    <CardContent>
                    <div style={{display : "flex", gap : "20px"}}>
                    <div>
                    <Typography>
                        <AccountCircleIcon style={{fontSize : "140px" ,color : " rgb(182 178 178)"}} />
                      </Typography>
                    </div>
                    <div>
                      <Typography gutterBottom variant="h6" component="div">
                        {v.jobApplicant.name}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                      <Rating value={v.jobApplicant.rating !== -1? v.jobApplicant.rating : null}readOnly/>
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Job Title : {v.job.title}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Role : {v.job.jobType}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Applied On : {(new Date(v.job.deadline)).toLocaleDateString()}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                      SOP : {v.sop !== "" ? v.sop : "Not Submitted"}
                      </Typography>
                      </div>
                </div>
                     
                      </CardContent>
                <CardContent style={{ display: 'grid', margin: "20px"}}>
      <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{padding : "10px 75px",marginTop : "-15px"}}
              // onClick={() => getResume()}
            >
              Download Resume
            </Button>
          </Grid>
          <Grid item container xs style={{width : "280px"}}>
            
            <Button
              variant="contained"
              color="primary"
              style={{
                background: "#09BC8A",
                padding : "35px 110px"
              }}
              // onClick={() => {
              //   setOpenEndJob(true);
              // }}
            >
              End Job
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{padding : "10px 88px",marginBottom : "-15px"}}
              // onClick={() => {
              //   setOpen(true);
              // }}
            >
              Rate Applicant
            </Button>
          </Grid>
              
                </CardContent>
                  </div>
                      
                </Card>
            
            
            );
            })
          
          }   
          </div> 
        }  
         

      
    </Container>
    </>
  )
}
