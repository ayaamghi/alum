import React from 'react';
import ReactDOM from "react-dom";

import { makeStyles, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button'
import '../fonts.css';
import '../form.css';


import CreatableSelect from 'react-select/creatable'
import {collection, addDoc, setDoc, doc} from "firebase/firestore"
import {db} from '../../Firebase/firebase.js'
import { date } from 'date-arithmetic';
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


export default function ContactForm() {   
    // character limit for graduation year
    const CHARACTER_LIMIT = 4; 
    const WORD_CHARACTER_LIMIT = 280; 
    const [values, setValues] = React.useState({
        gradYear: "",
        first: "", 
        last: "", 
        email: "", 
        number: 0, 
        activities: ""
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
                    <Grid item className = "griditem">
                        <TextFieldStyled
                            variant="standard"
                            label="Phone Number"
                            placeholder="123-456-7890"
                            onChange = {handleChange("number")}

                            />
                    </Grid>
                </Grid>
                <Grid item className = "griditem">

                <CreatableSelect 

                 
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? '#5f181b' : 'gray'
                    })}}
                
                closeMenuOnSelect = {false} isMulti isClearable options={options}
                
                onChange = {(selectedValue) => setValues({ ...values, activities: selectedValue })}
                    
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

const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    {value: '3', label: 'Option 3'}
  ];
  

 const clickSubmit  = async (props) => { 

    
//    console.log(props)
    setDoc(doc(db, "test_contact", `${Date.now()}${props.first}`), {
        date: props.gradYear, 
       first: props.first,
       last: props.last, 
       email: props.email,
       activities: props.activities
    }
    )


}

      //  const time = Date.now().toString()

      //  console.log(time)



