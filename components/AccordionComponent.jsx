import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import faqs  from '@/data/faqs.json'


const AccordionComponent = () => {
  return (

    <Accordion type="single" collapsible>
        {

            faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} >
                     <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent >{faq.answer}</AccordionContent>
                </AccordionItem>
            ))
        }

    </Accordion>
        
  )
}

export default AccordionComponent