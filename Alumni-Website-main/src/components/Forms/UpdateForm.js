import React from 'react';
import ReactDOM from "react-dom";

import { makeStyles, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button'

import '../fonts.css';
import '../form.css';

import {collection, addDoc, setDoc, doc} from "firebase/firestore"
import {db} from '../../Firebase/firebase'
   const TextFieldStyled = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#5f181b"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#5f181b"
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#5f181b"
        }
      }
    }
  })(TextField);


export default function UpdateForm() {   
    // character limit for graduation year
    const CHARACTER_LIMIT = 4; 
    const WORD_CHARACTER_LIMIT = 280; 
    const [values, setValues] = React.useState({
        gradYear: "",
        first: "", 
        last: "", 
        email: "", 
        disc: "",
        update: ""
    })
    const handleChange = changeOccured => event => {
        setValues({...values, [changeOccured]: event.target.value});

    };

    //to generate todays date 

    const todaysDate = "2021-01-01"
    
    return (
        <div block class = "form">
            <Grid 
                container
                alignItems = "center" 
                direction = "column" 
                justify = "center"
            >
                <Grid 
                    container
                    alignItems = "center" 
                    direction = "row" 
                    justify = "center">
                    <Grid item className = "griditem" >
                        <TextFieldStyled
                            variant="standard"
                            label="First Name"
                            placeholder="John"
                            className = "textFieldStyle"
                            onChange = {handleChange("first")}
                            />

                        </Grid>
                    <Grid item className = "griditem">
                        <TextFieldStyled
                            variant="standard"
                            label="Last Name"
                            placeholder="Doe"
                            onChange = {handleChange("last")}
                            />
                    </Grid>
                    <Grid item className = "griditem">
                        <TextFieldStyled
                            id="date"
                            variant="standard"
                            label="Graduation Year"
                            placeholder="2021"
                            inputProps={{maxLength: CHARACTER_LIMIT}}
                            value={values.gradYear}
                            onChange={handleChange("gradYear")}
                            />
                    </Grid> 
                    <Grid item className = "griditem">
                        <TextFieldStyled
                            variant="standard"
                            label="Email"
                            placeholder="johndoe@example.com"
                            onChange = {handleChange("email")}

                            />
                    </Grid>
                </Grid>
                <Grid 
                container
                direction = "row"
                justify = "center"
                alignItems = "center"
                >
                    <Grid item className = "griditem">
                        <TextFieldStyled
                        variant="standard"
                        label="Short Description"
                        placeholder="Ex: First Place International Robotics"
                        id = "shortDescription"
                        onChange = {handleChange("disc")}

                        />
                    </Grid>
                    <Grid item className = "griditem">
                        <TextFieldStyled 
                        variant="standard"
                        label="Date of Event"
                        type="date"
                        defaultValue = {todaysDate}

                        />
                    </Grid>
                </Grid>
                <Grid item id = "tellUsMoreGrid">
                <TextFieldStyled
                    multiline
                    rows = {5}
                    id = "multiline"
                    variant="outlined"
                    label="Your Update"
                    placeholder="Tell us more about what you've done..."
                    inputProps = {{
                        maxLength: WORD_CHARACTER_LIMIT
                    }}
                    helperText = {`${values.update.length}/${WORD_CHARACTER_LIMIT}`}  
                    onChange = {handleChange("update")}
                    /> 
                </Grid> 
                <Grid item>
                    <Button id="submit-font" onClick={() => clickSubmit(values)} >
                        <SendIcon/>
                        Submit
                    </Button>
                </Grid>
            </Grid>

        </div>
    );
}



 const clickSubmit  = async (props) => { 

    
//    console.log(props)
    setDoc(doc(db, "test", `${Date.now()}${props.first}`), {
        date: props.gradYear, 
       update: props.update,
       first: props.first,
       last: props.last, 
       disc: props.disc, 
       update: props.update
    }
    )


}

    
      //  const time = Date.now().toString()

      //  console.log(time)



