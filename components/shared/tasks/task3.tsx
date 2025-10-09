'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export function Task3() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between items-center w-full">
            <span>Task 3: 30 Day Approach</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Please imagine that your application has been successful and you
              have been offered the role. We’d like to know what you’d like to
              achieve in the first four weeks in the role. The goal is to set us
              on a good collaborative trajectory.
            </p>
            <p>
              Please describe an ideal approach (i.e. no constraints other than
              time); consider questions / inputs, outputs, and rationale.
            </p>
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="text-white my-4"
                onClick={() => (window.location.href = '/approach')}
              >
                VIEW RESPONSE
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
