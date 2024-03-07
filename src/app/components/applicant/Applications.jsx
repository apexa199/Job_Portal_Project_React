import { useState, useEffect, useContext } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
  Rating,

} from "@mui/material";
import { Box, styled } from '@mui/material';
import makeStyles from '@emotion/styled';
import { Breadcrumb } from "..";


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '15px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));


// const useStyles = makeStyles((theme) => ({
//   body: {
//     height: "inherit",
//   },
//   statusBlock: {
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textTransform: "uppercase",
//   },
//   jobTileOuter: {
//     padding: "30px",
//     margin: "20px 0",
//     boxSizing: "border-box",
//     width: "100%",
//   },
//   popupDialog: {
//     height: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// }));

export const Applications = () => {

    const [applications, setApplications] = useState([]);
  

  
  return (
    <Container>
    <div>
      <Box   className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Applicant', path: '/Applicant' }, { name: 'Applications' }]}
        />
      </Box>
    <Grid
    container
    item
    direction="column"
    alignItems="center"
    style={{ padding: "30px", minHeight: "93vh" }}
  >
    <Grid item>
      <Typography variant="h3">Applications</Typography>
    </Grid>
    <Grid
      container
      item
      xs
      direction="column"
      style={{ width: "100%" }}
      alignItems="stretch"
      justify="center"
    >
      {applications.length > 0 ? (
        applications.map((obj) => (
          <Grid item>
           
          </Grid>
        ))
      ) : (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          No Applications Found
        </Typography>
      )}
    </Grid>
  </Grid>
  </div>
 </Container>
);
};
