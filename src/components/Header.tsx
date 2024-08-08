import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-col md:flex-row '>
        <div className=''>
            <h1 className='text-lg text-transform: uppercase font-bold '>Krypto</h1>
        </div>
        <div className='w-72'>
        </div>

        <div className='flex flex-row space-x-5'>
            <button className='hover:ease-in duration-300 '>about</button>
            <p>pricing</p>
            <p>contact</p>
            <p>buy nfts</p>
        </div>

    </div>
  )
}
