import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Applications = () => {

  return (
    <Grid
    container
    item
    direction="column"
    alignItems="center"
    style={{ padding: "30px", minHeight: "93vh" }}
  >
    <Grid item>
      <Typography variant="h4">Applications</Typography>
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
   
        <Typography variant="h5" style={{ textAlign: "center" }}>
          No Applications Found
        </Typography>

    </Grid>
  </Grid>
  )
}
