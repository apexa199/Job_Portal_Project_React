import * as React from 'react';
import {
  Box,
  CardActions,
  Chip,
  Grid,
  IconButton,
  InputAdornment,  
  Rating,
  Button,
  TextField,  
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Breadcrumb } from 'app/components';
import Card from '@mui/material/Card';
import styled from '@emotion/styled';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetJobRequest } from 'slice/recruiter/getjobSlice';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function MyJobs() {
  const { listData, data, error, isloading } = useSelector((y) => y.getJobs);

  console.log(listData);

  const dis = useDispatch();

  useEffect(() => {
    dis(GetJobRequest(1));
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUpdate, setOpenUpdate] = useState(false);
  const handleClickOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  // let history = useHistory();

  // const handleClick = (location) => {
  //   history.push(location);
  // };

  return (
    <>
      <Container>
        <div>
          <Box className="breadcrumb">
            <Breadcrumb
              routeSegments={[{ name: 'Recruiter', path: '/Recruiter' }, { name: 'My Jobs' }]}
            />
          </Box>

          <Grid item container direction="column" justify="center" alignItems="center">
            <Grid item xs>
              <Typography variant="h4">My Jobs</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                label="Search Jobs"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                style={{ width: '500px' }}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Grid>
          </Grid>

          {listData.length > 0 ? (
            listData?.map((v) => {
              return (
                <Card sx={{ maxWidth: 1200, margin: '25px', background: '#DCDCDC' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {v.title}
                      </Typography>

                      <Typography gutterBottom variant="h6" component="div">
                        <Rating value={v.rating !== -1 ? v.rating : null} readOnly />
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        User Id : {v.userId}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Duration :{v.duration !== 0 ? `${v.duration} month` : `Flexible`}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        {v.role}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Job Type : {v.jobType}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Salary : &#8377; {v.salary}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Number of Applicants: {v.maxApplicants}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        Remaining Number of Positions: {v.maxPositions - v.acceptedCandidates}
                      </Typography>
                      <Typography gutterBottom variant="body" component="div">
                        {v.skillsets.map((skill) => (
                          <Chip label={skill} style={{ marginRight: '2px' }} />
                        ))}
                      </Typography>
                    </CardContent>

                    {/* Button  code start--------------------------> */}

                    <CardActions style={{ display: 'grid' }}>
                      <Button
                        style={{
                          backgroundColor: 'rgb(34 42 68)',
                          color: 'white',
                          padding: '83px 113px',
                          borderRadius: '7px',
                          border: 'none',
                        
                        }}
                        size="small"
                        // onClick={() => handleClick(`/recruiter/applications`)}
                      >
                        View Application
                      </Button>
                      <Button
                        style={{
                          backgroundColor: 'rgb(252, 143, 30)',
                          color: 'white',
                          margin: '0px 0px',
                          padding: '12px 15px',
                          borderRadius: '7px',    
                          border: 'none'
                        }}
                        size="small"
                        onClick={handleClickOpenUpdate}
                      >
                        Update Details
                      </Button>
                      <Button
                        style={{
                          backgroundColor: '#f50057',
                          color: 'white',
                          margin: '0px 0px',                         
                          padding: '12px 15px',
                          borderRadius: '7px',
                          border: 'none'
                        }}
                        size="small"
                        onClick={handleClickOpen}
                      >
                        Delete
                      </Button>
                    </CardActions>
                    {/* Button  code end----------------------------> */}
                  </div>
                </Card>
              );
            })
          ) : (
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              No jobs found
            </Typography>
          )}
        </div>
        {/*Delete Pop Up-----------------> */}

        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle variant="h4" align="center">
            Are You Sure?
          </DialogTitle>
          <DialogActions>
            <Button
              style={{
                backgroundColor: '#f50057',
                color: 'white',
                margin: '20px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleClose}
            >
              DELETE
            </Button>
            <Button
              style={{
                backgroundColor: 'rgb(34 42 68)',
                color: 'white',
                margin: '0px 0px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleClose}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>

        {/* /delete popup end-------------> */}

        {/* /Update Popup Start----------> */}
        <Dialog
         
          open={openUpdate}
          keepMounted
          onClose={handleCloseUpdate}
          aria-describedby="alert-dialog-slide-description"
          style={{ padding: '0px 24px' }}
        >
          <DialogTitle variant="h4" align="center" style={{ padding: '35px 157px' }}>
            Update Details
          </DialogTitle>
          <TextField
            label="Application Deadline"
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Maximum Number Of Applicants"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
            style={{ marginBottom: '10px' }}
          />
          <TextField
            label="Positions Available"
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 1 } }}
            style={{ marginBottom: '10px' }}
          />

          <DialogActions style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              style={{
                backgroundColor: '#f50057',
                color: 'white',
                margin: '19px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleCloseUpdate}
            >
              UPDATE
            </Button>
            <Button
              style={{
                backgroundColor: 'rgb(34 42 68)',
                color: 'white',
                margin: '0px 0px',
                padding: '11px 60px',
                borderRadius: '7px',
                border: 'none'
              }}
              size="small"
              onClick={handleCloseUpdate}
            >
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
        {/* Update Popup End------------------> */}
      </Container>
    </>
  );
}

export default MyJobs;
