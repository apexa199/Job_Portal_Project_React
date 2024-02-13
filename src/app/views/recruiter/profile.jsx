import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, styled } from '@mui/material';
import { Box } from '@mui/material';
import makeStyles from '@emotion/styled';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const useStyles = makeStyles((theme) => ({
  body: {
    height: 'inherit'
  },
  popupDialog: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    // padding: "30px",
  }
}));

// const MultifieldInput = (props) => {
//   const classes = useStyles();
//   const { education, setEducation } = props;

//   return (
//     <>
//       {education.map((obj, key) => (
//         <Grid item container className={classes.inputBox} key={key}>
//           <Grid item xs={6}>
//             <TextField
//               label={`Institution Name #${key + 1}`}
//               value={education[key].institutionName}
//               onChange={(event) => {
//                 const newEdu = [...education];
//                 newEdu[key].institutionName = event.target.value;
//                 setEducation(newEdu);
//               }}
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               label="Start Year"
//               value={obj.startYear}
//               variant="outlined"
//               type="number"
//               onChange={(event) => {
//                 const newEdu = [...education];
//                 newEdu[key].startYear = event.target.value;
//                 setEducation(newEdu);
//               }}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               label="End Year"
//               value={obj.endYear}
//               variant="outlined"
//               type="number"
//               onChange={(event) => {
//                 const newEdu = [...education];
//                 newEdu[key].endYear = event.target.value;
//                 setEducation(newEdu);
//               }}
//             />
//           </Grid>
//         </Grid>
//       ))}
//       <Grid item style={{ alignSelf: 'center' }}>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() =>
//             setEducation([
//               ...education,
//               {
//                 institutionName: '',
//                 startYear: '',
//                 endYear: ''
//               }
//             ])
//           }
//           className={classes.inputBox}
//         >
//           Add another institution details
//         </Button>
//       </Grid>
//     </>
//   );
// };

const Profile = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);

  const [profileDetails, setProfileDetails] = useState({
    name: '',
    bio: '',
    contactNumber: ''
  });

  const handleClose = () => {
    setOpen(false);
  };

  const editDetails = () => {
    setOpen(true);
  };

  const handleInput = (key, value) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value
    });
  };

  return (
    <Container>
      <div>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Recruiter', path: '/Recruiter' }, { name: 'Profile' }]}
          />
        </Box>

        <Stack spacing={3}>
          <Grid item>
            <Typography variant="h4" align="center">
              Profile
            </Typography>
          </Grid>
          <Grid item xs style={{ width: '100%' }}>
            <Paper
              style={{
                padding: '20px',
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
                //   width: "60%",
              }}
            >
              <Grid container direction="column" alignItems="stretch" spacing={3}>
                <Grid item>
                  <TextField
                    label="Name"
                    value={profileDetails.name}
                    onChange={(event) => handleInput('name', event.target.value)}
                    variant="outlined"
                    fullWidth
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Bio (upto 250 words)"
                    multiline
                    rows={8}
                    style={{ width: '100%' }}
                    variant="outlined"
                    value={profileDetails.bio}
                    onChange={(event) => {
                      if (
                        event.target.value.split(' ').filter(function (n) {
                          return n != '';
                        }).length <= 250
                      ) {
                        handleInput('bio', event.target.value);
                      }
                    }}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {/* <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  style={{ width: "auto" }}
                /> */}
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: '10px 50px', marginTop: '30px' }}
              >
                Update Details
              </Button>
            </Paper>
          </Grid>
        </Stack>
      </div>
    </Container>
  );
};

export default Profile;
