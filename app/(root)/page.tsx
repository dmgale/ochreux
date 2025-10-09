//const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)) // Test Loader: Set below to async, await delay(2000)

import { Task1 } from '@/components/shared/tasks/task1'
import { Task2 } from '../../components/shared/tasks/task2'
import { Task3 } from '../../components/shared/tasks/task3'

const HomePage = () => {
  return (
    <>
      <Task1 />
      <Task2 />
      <Task3 />
    </>
  )
}

export default HomePage
