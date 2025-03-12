import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Form() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <form 
        action="/my-handling-form-page" 
        method="post" 
        className="p-4 shadow-lg rounded" 
        style={{ maxWidth: "500px", background: "linear-gradient(to right, #4facfe, #00f2fe)", color: "white" }}
      >
        <h2 className="mb-4 text-center">Contact Us</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="user_name" className="form-control shadow-sm border-info rounded-pill" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="mail" className="form-label">Email:</label>
          <input type="email" required id="mail" name="user_email" className="form-control border-info shadow-sm rounded-pill" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country:</label>
          <select required id="country" name="user_country" className="form-control border-info shadow-sm rounded-pill">
            <option value="">Select your country</option>
            <option value="Ireland">Ireland</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Spain">Spain</option>
            <option value="Italy">Italy</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="South Africa">South Africa</option>
            <option value="Mexico">Mexico</option>
            <option value="New Zealand">New Zealand</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number:</label>
          <input 
            type="number" 
            required 
            id="phone" 
            name="user_phone" 
            className="form-control border-info shadow-sm rounded-pill" 
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="msg" className="form-label">Message:</label>
          <textarea id="msg" name="user_message" className="form-control border-info shadow-sm rounded" rows="4" placeholder="Enter your message"></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100 rounded-pill shadow">Submit</button>
      </form>
    </div>
  );
}
