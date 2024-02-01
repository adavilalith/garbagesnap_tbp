import React from 'react';
import {Link} from "react-router-dom"

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='text-center bg-image'
        style={{ backgroundImage: "url('https://media.gettyimages.com/id/565878653/photo/close-up-of-organized-recycling-bin.jpg?s=612x612&w=0&k=20&c=f1SZrBmFmFTTKDKLkqmyNtyr9iDLZIQhgtmctkaMi8s=')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',height:400}}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h5 className='mb-2'>Welcome to</h5>
              <h1 className='mb-3 display-4'><strong>Garbage Snap</strong></h1>
              <h5 className='mb-5'>A initiative to promote sustainability</h5>
              <Link to="/SendSnap" className='btn btn-outline-light btn-lg' href='#!' role='button'>
                <strong>Send Snap</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}