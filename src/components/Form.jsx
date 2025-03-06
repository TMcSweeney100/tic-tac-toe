import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 export function Form() {
  return (
    <>


    <div className="container mt-10">
    <form action="/my-handling-form-page" method="post" className='p-4 bg-light shadow'>
  <div class=" mb-4 mt-5">
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </div>
  <p>
    <label for="mail">Email:</label>
    <input type="email" required id="mail" name="user_email" />
  </p>
  <p>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </p>
</form>
</div>
    </>
  )
}

