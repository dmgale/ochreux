//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)) // Test Loader: Set below to async, await delay(2000)

import { Task1 } from '@/components/shared/tasks/task1'
import { Code, Paintbrush } from 'lucide-react'
import { Task2 } from '../../components/shared/tasks/task2'
import { Task3 } from '../../components/shared/tasks/task3'

const HomePage = () => {
  return (
    <>
      <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg border mb-4">
        <div className="flex items-center gap-2">
          <Code className="text-green-600 w-4 h-4" />
          <span className="font-bold"> Project stack</span>
          <span className="text-sm text-gray-600">
            Next.js 19, React 19 + TypeScript, ShadCN UI, Tailwind CSS, Prisma
            (Postgres, serverless). :{' '}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Paintbrush className="text-blue-600 w-4 h-4" />
          <span className="font-bold"> Design input</span>
          <span className="text-sm text-gray-600">
            Figma files only (Cart Item, CartList + Summary). No ongoing design
            collaboration. Assumptions declared.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg border mb-1">
        <Task1 />
      </div>
      <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg border mb-1">
        <Task2 />
      </div>
      <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg border mb-1">
        <Task3 />
      </div>
    </>
  )
}

export default HomePage
