import React from 'react'

export const Contact = () => {
  return (
    <div className="page">
      <h1>Contact page</h1>
      <p>Feel free to reach out to me!</p>
      <form className="contact-form" onSubmit={(e) => {
        e.preventDefault();
        alert('Message sent!');
      }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
