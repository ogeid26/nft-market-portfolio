import React from 'react'
import { Button } from './ui/button'

export default function CallToAction() {
  return (
    <div className='flex flex-col m-5 sm:flex-row'>
      <div className='basis-1/2'>

    <p className='text-xs text-transform: uppercase text-col m-2'>Analytics</p>
    <h1 className='text-3xl font-extrabold m-2'> Built-In Analytics To Track Your Nfts</h1>
    <p className='m-4 text-xs'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
    <Button className='mt-5'>View our pricing</Button>
      </div>
      <div className='basis-1/2'>
      <img src='/phone.png'/>
      </div>
    </div>
  )
}
