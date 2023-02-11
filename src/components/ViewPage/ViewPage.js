import React, { useState, useEffect } from 'react'
import './ViewPage.css';
import Navbar from '../Navbar/Navbar';
import { ticketData } from "../../db";
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";



const ViewPage = () => {
  
  const [ticket, setTicket] = useState([]);
  const fetchPost = async () => {
       
    await getDocs(collection(db, "ticket"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTicket(newData);                
            console.log(ticket, newData);
        })
   
}

useEffect(()=>{
    fetchPost();
}, [])
  
  return (
    <div id='view_page'>
      <div className= 'view_wrap'>
        <Navbar/>
        <div className='view_title'>Tickets</div>

        <div>

{
        ticket && ticket.map(ticket=>{
          return(
            <div>
            <div style={{marginTop:30}}><span>Ticket: </span><span>{ticket.name}</span></div>
            <div style={{marginTop:30}}><span>Contact: </span><span>{ticket.contact}</span></div>
            <div style={{marginTop:30}}><span>Email: </span><span>{ticket.email}</span></div>
            <div style={{marginTop:30}}><span>Message: </span><span>{ticket.message}</span></div>
            </div>
          )
        })
      }


        </div>
        

      </div>

    </div>
  )
}


export default ViewPage
