import React from 'react'
import './SubmitPage.css';
import Navbar from '../Navbar/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SubmitPage = () => {
  return (
    <div id='submit_page'>
      <Navbar/>

      <div className='submit_wrap'>
        <div className='wrap_title'>Submit a ticket</div>
        <div className='field_wrap'>
          <span className='label_ticket'>Ticket Number:</span>
          <span className='field_value'>100234</span>
          </div>
        <div className='field_wrap'>
          <span className='label'>Name:</span>
          <span className='field_value'><TextField id="outlined-basic" variant="outlined"  size="small" fullWidth/></span>
        </div>

        <div className='field_wrap'>
          <span className='label'>Contact #</span>
          <span className='field_value'><TextField id="outlined-basic" variant="outlined" size="small" fullWidth/></span>

        </div>
        <div className='field_wrap'>
          <span className='label'>Email:</span>
          <span className='field_value'><TextField id="outlined-basic" variant="outlined" size="small" fullWidth/></span>

        </div>
        <div className='field_wrap'>
          <span className='label'>Message:</span>
          <span className='field_value'><TextField
          id="outlined-multiline-static"
          multiline
          rows={3}
          fullWidth
        /></span>
        </div>
        <div className='btn_wrap'>
        <Button variant="contained" className='submit_btn'>SUBMIT</Button>
        </div>

      
      </div>




    </div>
  )
}

export default SubmitPage
