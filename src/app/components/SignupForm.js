// components/SignupForm.js
"use client";
import React, { useState } from 'react';
import { Box, Typography, Button , TextField} from "@mui/material";
import { color } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const styles = {    
    color: "white",}

export default function SignupForm({ onBack , onSubmit }) {
  const [formData, setState] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    //move to next page
     
    
  };

const textFieldStyles = {
    "& .MuiInputLabel-root": {
        color: "white",
    },
    "& .MuiInput-underline:before": {
        borderBottom: "2px solid blue",
    },
    "& .MuiInput-underline:after": {
        borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover:before": {
        borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover:after": {
        borderBottom: "2px solid white",
    },
};

const inputLabelStyles = {
    color: "white",
    "&:hover": {
        color: "white",
    },
    "&.Mui-focused": {
        color: "blue",
    },
    "&.Mui-error": {
        color: "red",
    },
    "&.Mui-disabled": {
        color: "grey",
    },
};

const inputStyles = {
    color: "white",
    "&:hover": {
        color: "white",
    },
    "&.Mui-focused": {
        color: "blue",
    },
    "&.Mui-error": {
        color: "red",
    },
    "&.Mui-disabled": {
        color: "grey",
    },
};

return (
    <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              padding: '0px',
              //maxHeight: '100%',
            }}
          >
        
      <Stack 
      direction="row" 
      spacing={4} 
      justifyContent="flex-start"
      alignItems="center"
      sx={{ 
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Avatar 
        variant="square"
        sx={{ 
          bgcolor: 'transparent',
          width: 40,
          height: 40,
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }
        }}
      >

        <img src={"./about.png"} alt={`Feature icon`} />
      </Avatar>
      <Typography
            variant="h4"
            component="h4"
            sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "20px",
            }}
        >
            About Yourself
        </Typography>
    </Stack>
        
        
        <TextField
            required
            id="standard-basic"
            label="Name"
            variant="standard"
            name="fullName"
            size="small"
            onChange={handleChange}
            value={formData.fullName}
            
            sx={textFieldStyles}
            slotProps={{
                inputLabel: {
                    sx: inputLabelStyles,
                },
                input: {
                    sx: inputStyles,
                },
            }}
        />
        
        <TextField
            required
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            size="small"
            sx={textFieldStyles}
            onChange={handleChange}
            value={formData.email}
            slotProps={{
                inputLabel: {
                    sx: inputLabelStyles,
                },
                input: {
                    sx: inputStyles,
                },
            }}
        />
        
        <TextField
            required
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            size="small"
            sx={textFieldStyles}
            onChange={handleChange}
            value={formData.phone}
            slotProps={{
                inputLabel: {
                    sx: inputLabelStyles,
                },
                input: {
                    sx: inputStyles,
                },
            }}
        />
        
        <Button
            type="submit"
            variant="outlined"
            size="small"
            onClick={onSubmit}
            sx={{
                //ADD SOME SPACE BETWEEN BUTTONS
                marginTop: "40px",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px 20px",
                backdropFilter: "blur(5px)",
                "&:hover": {
                    backgroundColor: "rgba(82, 82, 82, 0.5)",
                },
            }}
            
        >
            Submit
        </Button>

        <Button
            variant="outlined"
            onClick={onBack}
            size="small"
            sx={{
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                padding: "10px 20px",
                backdropFilter: "blur(5px)",
                "&:hover": {
                    backgroundColor: "rgba(82, 82, 82, 0.5)",
                },
            }}
        >
            Back
        </Button>
    </Box>
);
}