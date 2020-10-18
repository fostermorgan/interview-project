import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, TextField } from '@material-ui/core';

function App() {
  const [destination, setDestination] = React.useState<string>("");
  const countries = ["CAN", "USA", "MEX", "BLZ", "GTM", "SLV", "HND", "NIC", "CRI", "PAN"]
  const [solution, setSolution] = React.useState<string[]>([]);
  const routeSolution = React.useRef(["USA"]);

  React.useEffect(() => {
    updateSolution()
  }, [destination])

  const updateSolution = () => {
    if(countries.includes(destination.toUpperCase())){ //if a valid country     
        //set route solution
        if(destination.toUpperCase() !== 'CAN'){
          for(let i = 2; i < countries.length; i++){
            if(countries[i] !== destination.toUpperCase().toString() && countries[i] !== "BLZ" && countries[i] !== "SLV"){
              routeSolution.current.push(countries[i]);
            }else if(countries[i] === destination.toUpperCase().toString()){
              routeSolution.current.push(countries[i]); //add the destination
              i = countries.length; //found dest, exit for loop
            }
          }
        } else {
          routeSolution.current.push(countries[0]);
        }
        setSolution(routeSolution.current)
      }else{ //if not a vlaid country, clear the solution
        //clear route solution
        routeSolution.current = ["USA"];
      }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField
              label="Destination"
              id="standard-adornment-weight"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            {destination === "" && (
              <Typography>Enter a destination</Typography>
            )}
            {destination !== "" && !countries.includes(destination.toUpperCase()) && (
              <Typography>Enter a valid destination</Typography>
            )}
            {destination !== "" && countries.includes(destination.toUpperCase()) && (
              solution.map(country => {
                return <li key={country}>{country}</li>
              })
            )}
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}

export default App;
