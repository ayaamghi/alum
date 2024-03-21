import React from 'react';
import ReactDOM from "react-dom";

import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button'
import '../fonts.css';
import '../form.css';

import ReCAPTCHA from 'react-google-recaptcha'

import CreatableSelect from 'react-select/creatable'
import {collection, addDoc, setDoc, doc} from "firebase/firestore"
import {db} from '../../Firebase/firebase.js'
import { date } from 'date-arithmetic';
const TextFieldStyled = styled(TextField)({
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
});


export default function ContactForm() {   

  const [captchaIsDone, setCaptchaDone] = React.useState(false)

  const key = process.env.REACT_APP_RECAPTCHA_SERVER

    // character limit for graduation year
    const CHARACTER_LIMIT = 4; 
    const WORD_CHARACTER_LIMIT = 280; 
    const [values, setValues] = React.useState({
        gradYear: "",
        first: "", 
        last: "", 
        email: "", 
        number: 0, 
        activities: "",
        involvement: ""
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
                justifyContent = "center"
            >
                <Grid 
                    container
                    alignItems = "center" 
                    direction = "row" 
                    justifyContent = "center">
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

                 placeholder = "Select Activities During High School"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? '#5f181b' : 'gray'
                    })}}
                
                closeMenuOnSelect = {false} isMulti isClearable options={options}
                
                onChange = {(selectedValue) => setValues({ ...values, activities: selectedValue })}
                    
                />
                </Grid>
                <Grid item className = "griditem">

                  <CreatableSelect 

                  placeholder = "Select Interests"
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? '#5f181b' : 'gray'
                    })}}

                  closeMenuOnSelect = {false} isMulti isClearable options={involvements}

                  onChange = {(selectedValue) => setValues({ ...values, involvement: selectedValue })}
                    
                  />
</Grid>

                 <Grid item>
                  <ReCAPTCHA className = "griditem" sitekey= {process.env.REACT_APP_RECAPTCHA_SITE} 
  onChange={() => setCaptchaDone(true)}
  / >

                </Grid>

                <Grid item>
                    <Button disabled = {!captchaIsDone} borderColor = {!captchaIsDone ? 'blue' : 'red' } id="submit-font" onClick={() => clickSubmit(values)} >
                        <SendIcon/>
                        Submit
                    </Button>
                    
                </Grid>

            </Grid>
        </div>
    );
}


//TODO cleanup this code and see if you can do this without having the doubles 
const involvements = []
const involvementOpps = [
  "Alumni Speaker", "Mentorship", "Donation Campaign"
]


for( const involv of involvementOpps) { 

involvements.push({value: involv, label: involv})
}


const options = []
const activities = [
  "Robotics", "Model UN", "Journalism", "NHD", "Economics Club"
]


for( const activity of activities) { 

options.push({value: activity, label: activity})
}

const clickSubmit  = async (props) => { 

   
//    console.log(props)
   setDoc(doc(db, "test_contact", `${Date.now()}${props.first}`), {
       date: props.gradYear, 
      first: props.first,
      last: props.last, 
      email: props.email,
      activities: props.activities, 
      invovlement: props.involvement
   }
   )


}

//  const time = Date.now().toString()

//  console.log(time)



