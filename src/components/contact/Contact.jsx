import React, { useState } from 'react';
import './contact.css'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function Contact(props) {
    const [message, setmessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setmessage(true)
    }

    return (
        <div className='mainContact'>
            <h1 style={{ fontSize: '50px', alignSelf: 'center' }}>Contact</h1>
            <div id='contact' className='contact'>
                <div className='left'>
                    <img alt="" src="https://static.webshopapp.com/shops/224948/files/177711641/contact-us-banner1.jpg" />
                </div>
                <div className='right'>
                    <h2>Message Us</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type='submit'>Send</button>
                        {message && <span>Thanks, I'll reply</span>}
                    </form>
                    <div className='address'>
                        <div className="phone">
                            <PhoneIcon className='phoneIcon' />
                            <h5 className='phoneName'>01296-339192</h5>
                        </div>
                        <div className="email">
                            <MailIcon className="emailIcon" />
                            <h5 className='emailName'>info@housebuildsolutions.com</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;