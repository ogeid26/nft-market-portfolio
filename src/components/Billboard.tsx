import React from 'react'
import { Button } from './ui/button'

export default function Billboard() {
  return (
      <div className="max-w-md mx-auto bg-slate-400 rounded-xl shadow-md md:max-w-3xl">
  <div className="md:flex">
    <div className="p-3  flex flex-col items-center place-content-center">
      <div>
      <p className='font-bold text-sm'>Are you ready?</p>
      </div>
      <div>
      <p className=" block mt-1 text-2xl leading-tight font-medium text-black hover:underline">Be a Part Of the Next Big Thing</p>
      </div>
      <div>
      <Button className='rounded-3xl block mt-3'>Get Started</Button>
      </div>
    </div>
  </div>
</div>

  )
}
