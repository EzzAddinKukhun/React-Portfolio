import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactRight() {
    return (
        <div className="contact-right">
            <TextField
                id="filled-search"
                label="Your Email"
                type="search"
                variant="filled"
                fullWidth
            />

            <TextField
                className='mt-4'
                id="standard-multiline-static"
                label="Email"
                multiline
                rows={8}
                variant="standard"
                fullWidth
            />

            <div className='d-flex justify-content-center align-items-center'>
                <Button id="submit-email" className=' mt-5 w-50 ' variant="contained">Submit</Button>
            </div>

        </div>
    )
}
