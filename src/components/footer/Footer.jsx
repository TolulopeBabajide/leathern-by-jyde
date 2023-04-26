import React from 'react'

const Footer = () => {
  return (
    <>
        <footer class="bg-light text-center ">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor:" #3b5998;"}}
        href="/"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor: " #55acee;"}}
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor: "#dd4b39;"}}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor: "#ac2bac;"}}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor: "#0082ca;"}}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        class="btn  btn-floating m-1"
        style={{backgroundColor: "#333333;"}}
        href="#!"
        role="button"
        ><i class="fa-brands fa-github"></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
   
    <p> © 2023 Copyright:Leathern by Jyde</p>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </>
  )
}

export default Footer