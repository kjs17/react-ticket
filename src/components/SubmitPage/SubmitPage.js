import React, { useRef, useState } from 'react';
import './SubmitPage.css';
import Navbar from '../Navbar/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../../firebase'


const SubmitPage = () => {

  const nameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [loader, setLoader] = useState(false);

  const formRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    setLoader(true);


    const data = {
      name: nameRef.current.value,
      contact: contactRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    console.log(data);
    

    
    db.collection("ticket")
      .add({
        name: nameRef.current.value,
        contact: contactRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      })
      .then(() => {
        setLoader(false);
        alert("Your ticket has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  

    formRef.current.reset();

  };

  return (
    <div id='submit_page'>
      <Navbar/>

      <div className='submit_wrap'>
        <form ref={formRef}>

          <div className='wrap_title'>Submit a ticket</div>
          
          <div className='field_wrap'>
            <span className='label_ticket'>Ticket Number:</span>
            <span className='field_value'></span>
          </div>

          <div className='field_wrap'>
            <span className='label'>Name:</span>
            <span className='field_value'>
              <TextField id="outlined-basic" variant="outlined"  size="small" fullWidth
              inputRef={nameRef}
              />
            </span>
          </div>

        <div className='field_wrap'>
          <span className='label'>Contact #</span>
          <span className='field_value'>
            <TextField id="outlined-basic" variant="outlined" size="small" fullWidth
            inputRef={contactRef}
            />
          </span>
        </div>

        <div className='field_wrap'>
          <span className='label'>Email:</span>
          <span className='field_value'>
            <TextField id="outlined-basic" variant="outlined" size="small" fullWidth
            inputRef={emailRef}
            />
          </span>

        </div>
        <div className='field_wrap'>
          <span className='label'>Message:</span>
          <span className='field_value'>
            <TextField
            id="outlined-multiline-static"
            multiline
            rows={3}
            fullWidth
            inputRef={messageRef}
            />
          </span>
        </div>

        <div className='btn_wrap'>
          <Button variant="contained" className='submit_btn' 
          style={{ opacity: loader ? "0.5" : "1" }}
          onClick={onSubmit}>
            SUBMIT
          </Button>
        </div>

        </form>

      
      </div>
    </div>
  )
}

export default SubmitPage
