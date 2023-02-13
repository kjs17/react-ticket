import React, { useState, useEffect, useCallback } from 'react'
import './ViewPage.css';
import Navbar from '../Navbar/Navbar';
import { db } from '../../firebase';
import { getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';


const ViewPage = () => {
  const [ticket, setTicket] = useState([]);
  let { ticketNumber } = useParams();

  const fetchPost = useCallback(async () => {
    await getDocs(db.collection("ticket"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setTicket(newData);                
        })
  }, [])

  useEffect(() => {
    fetchPost();
  }, [fetchPost])
  
  return (
    <div id='view_page'>
      <div className= 'view_wrap'>
        <Navbar />
        <div className='view_title'>Tickets</div>
        <table>
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {ticket.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.contact}</td>
                <td>{ticket.email}</td>
                <td>{ticket.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewPage
