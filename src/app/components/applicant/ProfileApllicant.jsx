import React from 'react'
import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import makeStyles from '@emotion/styled';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect } from 'react';
import { Breadcrumb } from '..';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
 
  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));
  
const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const ProfileApplicant = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

const useStyles = makeStyles((theme) => ({
    body: {
      height: "inherit",
    },
    popupDialog: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      // padding: "30px",
    },
  }));

const MultifieldInput = (props) => {
    const classes = useStyles();
    const { education, setEducation } = props;
  
    return (
      <>
        {education.map((obj, key) => (
          <Grid item container className={classes.inputBox} key={key}>
            <Grid item xs={6}   sx={{ mb: 3 }}>
              <TextField
                label={`Institution Name #${key + 1}`}
                value={education[key].institutionName}
                onChange={(event) => {
                  const newEdu = [...education];
                  newEdu[key].institutionName = event.target.value;
                  setEducation(newEdu);
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Start Year"
                value={obj.startYear}
                variant="outlined"
                type="number"
                onChange={(event) => {
                  const newEdu = [...education];
                  newEdu[key].startYear = event.target.value;
                  setEducation(newEdu);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="End Year"
                value={obj.endYear}
                variant="outlined"
                type="number"
                onChange={(event) => {
                  const newEdu = [...education];
                  newEdu[key].endYear = event.target.value;
                  setEducation(newEdu);
                }}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item style={{ alignSelf: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mb: 3 }}
            onClick={() =>
              setEducation([
                ...education,
                {
                  institutionName: "",
                  startYear: "",
                  endYear: "",
                },
              ])
            }
            className={classes.inputBox}
          >
            Add another institution details
          </Button>
        </Grid>
      </>
    );
  };


export const ProfileApllicant = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState();
    const [open, setOpen] = useState(false);
  
    const [profileDetails, setProfileDetails] = useState({
      name: "",
      education: [],
      skills: [],
      resume: "",
      profile: "",
    });
  
    const [education, setEducation] = useState([
      {
        institutionName: "",
        startYear: "",
        endYear: "",
      },
    ]);
  
    const handleInput = (key, value) => {
      setProfileDetails({
        ...profileDetails,
        [key]: value,
      });
    };
  

  
    const handleFormSubmit = (values) => {
      alert('r');
      setLoading(true);
    }  

   return (
    <>
      <Container>
     <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Applicant', path: '/Applicant' }, { name: 'Profile' }]}
        />
      </Box>
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh"}}
    >
       
      <Grid item>
        <Typography variant="h3">Profile</Typography>
      </Grid>
      <Grid item xs>
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
    
    <Card className="card">
      <Grid container style={{width : "150%"}}>     

        <Grid item sm={6} xs={12}>
          <Box p={4} height="100%">
            <Formik 
              onSubmit={handleFormSubmit}
             
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    onBlur={handleBlur}
                    // value={values.name}
                    onChange={handleChange}
                    helperText={touched.name && errors.name}
                    error={Boolean(errors.name && touched.name)}
                    sx={{ mb: 3 }}
                  />

                <MultifieldInput
                education={education}
                setEducation={setEducation}
                name="education"
                label="education"
                variant="outlined"
                sx={{ mb: 3 }}
              />
            
                <TextField
                   fullWidth
                   size="small"
                   type="text"
                   name="skills"
                   label="Skills"
                   variant="outlined"
                   onBlur={handleBlur}
                //    value={values.skills}
                   onChange={handleChange}
                   helperText={touched.skills && errors.skills}
                   error={Boolean(errors.skills && touched.skills)}
                   sx={{ mb: 3 }}
                 /> 
                 
                <ButtonGroup  fullWidth variant="outlined" aria-label="Basic button group" sx={{ mb: 3 }}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        style={{width : "40%"}}
                        startIcon={<DescriptionIcon />}
                        >
                        <VisuallyHiddenInput type="file" />
                        </Button>

                        <Button style={{width : "221%",color : "#c4c4c4", borderColor:"#c4c4c4"}}>
                        Resume (.pdf)              
                    
                    </Button>
                        <Button
                            component="label"
                            role={undefined}
                            disabled
                            style={{width : "40%"}}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon  />}
                            >                
                            
                        </Button>
                </ButtonGroup>
                 
                <ButtonGroup  fullWidth variant="outlined" aria-label="Basic button group"   sx={{ mb: 3 }}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        style={{width : "40%"}}
                        startIcon={<AccountBoxIcon />}
                        >
                        <VisuallyHiddenInput type="file" />
                        </Button>

                        <Button style={{width : "221%", color : "#c4c4c4", borderColor:"#c4c4c4"}}>
                        Profile Photo (.jpg/.png)        
                    
                    </Button>
                        <Button
                            component="label"
                            role={undefined}
                            disabled
                            style={{width : "40%"}}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon  />}
                            >                
                            
                        </Button>
                </ButtonGroup>                         
                <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px",display : "flex", justifyContent : "center" }}
          
            >
              Update Details
            </Button>   
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Card>
  
    </Paper>
        </Grid>
      </Grid>
     
    </Container>
    </>
  );
};

