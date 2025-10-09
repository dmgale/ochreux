'use client'

import cartData from '@/app/db/cart-data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function Task1() {
  const prettyJson = JSON.stringify(cartData, null, 2)
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex justify-between items-center w-full">
            <span>Task 1: UI Section</span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 text-balance">
              <p>
                We would like you to build a cart page for an e-commerce site,
                following the provided design mockups. Regardless of where you
                get to, wed like you to submit to us via a public repo. Please
                implement the cart UI in Next.js, using the provided cart data
                below. Use Tailwind CSS for styling.
              </p>
              <p>
                {' '}
                <a
                  href="https://www.figma.com/design/bx3dMISH37e9iViYmhMvm0/UX-engineer-test?node-id=11-4112&m=dev"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  FIGMA DESIGN
                </a>
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Checkbox id="task-1" defaultChecked />
                  <div className="grid gap-2">
                    <Label htmlFor="task-1">Functionality</Label>
                    <p className="text-muted-foreground text-sm">
                      The Remove button should remove the selected item from the
                      cart.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="task-2" defaultChecked />
                  <div className="grid gap-2">
                    <Label htmlFor="task-2">Please outline in writing:</Label>
                    <p className="text-muted-foreground text-sm">
                      The process / steps you would take to complete the task;
                      and What further points you would want to cover to ensure
                      the page is ready for production.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="task-3" defaultChecked />
                  <div className="grid gap-2">
                    <Label htmlFor="task-3">
                      After your coding time is complete
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      <ul>
                        <li>
                          Please note any steps that you werent able to get to.
                        </li>
                        <li>
                          Note any assumptions you made to complete, or
                          additional thoughts you had while completing the work.
                        </li>
                        <li>
                          A summary of how we could go about improving the page
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <p>Example Data:</p>
                {prettyJson}
                <Button
                  size="lg"
                  className="text-white my-4"
                  onClick={() => (window.location.href = '/cart')}
                >
                  VIEW SOLUTION
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
