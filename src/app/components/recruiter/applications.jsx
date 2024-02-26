import { Grid, Typography } from '@mui/material'
import React from 'react';
import { Box, styled } from '@mui/material';
import { Breadcrumb } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { ViewGetJobRequest } from 'slice/recruiter/createjobSlice';
import { useEffect } from 'react';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));


export const Applications = () => {


  return (
    <>
    <Container>
      <div>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Recruiter', path: '/Recruiter' }, { name: 'My Jobs' }]}
          />
        </Box>
    <Grid
    container
    item
    direction="column"
    alignItems="center"
    style={{ padding: "10px", minHeight: "93vh" }}
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

    </Grid>
  </Grid>
  </div>
  </Container>
    </>
  )
}
