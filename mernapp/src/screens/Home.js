import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
  
    <div>
      <div>
        <Navbar />
      </div>
        <div>
          <div className="card mt-3" style={{ "width": "18rem","maxHeight":"360px" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is some important 
              </p>
              <div className='container w-100'></div>
              <select className='m-2 h-100 w-100 bg-success'>
                {
                  Array.from(Array(6),(i)=>{
                    return (
                      <option></option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
