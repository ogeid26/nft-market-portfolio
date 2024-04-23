import React from 'react'
import { Button } from './ui/button'

export default function Analytics() {
  return (
<div className='flex flex-col sm:flex-row  m-5'>

    <div className='basis-1/2'>
      <img src='/analytics.png'/>
    </div>
    <div className='basis-1/2 mt-2'>
    <p className='text-xs text-transform: uppercase text-col m-2'>Analytics</p>
    <h1 className='text-3xl font-extrabold m-2'> Built-In Analytics To Track Your Nfts</h1>
    <p className='m-4 text-xs'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
    <Button className='mt-5 bg-purple'>View our pricing</Button>
    </div>


  </div>

  )
}
