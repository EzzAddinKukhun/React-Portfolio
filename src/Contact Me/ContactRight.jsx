import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
export default function ContactRight() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState (false); 

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            emailjs.sendForm("service_f8we6wi", "template_267ksfk", form.current, "3RzoLwi6YDcL4yjWl").then(res => {
                if (res.text == "OK") {
                    setIsSuccess (true); 
                    setTimeout(()=>{
                        setIsSuccess(false); 
                    }, 5000); 
                }
            }
            );
            setIsLoading(false);          
        }, 2000)
    }



    return (
        <>
            {console.log("render")}
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <TextField
                        id="filled-search"
                        label="Your Email"
                        type="email"
                        variant="filled"
                        name="senderName"
                        fullWidth
                    />

                    <TextField
                        className='mt-4'
                        id="standard-multiline-static"
                        label="Email"
                        multiline
                        rows={8}
                        variant="standard"
                        name="message"
                        fullWidth
                    />

                    <div className='d-flex justify-content-center align-items-center'>
                        {
                            isLoading ? <Button disabled type='submit' id="submit-email" className=' mt-5 w-50 ' variant="contained">Submit</Button> :
                                <Button type='submit' id="submit-email" className=' mt-5 w-50 ' variant="contained">Submit</Button>
                        }
                    </div>
                    {
                        isSuccess? <h6 className='text-success mt-4'>Email has sent successfully!</h6>: ""
                    }
                    
                </form>
            </div>
        </>
    )
}
