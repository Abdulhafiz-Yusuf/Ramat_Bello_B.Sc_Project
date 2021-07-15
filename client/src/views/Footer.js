import React from 'react'

function Footer() {
  return (
    <div className='container bg-success mt-5 rounded ' style={{ height: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
      <div style={{ height: '20px' }}></div>
      <p className='text-light text-center'> A B.Sc Project by Rahmat Bello<br />
        Department of Computer Science <br />
        Ahmadu Bello University, Zaria
      </p>
    </div>
  )
}

export default Footer