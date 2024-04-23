import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export default function Sponsored() {
  return (
    <div >
        <p className='ml-5 '> Featured on</p>

        <div className='flex flex-row m-6 gap-x-5'>
           <Carousel 
           opts={{
            align: "start",
            loop: true
           }}
           className='bg-gray-800 w-full max-w-sm rounded-md border-4'>
           <CarouselContent className=' flex flex-row rounded-3xl items-center'>

            <CarouselItem className='basis-1/4 pl-4 '>
            <img src='/techcrunch.png'width={200} height={80} />
            </CarouselItem>

            <CarouselItem className='basis-1/4'>
            <img src='/fastcompany.png'width={80} height={80} />
            </CarouselItem>

            <CarouselItem className='basis-1/4'>
            <img src='/mit.png'width={40} height={30} />
            </CarouselItem>

            <CarouselItem className='basis-1/4'>
            <img src='/forbes.png'width={80} height={80} />
            </CarouselItem>
            </CarouselContent> 
            </Carousel> 

        </div>

    </div>
  )
}
