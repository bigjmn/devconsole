import Grid from '@mui/material/Grid';

import DevCard from './DevCard'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const Layout = () => {
  const devnames = ["dev1c", "dev2c", "dev3c", "dev4c", "dev1r", "dev2r", "dev3r", "dev4r"]
  return(
    <Container maxWidth="xl" sx={{backgroundColor:'#e4e2e4', p:4}}>


    <Grid  justifyContent="center" container spacing="2">
      {devnames.map((dname, i) => (
        <Grid sx={{display:"flex", justifyContent:"center"}} xs={3} key={i}>



          <DevCard devname={dname} />
        </Grid>
      ))}

    </Grid>
    </Container>
  )
}

export default Layout
