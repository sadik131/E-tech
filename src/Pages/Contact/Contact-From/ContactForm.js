import React from 'react';
import "./ContactForm.css"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const ContactForm = () => {
    const {google} = window.google
    console.log(google)
    return (
        <>
            <div className='contact-container'>
                <div className='form-section'>
                    <h1>We would love to hear from you.</h1>
                    <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                    <form>
                        <input type="name" placeholder='Enter Name' />
                        <input placeholder='Enter Phon Number' type="number" />
                        <input type="Email" placeholder='Enter Email' />
                        <textarea cols="30" rows="10"></textarea>
                    </form>
                    <button>Send Message</button>
                </div>
                <div className='stor-section'>
                    <div className='ourStore'>
                        <h1>Our Store</h1>
                        <p>8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
                        <p>Phone: +123 456 7890</p>
                        <p>Email: Hello@etrade.com</p>
                    </div>
                    <div className='career'>
                        <h1>Careers</h1>
                        <p>Instead of buying six things, one that you really like.</p>
                    </div>
                    <div className='openingHours'>
                        <h1>Opening Hours:</h1>
                        <p>Monday to Saturday: 9am - 10pm Sundays: 10am - 6pm</p>
                    </div>
                </div>
            </div>
            <div className='map-container'>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        {/* <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                    </InfoWindow>
                </Map>
            </div>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCBToTHhUVb7ON72HsfrwPvcuB7vnwOfb0")
  })(ContactForm)
