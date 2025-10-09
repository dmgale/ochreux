import { Angry, HandHeart, LandPlot } from 'lucide-react'
import { JSX } from 'react'

function TableLegend(): JSX.Element {
  return (
    <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg border mb-4">
      <span className="font-semibold text-sm text-gray-700">Legend:</span>

      <div className="flex items-center gap-2">
        <LandPlot className="text-green-600 w-4 h-4" />
        <span className="text-sm text-gray-600">Action</span>
      </div>

      <div className="flex items-center gap-2">
        <Angry className="text-red-600 w-4 h-4" />
        <span className="text-sm text-gray-600">Pain Point</span>
      </div>

      <div className="flex items-center gap-2">
        <HandHeart className="text-purple-600 w-4 h-4" />
        <span className="text-sm text-gray-600">Emotion</span>
      </div>
    </div>
  )
}

export default TableLegend
