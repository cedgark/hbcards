import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import birthday_foreground from '../src/images/birthday_foreground.jpeg';
import form_background from '../src/images/form-background.jpg';
import popout_presents from '../src/images/popout-presents.png';

export default function DonorRegister() {
  const [donorName, setdonorName] = useState('');
  const [donorEmail, setdonorEmail] = useState('');
  const [recipientName, setrecipientName] = useState('');
  const [donors, setdonors] = useState([]);

  const handleRegisterClick = (e) => {
    const donor = {donorName, donorEmail, recipientName};
    console.log(donor);
    fetch("http://localhost:8080/donor/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(donor)
    }).then(() => {
      console.log("New Donor added.")
    })

  }
    {/*
    useEffect(() => {fetch("http://localhost:8080/donor/getAll").
    then(res => res.json()).
    then(result => setdonors(result))},[donors]);
  */}



  return (
    <Container maxWidth="sm" sx={{position:"absolute", top:"50%", left:"55%", margin: "-250px 0 0 -250px"}}>

    <Paper elevation={3} sx={{borderRadius: "0 20px 20px 0", bgcolor:"rgba(255, 255, 255, 0.5)"}}>

    <img src={birthday_foreground} style={{position: "absolute", borderRadius:"20px", zIndex: "-1", width: "770px", height: "336px",top:"72%", left:"20%", margin: "-250px 0 0 -315px"}}/>

    <img src={popout_presents} style={{position: "absolute", width: "350px", height: "300px",top:"110%", left:"0%", margin: "-250px 0 0 -315px"}}/>


    <div style={{position: "absolute", border: "none", borderRadius:"0 20px 20px 0", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex: "-1", width: "550px", height: "335px",top:"72%", left:"20%", margin: "-250px 0 0 -95px"}}/>

    <img src={form_background} style={{position: "absolute", zIndex: "-2", width: "102rem", height: "100vh", top:"-22%", left:"-92%", filter: "blur(4px)"}}/>




    <Box
      component="form"
      sx={{p: 1,
        '& > :not(style)': { m: 1 }
      }}
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection="column"
      margin="20px"


    >

      <h1>Register</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" style={{maxWidth:"97%"}} value={donorName} onChange={(e) => setdonorName(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" style={{maxWidth:"97%"}} value={donorEmail} onChange={(e) => setdonorEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Recipient's Name" variant="outlined" style={{maxWidth:"97%"}} value={recipientName} onChange={(e) => setrecipientName(e.target.value)}/>
      <Button variant="contained" style={{width:"40%", margin: 'auto', position: 'relative', marginTop: '5px',marginBottom: '10px', borderRadius: "20px"}} onClick={handleRegisterClick}>Submit</Button>

    </Box>
    </Paper>



    {/*
    <h1>Donors</h1>
    <Paper elevation={3} style={{padding: "20px"}}>

    {donors.map(donor => (

      <Paper elevation={5} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={donor.id}>
      ID: {donor.id} <br/>
      Email: {donor.donorEmail} <br/>
      Recipient's Name: {donor.recipientName} <br/>
      </Paper>
    )

    )}

    </Paper>

  */}

    </Container>

  );
}
