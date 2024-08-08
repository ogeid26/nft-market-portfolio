import React from 'react'
import { Button } from './ui/button'

export default function CallToAction() {
  return (
    <div className='flex flex-col m-5 sm:flex-row'>
      <div className='basis-1/2'>

    <p className='text-xs text-transform: uppercase text-col m-2'>Get our App</p>
    <h1 className='text-3xl font-extrabold m-2'>Browse Nfts from your smartphone</h1>
    <p className='m-4 text-xs'>Our Krypto app is the easiest way to keep track of your assets when you’re on the go.</p>
    <Button className='mt-5 border-0 bg-purple'>Download on IOS</Button>
      </div>
      <div className='basis-1/2'>
      <img src='/phone.png'/>
      </div>
    </div>
  )
}
