import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"
import code from "./Images/code.jpg";
import Navbar from './Navbar';

function Home() {
  return ( 
    <>
    <Navbar/>         
     <section id="header" class="d-flex align-items-center">
      <div class="container-fluid nav_bg">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row">
            <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Always <br />  <strong class="brand-name">ready-to-code.</strong></h1>
              <h2 className="my-3">
              The developer platform for on-demand cloud <br/>development environments. Create software faster <br/>and more securely.
              </h2>
              <div class="mt-3">
                <Link to="/landing" class="btn-get-started">Start Coding.</Link>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 header-img">
              <img src={code} class="img-fluid home-img" alt="home-img"/>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Home
