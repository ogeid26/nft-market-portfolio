import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export default function Sponsored() {
  return (
    <div>
        <p> Featured on</p>
        <div className='flex flex-row m-4 gap-x-5'>
           <Carousel className='bg-gray-800'>
           <CarouselContent>

            <CarouselItem className='basis-1/4'>
            <img src='/techcrunch.png'width={80} height={80} />
            </CarouselItem>

            <CarouselItem className='basis-1/4'>
            <img src='/fastcompany.png'width={80} height={80} />
            </CarouselItem>

            <CarouselItem className='basis-1/4'>
            <img src='/mit.png'width={30} height={30} />
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
