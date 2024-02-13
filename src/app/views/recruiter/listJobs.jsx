import * as React from 'react';
import { Box, Chip, Grid, IconButton, InputAdornment, Rating, TextField } from '@mui/material';
import { Breadcrumb } from 'app/components';
import Card from '@mui/material/Card';
import styled from '@emotion/styled';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetJobRequest } from 'slice/recruiter/getjobSlice';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

function MyJobs() {
  const [filterOpen, setFilterOpen] = useState(false);

  const [searchOptions, setSearchOptions] = useState({
    query: '',
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false
    },
    salary: [0, 100],
    duration: '0',
    sort: {
      salary: {
        status: false,
        desc: false
      },
      duration: {
        status: false,
        desc: false
      },
      rating: {
        status: false,
        desc: false
      }
    }
  });

  const { listData, data, error, isloading } = useSelector((y) => y.getJobs);

  console.log(listData);

  const dis = useDispatch();

  useEffect(() => {
    dis(GetJobRequest(1));
  }, []);

  return (
    <>
      <Container>
        <div>
          <Box className="breadcrumb">
            <Breadcrumb
              routeSegments={[{ name: 'MyJobs', path: '/Recruiter' }, { name: 'My Jobs' }]}
            />
          </Box>

          <Grid item container direction="column" justify="center" alignItems="center">
            <Grid item xs>
              <Typography variant="h4">My Jobs</Typography>
            </Grid>
            <Grid item xs>
              <TextField
                label="Search Jobs"
                value={searchOptions.query}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    query: event.target.value
                  })
                }
                onKeyPress={(ev) => {
                  if (ev.key === 'Enter') {
                  }
                }}
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
              <IconButton onClick={() => setFilterOpen(true)}>
                <FilterListIcon />
              </IconButton>
            </Grid>
          </Grid>

          {isloading && <div>Loading</div>}
          {/* {error && <div>{error}</div>} */}

          {listData?.map((v) => {
            return (
              <Card sx={{ maxWidth: 1200, margin: '25px' }}>
                <CardActionArea>
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
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default MyJobs;
