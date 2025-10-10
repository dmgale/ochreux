'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Task2() {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between items-center w-full">
            <span>Task 2: UX Section</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              On a single sheet of A4 (or thereabouts) map a user journey
              showing how a typical office worker might go about getting their
              daily lunch:
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Checkbox id="task-1" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="task-1">User flow and scalability</Label>
                  <p className="text-muted-foreground text-sm">
                    Include any aspects / elements you feel are relevant to
                    establish context of the user flow and increase its utility
                    for further use.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="task-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="task-2">Topics for exploration</Label>
                  <p className="text-muted-foreground text-sm">
                    Based on the user journey, highlight potential topics which
                    may be interesting to explore further, and how you would
                    suggest doing so.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="task-3" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="task-3">Assumptions</Label>
                  <p className="text-muted-foreground text-sm">
                    List any assumptions you needed to take in order to complete
                    the journey, and optionally discuss impacts if an assumption
                    was incorrect.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="text-white my-4"
                onClick={() => (window.location.href = '/journey')}
              >
                VIEW SOLUTION
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
