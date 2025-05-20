"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import companies  from '@/data/companies'
import Image from 'next/image'




const CompanyCourousal = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
       className={"px-0 ml-24  lg:px-24 lg:ml-16 my-16 "}
    >
       <CarouselContent  className={"flex items-center"}  >
            {
                 companies.map((company, index) => (
                <CarouselItem className="basis-1/1 md:basis-1/2 lg:basis-1/3 " key={index} >
                        <Image  src={company.path}  alt={company.name}  width={200} height={80}/> 
                    </CarouselItem>
                 ))

            }
        </CarouselContent>
    </Carousel>
  )
}

export default CompanyCourousal