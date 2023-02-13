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
  const [ticketNumber, setTicketNumber] = useState(null);

  const formRef = useRef();
  const validateForm = () => {
    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !contact || !email || !message) {
      alert("All fields are required!");
      return false;
    }
    return true;
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
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
      .then((docRef) => {
        setLoader(false);
        setTicketNumber(docRef.id);
        alert(`Your ticket has been submitted with ticket number: ${docRef.id} 👍`);
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
            <span className='field_value'>{ticketNumber}</span>
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
