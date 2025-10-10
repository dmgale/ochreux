import PageTitle from '@/components/page-title'
import { DataTable } from '@/components/shared/datatable'
import TableLegend from '@/components/shared/datatable/table-legend'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import journeyData from '@/db/journey-data'
import { columns } from './columns'

const JourneyPage = () => {
  return (
    <div>
      <div className="container">
        <PageTitle title="UX Section" />
        <h1 className="text-2xl font-semibold py-5">
          Context Setting and Segmentation
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Segmentation</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-decimal list-inside space-y-1">
                  <span className="font-bold">Behavioral Habit</span>
                  <li>Repeat Purchasers (habitual)</li>
                  <li>Variety Seekers (exploratory)</li>
                </ol>
                <ol className="list-decimal list-inside space-y-1 pt-4">
                  <span className="font-bold">Channel Usage</span>
                  <li>App Bookers (digital)</li>
                  <li>In-Store Purchasers (physical/in-person)</li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Segment Profiles</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <span className="font-bold">
                      Repeat Purchaser/App Booker:
                    </span>{' '}
                    Tech-savvy, values speed and predictability; likely prefers
                    minimal friction.
                  </li>
                  <li>
                    <span className="font-bold">
                      Repeat Purchaser/In-Store:
                    </span>{' '}
                    Routine-driven, enjoys a break/walk, values friendly staff;
                    wary of crowded/noisy spaces.
                  </li>
                  <li>
                    <span className="font-bold">
                      Variety Seeker/App Booker:
                    </span>{' '}
                    Curious, enjoys discovery and novelty; values app-based
                    choice and reviews.
                  </li>
                  <li>
                    <span className="font-bold">Variety Seeker/In-Store:</span>{' '}
                    Social, enjoys group exploration and trying new things;
                    motivated by peer input and physical experience.
                  </li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Office Cutlure Context</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-disc list-inside space-y-3">
                  <li>
                    Urban office with 30–60 minute flexible lunch breaks
                    (eliminates restaurants/ could narrow choice if less),
                    multiple food options (cafés, canteens, and delivery)
                  </li>
                  <li>
                    tech adoption is common but social/group lunches are also
                    valued.
                  </li>{' '}
                  <li>
                    Both solo and group flows are present; some hybrid/remote
                    flexibility.
                  </li>
                  <li>
                    Budget £10 - £15: range avoids need for self prep meals and
                    rules out premium dining. Allows for deliveries
                  </li>
                  <li>No Dietary Requirements: avoids narrow choices</li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <h1 className="text-2xl font-semibold py-8">
          User Journey Flow with Action, Pain Points and Emotions
        </h1>
        <TableLegend />
        <DataTable columns={columns} data={journeyData} />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 py-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>UserFlow Highlights</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-decimal list-inside space-y-1">
                  <span className="font-bold">Key Pain Points</span>
                  <li>Lunch availability: Meetings?</li>
                  <li>Indecision Fatigue (too much choice)</li>
                  <li>Wait times (for prep or delivery)</li>
                  <li>Technical / payment issues</li>
                  <li>Option availability</li>
                  <li>Lost productivity</li>
                  <li>Dissatisfied / lunch was not as expected</li>
                  <li>Post food fatigue / regret</li>
                </ol>
                <ol className="list-decimal list-inside space-y-1 pt-4">
                  <span className="font-bold">Key Opportunities</span>
                  <li>Habitual Formation / Loyalty programs</li>
                  <li>Accurate ETAs / Order queue visibility</li>
                  <li>Productivity during waiting</li>
                  <li>Solo / Group Pre-ordering, Smooth Payment</li>
                  <li>Eating environments</li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Assumptions</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Multiple lunch channels/tech are always available; if not,
                    user frustration or journey complexity changes.{' '}
                  </li>
                  <li>
                    Office worker means an environment with group and solo
                    norms. Note, remote or hybrid working could make social pain
                    points are less relevant.
                  </li>
                  <li>
                    Workday schedules allow for lunch decision-making;
                    inflexible routines compress or skip key stages.
                  </li>
                  <li>
                    If tech adoption or group culture is different, pain points
                    and optimization priorities shift substantially.
                  </li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Topics to Explore Further</CardTitle>
              <CardDescription className="pt-4">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Why do Repeat Purchasers skip consideration. Can their
                    experience be even faster or is there risk of boredom?
                  </li>
                  <li>
                    How do Variety Seekers handle menu or group complexity;
                    could UX features reduce overload (e.g., suggesting combos,
                    limiting options)?
                  </li>
                  <li>
                    Are tech or physical environment pain points more critical
                    (app lags vs. store noise)?
                  </li>
                  <li>
                    Is group decision-making a source of friction or enjoyment?
                  </li>
                  <li>
                    Are solitary pain points (eating alone, desk interruptions
                    etc) more or less important than social ones?
                  </li>
                  <li>Time between phases, and are any every skipped?</li>
                </ol>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default JourneyPage
