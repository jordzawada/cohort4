import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CAcities from "./ca.json";

const randomCities= CAcities;

//add in newCitySumbit
function NewCityForm({newCitySumbit, newCityClose}) {
    const [open, setOpen] = React.useState(true);

    let [cityName, setName]= React.useState("");
    let [cityLat, setLat]= React.useState("");
    let [cityLong, setLong]= React.useState("");
    let [cityPop, setPop]= React.useState("");
  
    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    const handleClose = () => {
      setOpen(false);
      newCityClose();
    };

    const handleRandom =()=>{
      let x = Math.round(Math.random()*246);
      let randomCity=randomCities[x];
      cityName= setName(randomCity.city);
      cityLat=setLat(randomCity.lat);
      cityLong=setLong(randomCity.lng);
      cityPop=setPop(randomCity.population);
    }

    const handleAdd =() =>{
      if (cityName!==""){
        newCitySumbit(cityName,cityLat,cityLong,cityPop);
      cityName= setName("");
      cityLat=setLat("");
      cityLong=setLong("");
      cityPop=setPop("");
      handleClose();
      } else {
        alert("add a name at least");
      }
    }
  
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button> */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add City</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill in City Data please.
            </DialogContentText>
            <TextField
            variant="filled"
              autoFocus
              margin="dense"
              id="name"
              label="City Name"
              type="text"
              value={cityName}
              onChange={e => setName(e.target.value)}

            />
            <TextField
            variant="filled"
              autoFocus
              margin="dense"
              id="lat"
              label="Latitude"
              type="text"
              value={cityLat}
              onChange={e => setLat(e.target.value)}
            />
            <TextField
            variant="filled"
              autoFocus
              margin="dense"
              id="long"
              label="Longitude"
              type="text"
              value={cityLong}
              onChange={e => setLong(e.target.value)}
            />
            <TextField
            variant="filled"
              autoFocus
              margin="dense"
              id="population"
              label="Population"
              type="text"
              value={cityPop}
              onChange={e => setPop(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleRandom} color="primary">
              Add Random Data
            </Button>
            <Button onClick={handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

// class NewCityForm extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="newCityForm">
//         <input type="text" name="newCityName"></input>
//         <button id="newCitySubmit" onClick={this.props.newCitySumbit}>
//           Add
//         </button>
//       </div>
//     );
//   }
// }

export default NewCityForm;
