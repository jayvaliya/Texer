import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    // isEmpty();
    e.preventDefault();

    emailjs.sendForm('service_i8c3noo', 'template_gxynop6', form.current, 'QX7fI0bLasNFK_p6a')
      .then((result) => {
        console.log(result.text);
        console.log('done');
      }, (error) => {
        console.log(error.text);
        console.log('nop');
      });
    alert('Message has been sent successfully!!')
    };

  return (

    <div className={`container form22 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
      <h2 className='my-3'>Send us a Massage:</h2>

      <form ref={form} onSubmit={sendEmail}>

      <div className="input-group my-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Your Name</span>
        <input type="text" className="form-control" name="user_name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group my-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Your Email</span>
        <input type="email" className="form-control" name="user_email" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group">
        <span className="input-group-text">Massage</span>
        <textarea className="form-control" name="message" aria-label="With textarea" rows={5}></textarea>
      </div>

      <input type="submit" className="btn btn-primary mx-2 my-2" value="Send" />
      </form>
    </div>
  )
}