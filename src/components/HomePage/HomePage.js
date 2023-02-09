import React from 'react'
import './HomePage.css';
import Navbar from '../Navbar/Navbar';



const HomePage = () => {
  return (
    <div id='home_page'>
      <div className= 'home_wrap'>
        <div className='home_title'>Web Developer Examination Part 3</div>
        <Navbar/>
        {/* <div className='home_nav'>
          <span><a href = "#home_page">Home</a></span>
          <span>|</span>
          <span><a href = "#submit_page">Submit Ticket</a></span>
          <span>|</span>
          <span><a href = "#view_page">Ticket Viewer</a></span>
        </div> */}
        <div className='mid_home'>
          <img src='bg.png'/>
          </div>
        <div className='container'>
          <div>
            <div className='placeholder_title'>Technology</div>
            <div className='placeholder_item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis. Porttitor eget dolor morbi non. Orci ac auctor augue mauris augue neque gravida in. Nunc lobortis mattis aliquam faucibus purus in massa. </div>
          </div>
          <div>
            <div className='placeholder_title'>Development</div>
            <div className='placeholder_item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
          <div>
            <div className='placeholder_title'>Support</div>
            <div className='placeholder_item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus arcu felis. </div>
          </div>
        </div>
          <div className='name'>
            Karlo Dareb Sayosa
          </div>
        

      </div>

    </div>
  )
}

export default HomePage
