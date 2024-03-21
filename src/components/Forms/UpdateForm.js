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

import {collection, addDoc, setDoc, doc} from "firebase/firestore"
import {db} from '../../Firebase/firebase'
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


export default function UpdateForm() {   
    // character limit for graduation year
    const [captchaIsDone, setCaptchaDone] = React.useState(false)

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
                </Grid>
                <Grid 
                container
                direction = "row"
                justifyContent = "center"
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



