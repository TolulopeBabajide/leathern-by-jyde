import React from 'react'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'

const Contact = () => {
  return (
    <>
        <Nav/>
        <div className='container align-items-center justify-content-center d-flex m-5 p-5'>
        <form className=' p-5 shadow w-50 '>
  {/* <!-- Name input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" />
    
  </div>

  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" class="form-control" />
    
  </div>

  {/* <!-- Message input --> */}
  <div class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>

  {/* <!-- Checkbox --> */}
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4"  />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>
</div>
        <Footer/>
    </>
  )
}

export default Contact