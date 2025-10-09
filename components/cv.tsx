import { Award, Code, Dumbbell, Mail, MapPin, Phone, Plane } from 'lucide-react'

const DavidGaleCV = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white">
      {/* Header */}
      <header className="border-b-4 border-orange-400 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">DAVID GALE</h1>
        <h2 className="text-xl text-orange-400 font-semibold mb-4">
          PRINCIPAL FRONT-END ENGINEER
        </h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+44 (0)7727 664 517</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>mrdavidmgale@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Surrey, United Kingdom</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {/* Summary */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1">
              SUMMARY
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Accomplished Design and Technology Lead with 10+ years hands on
              skill set across UI/UX Design and Software Development, working
              across multiple industries globally in both agency & client-side
              roles.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              High energy and inspiring leader with the ability to think both
              strategically and creatively, I love to drive change and build
              empowered teams who deliver and execute well thought out
              innovative experiences, putting the user at the heart of
              everything we (my team) do.
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-400 pb-1">
              PROFESSIONAL EXPERIENCE
            </h3>

            {/* JATO Dynamics */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Team Lead & Principal for Front-end Engineering
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    JATO Dynamics Ltd, Uxbridge (UK)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Jan 2020 – Present
                </span>
              </div>
              <p className="text-gray-700 mb-2 italic">
                Responsible for the design direction and technical delivery of
                all JATO data platform web-based software; internal tooling,
                customer facing products, mobile apps and underlying services
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Established the only UI/UX discipline within JATO Data
                  Engineering; recruited and manage an in house high-performing
                  motivated and focused dual discipline team of 18
                </li>
                <li>
                  Partner with other Heads in Engineering, Data Platform and
                  Product on joint Strategic Initiatives
                </li>
                <li>
                  Set user research, design and development (code quality)
                  standards for UI development
                </li>
                <li>
                  Migrated SPAs to scalable monorepo architecture for
                  standardization, shared tooling and faster CI
                </li>
                <li>
                  Create and maintain JATOs own custom React UI component
                  library; now migrating to fully accessible headless library
                  utilizing React Aria components
                </li>
              </ul>

              <div className="mt-3">
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'TypeScript',
                    'Nx',
                    'React Query',
                    'React Router',
                    'Storybook',
                    'Azure DevOps',
                    'React Aria',
                    'Figma',
                    'HTML5',
                    'CSS',
                    'Node',
                    'GA4',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Whitespace Work Software */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Software Engineer (Front-end)
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    Whitespace Work Software Ltd, AllOnMobile Ltd, Woking (UK)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Jan 2018 – Dec 2020
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Support the design and development of AOM applications with
                  microservice infrastructure
                </li>
                <li>
                  Responsible for research, design, UI development (Ionic with
                  AngularJS) and maintenance of core SPAs
                </li>
              </ul>
            </div>

            {/* Dixons Carphone */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Senior Software Developer
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    Dixons Carphone, Acton (UK) / London (UK)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Dec 2017 – Apr 2018
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Supported design and development of MyKnowhow App with Product
                  & Experience team
                </li>
                <li>
                  Worked across 8 workstreams to create MyAccount & e-receipt
                  functionality
                </li>
                <li>
                  Design sprint for clickable prototyping and customer testing
                </li>
              </ul>
            </div>

            {/* Care For Yourself */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Software Engineer
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    Care For Yourself Ltd, Maidenhead (UK) / Dubai (UAE)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Jan 2016 – Nov 2017
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Supported launch and growth in UK and Middle East, managing
                  digital needs
                </li>
                <li>
                  Provided website, app development and UX/UI services for
                  health products
                </li>
                <li>
                  Managed relationship with PR, Visual and creative agencies in
                  Dubai
                </li>
              </ul>
            </div>

            {/* IMonitorMy */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Director & Software Developer
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    IMonitorMy Ltd, Maidenhead (UK)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Mar 2014 – Jan 2019
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Designed, built and launched MyINR mobile App (25k+ active
                  user base)
                </li>
                <li>
                  Conducted market analysis, user testing & prototyping,
                  clinical trials
                </li>
                <li>Developed subscription-based service with MVP approach</li>
              </ul>
            </div>

            {/* IBM Roles */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    IBM Technical Engineer / Advisor
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    IBM UK / Tectrade Computers Ltd
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Dec 2010 – Feb 2014
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Delivered 120% year on year growth, awarded position in IBM
                  Hundred Percent Club
                </li>
                <li>
                  Responsible for technical solution advisement to 85 General
                  Business clients
                </li>
                <li>
                  Ran data management workshops and created strategic
                  recommendations
                </li>
              </ul>
            </div>

            {/* Disney Intern */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    UI/UX DAET Intern
                  </h4>
                  <p className="text-orange-400 font-semibold">
                    The Walt Disney Company, Hammersmith (UK)
                  </p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  Jun 2008 – Jul 2009
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>
                  Delivered design brand initiatives for Disneys central media
                  network distribution
                </li>
                <li>
                  Supported wireframing and early development for Screening Room
                  portal
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Strengths */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1">
              STRENGTHS
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>
                Bridging gap between technical and non-technical stakeholders
              </li>
              <li>Driving cross-functional strategic objectives</li>
              <li>Set architectural direction and standards</li>
              <li>Design System and UI Component strategy</li>
              <li>Forward thinking and vision setting</li>
              <li>Research and Usability Testing</li>
            </ul>
          </section>

          {/* Expertise */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1">
              EXPERTISE
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>UI Software Development</li>
              <li>Collaboration</li>
              <li>Adaptability</li>
              <li>Problem solving</li>
              <li>Leadership</li>
            </ul>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1">
              EDUCATION
            </h3>
            <div className="text-sm">
              <p className="font-bold text-gray-900">
                BSc (Hons) International Business & Management
              </p>
              <p className="text-gray-700">Aston University, Birmingham</p>
              <p className="text-gray-600">2006 – 2010</p>
              <p className="text-orange-400 font-semibold">2.1</p>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1 flex items-center gap-2">
              <Award className="w-5 h-5" />
              AWARDS
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-gray-900">
                  IBM Advanced Masterclass
                </p>
                <p className="text-gray-700">IBM Global Sales School</p>
                <p className="text-orange-400">Distinction</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">
                  Tom Wylie Memorial Prize
                </p>
                <p className="text-gray-700 text-xs">
                  Outstanding Performance in Managing Employee Relations
                </p>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-orange-400 pb-1">
              INTERESTS
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Dumbbell className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Playing Tennis / Gym / keeping fit</span>
              </li>
              <li className="flex items-start gap-2">
                <Plane className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Travelling</span>
              </li>
              <li className="flex items-start gap-2">
                <Code className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Personal SPA projects - addressing real world data problems
                </span>
              </li>
            </ul>
          </section>

          {/* References */}
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-2 border-b-2 border-orange-400 pb-1">
              REFERENCES
            </h3>
            <p className="text-sm text-gray-600 italic">
              Available upon request
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
export default DavidGaleCV
