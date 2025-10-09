'use client'

import { ColumnDef } from '@tanstack/react-table'
import {
  Angry,
  ArrowRight,
  HandHeart,
  LandPlot,
  Smartphone,
  Store,
} from 'lucide-react'

interface IactionPainpoint {
  action: string
  painPoint: string
  emotion: string
}
export type UserMap = {
  id: string
  userSegment: string
  channel: string
  realiseHunger: IactionPainpoint
  considerOptions: IactionPainpoint
  checkTimeBudget: IactionPainpoint
  researchChoose: IactionPainpoint
  orderPurchase: IactionPainpoint
  waitPrep: IactionPainpoint
  eat: IactionPainpoint
  returnToWork: IactionPainpoint
}

const renderActionPainpoint = (getValue: () => IactionPainpoint) => {
  const data = getValue() as IactionPainpoint
  return (
    <div className="space-y-2">
      <div>
        <div className="flex items-center gap-2">
          <span>
            <LandPlot className="text-green-600" />
          </span>
          <span>{data.action}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span>
            <Angry className="text-red-600" />
          </span>
          <span className="font-medium text-red-600">{data.painPoint}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span>
            <HandHeart className="text-purple-600" />
          </span>
          <span className="font-medium text-purple-600">{data.emotion}</span>
        </div>
      </div>
    </div>
  )
}
const createHeaderWithSubtext = (mainText: string, subText: string) => {
  function HeaderWithSubtext() {
    return (
      <div>
        <div className="flex justify-center items-center gap-1 font-bold text-lg text-blue-800">
          {mainText != 'Complete' ? (
            <>
              {mainText} <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            mainText
          )}
        </div>
        <p className="text-center font-bold text-sm">{subText}</p>
      </div>
    )
  }

  return HeaderWithSubtext
}

export const columns: ColumnDef<UserMap>[] = [
  {
    accessorKey: 'userSegment',
    header: () => (
      <div className="font-bold text-sm text-gray-700">Segment</div>
    ),
    cell: ({ row }) => {
      const segment = row.getValue('userSegment') as string
      return <div className="font-bold">{segment}</div>
    },
  },
  {
    accessorKey: 'channel',
    header: () => (
      <div className="font-bold text-sm text-gray-700">Channel</div>
    ),
    cell: ({ row }) => {
      const channel = row.getValue('channel') as string

      return (
        <div className="flex items-center gap-2">
          {channel === 'In-Store' ? (
            <Store className="w-4 h-4 text-gray-600" />
          ) : channel === 'App' ? (
            <Smartphone className="w-4 h-4 text-gray-600" />
          ) : null}
          <span>{channel}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'realiseHunger',
    header: createHeaderWithSubtext('Awareness', 'Lunchtime Hunger'),
    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('realiseHunger')),
  },
  {
    accessorKey: 'considerOptions',
    header: createHeaderWithSubtext('Consider', 'Options Available'),
    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('considerOptions')),
  },
  {
    accessorKey: 'checkTimeBudget',
    header: createHeaderWithSubtext('Check', 'Time & Budget'),
    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('checkTimeBudget')),
  },
  {
    accessorKey: 'researchChoose',
    header: createHeaderWithSubtext('Research', 'Consideration'),

    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('researchChoose')),
  },
  {
    accessorKey: 'orderPurchase',
    header: createHeaderWithSubtext('Order', 'Acquisition'),

    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('orderPurchase')),
  },
  {
    accessorKey: 'waitPrep',
    header: createHeaderWithSubtext('Wait', 'Prep / Delivery'),
    cell: ({ row }) => renderActionPainpoint(() => row.getValue('waitPrep')),
  },
  {
    accessorKey: 'eat',
    header: createHeaderWithSubtext('Eat', 'Consumption'),
    cell: ({ row }) => renderActionPainpoint(() => row.getValue('eat')),
  },
  {
    accessorKey: 'returnToWork',
    header: createHeaderWithSubtext('Complete', 'Return To Work'),
    cell: ({ row }) =>
      renderActionPainpoint(() => row.getValue('returnToWork')),
  },
]
