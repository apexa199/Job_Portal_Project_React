import { Box } from '@mui/material';
import { Breadcrumb } from 'app/components';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { Button, Card } from 'react-bootstrap';
import { GetJobRequest } from 'slice/recruiter/getjobSlice';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

export function ListJobs() {
  const { data, isloading, error, listData } = useSelector((y) => y.getJobs);

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
              routeSegments={[{ name: 'ListJobs', path: '/Recruiter' }, { name: 'ListJobs' }]}
            />
          </Box>

          {isloading && <div>Loading</div>}
          {/* {error && <div>{error}</div>} */}
          {data && (
            <ul className="col-sm-4">
              {listData?.map((v) => {
                return (
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{v.title}</Card.Title>
                      <Card.Title>{v.skillsets}</Card.Title>
                      <Card.Title>{v.userId}</Card.Title>

                      <Card.Title>{v.jobType}</Card.Title>
                      <Card.Title>{v.salary}</Card.Title>

                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </ul>
          )}
        </div>
      </Container>
    </>
  );
}
