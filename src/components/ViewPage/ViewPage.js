import React from 'react'
import './ViewPage.css';
import Navbar from '../Navbar/Navbar';
import { ticketData } from "../../db";


const ViewPage = () => {
  return (
    <div id='view_page'>
      <div className= 'view_wrap'>
        <Navbar/>
        <div className='view_title'>Tickets</div>

        <div>

        {ticketData.map((ticket, index) => (
          <div key={index} style={{marginTop:30}}>
            <div>
              <span>Ticket Number: </span>
              <span>{ticket.ticketNum}</span>
            </div>
            <div>
              <span>Description: </span>
              <span>{ticket.description}</span>
            </div>
          </div>
        ))}


        </div>
        

      </div>

    </div>
  )
}


export default ViewPage
