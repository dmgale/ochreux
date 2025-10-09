import PageTitle from '@/components/page-title'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  BriefcaseBusiness,
  Code,
  Goal,
  NotebookPen,
  SignpostBig,
  Users,
} from 'lucide-react'

const GoalsPage = () => {
  return (
    <div>
      <div className="container">
        <PageTitle title="My Approach" />
        <h1 className="text-2xl font-semibold py-5">
          30 Day Plan, Objectives, Collaboration and Deliverables
        </h1>
        <div className="p-4 bg-gray-50 rounded-lg border mb-4">
          <div className="flex items-center gap-6 mb-4">
            In this position, my overarching goal is to build the (or strengthen
            existing) foundations for a high-performing UX engineering practice
            that bridges design and development seamlessly, leveraging my
            experience establishing similar practices as I did at JATO. I will
            focus on strong collaboration, rapid delivery confidence, and shared
            design-engineering standards that set the team up for long-term UX
            and front-end success. My track record of building a high-performing
            dual-discipline team (UX/UI), establishing design systems, and
            bridging technical and non-technical stakeholders positions me to
            hit the ground running and deliver meaningful impact quickly. In the
            very short term I will place value on:
          </div>
          {/* Place the icon bullets in a new row below */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                Understand ecosystem (Ochres tailored, managed, end-to-end
                service for Artists and Labels), culture and gaining an
                appreciation for the business model and clients (users)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                Establishing a strong understanding of the technical landscape
                (architecturally and codebase)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <SignpostBig className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                Create awareness of Product Roadmap and strategic initiatives
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                Identify and integrate / collaborate with key stakeholders -
                Design, Product, Data, Engineering, Operations, C-level
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Goal className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                Diagnose opportunities - support short term deliverables (if
                any), identify quick wins, and note mid-long objectives specific
                to UX and UI
              </span>
            </div>
            <div className="flex items-center gap-2">
              <NotebookPen className="text-green-600 w-4 h-4" />
              <span className="text-sm text-gray-600">
                30 Day Plan sets foundation for my 60 and 90 Day Plan
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {/* Week 1 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Week 1</CardTitle>
              <h1>Understand, Connect, and Observe</h1>
              <CardDescription className="pt-4">
                <div className="space-y-4">
                  <div>
                    <span className="font-bold text-foreground">
                      Inputs / Questions
                    </span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>
                        Who are the key stakeholders and how do they
                        collaborate?
                      </li>
                      <li>What are current UX engineering challenges?</li>
                      <li>How is the design system managed and consumed?</li>
                      <li>Technical stack and UI component governance?</li>
                      <li>
                        UX Engineer integration - embedded or centralized?
                      </li>
                    </ol>
                  </div>

                  <div>
                    <span className="font-bold text-foreground">Outputs</span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>Stakeholder map and collaboration touchpoints</li>
                      <li>UI architecture and design system assessment</li>
                      <li>Early quick wins list (i.e. workflow, tooling)</li>
                    </ol>
                  </div>

                  <div>
                    <span className="font-bold text-foreground">
                      My Rationale
                    </span>
                    <p className="py-2">
                      Understanding context and relationships is key to driving
                      impact fast, I would prioritise learning how design,
                      product, and engineering currently align and where
                      friction exists. My experience building a dual-discipline
                      team at JATO taught me that team topology significantly
                      impacts collaboration effectiveness.
                    </p>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Week 2 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Week 2</CardTitle>
              <h1>Audit, Map, and Benchmark</h1>
              <CardDescription className="pt-4">
                <div className="space-y-4">
                  <div>
                    <span className="font-bold text-foreground">
                      Inputs / Questions
                    </span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>Main product surfaces and front-end frameworks?</li>
                      <li>
                        How do accessibility and usability testing feed into
                        development?
                      </li>
                      <li>
                        Established patterns for prototyping and design QA?
                      </li>
                    </ol>
                  </div>

                  <div>
                    <span className="font-bold text-foreground">Outputs</span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>
                        Component library audit (reusability, accessibility,
                        performance)
                      </li>
                      <li>Gap analysis against best practices</li>
                      <li>Visual architecture map of dependencies</li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">
                      My Rationale
                    </span>
                    <p className="py-2">
                      This provides a fact base for prioritisation — aligning
                      stakeholders on whats working and where the biggest
                      UX-engineering value lies. My experience auditing and
                      migrating JATOs component library gives me a proven
                      framework for this assessment. So does moving 8 SPAs into
                      a monorepo architecture.
                    </p>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Week 3 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Week 3</CardTitle>
              <h1>Define Direction and Collaborate on Roadmap</h1>
              <CardDescription className="pt-4">
                <div className="space-y-4">
                  <div>
                    <span className="font-bold text-foreground">
                      Inputs / Questions
                    </span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>Strategic objectives for next 6-12 months?</li>
                      <li>
                        How do design and engineering plan and measure success?
                      </li>
                    </ol>
                  </div>

                  <div>
                    <span className="font-bold text-foreground">Outputs</span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>UX Engineering vision statement and roadmap (v1)</li>
                      <li>Design system governance model proposal</li>
                      <li>Process improvement recommendations</li>
                      <li>Agreement on short-term initiatives</li>
                      <li>Regular leadership touchpoints established</li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">
                      My Rationale
                    </span>
                    <p className="py-2">
                      Co-creating the roadmap builds buy-in and shows early
                      leadership in connecting design, dev, and product
                      strategy. My experience partnering with Heads of
                      Engineering, Data Platform, and Head of Product on joint
                      strategic initiatives has shown me how critical
                      stakeholder alignment is to long-term success.
                    </p>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Week 4 */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Week 4</CardTitle>
              <h1>Deliver Momentum and Set Standards</h1>
              <CardDescription className="pt-4">
                <div className="space-y-4">
                  <div>
                    <span className="font-bold text-foreground">
                      Inputs / Actions
                    </span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>Host design system working session</li>
                      <li>Implement Figma-to-code workflow improvement</li>
                      <li>
                        Establish rituals: weekly sync, docs, PR guidelines
                      </li>
                    </ol>
                  </div>

                  <div>
                    <span className="font-bold text-foreground">Outputs</span>
                    <ol className="list-decimal list-inside space-y-1 mt-2 text-sm">
                      <li>
                        High-impact improvement delivered (accessibility,
                        performance, or tokens)
                      </li>
                      <li>UX Engineering standards documentation</li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">
                      My Rationale
                    </span>
                    <p className="py-2">
                      Ending the first month with tangible improvements and
                      visible leadership ensures credibility and sets the tone
                      for iterative, high-quality UX engineering. This mirrors
                      my approach at JATO where early wins in establishing
                      coding standards and design system governance created
                      momentum for larger transformations. This month will form
                      the foundation for the next 2 and 3 month plan.
                    </p>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default GoalsPage
