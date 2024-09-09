"use client"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"

export default function MetaAds() {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-white py-10">
      <main className="flex flex-col items-center text-center pt-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Meta Ads</h1>
        <h2 className="text-3xl font-semibold mb-6">Your Success, Our Ads</h2>
        <p className="text-lg mb-8 mx-96">
            Skyrocket Your Click-Through Rates with Our Expert
            Meta Ads Optimization Services
        </p>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full">
          Let's Talk
          <ArrowRightIcon className="ml-2 w-4 h-4"/>
        </Button>
      </main>
      <section className="grid grid-cols-3 gap-8 px-4 lg:px-40 lg:py-10 text-lg">
        <div className="flex flex-col justify-evenly items-center">
          <div className="">
            <span className="font-semibold absolute left-72">Industry Leading Conversion Rates</span>
          </div>
          <div className="">
            <span className="font-semibold absolute left-[350px]">Content Creation</span>
          </div>
          <div className="">
            <span className="font-semibold absolute left-72">Expert Campaign Management</span>
          </div>
        </div>
        <div className="flex justify-center">
          <LineChart className="w-full max-w-lg aspect-[4/3]"/>
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <div className="">
            <span className="font-semibold absolute right-[400px]">Data Driven Strategies</span>
          </div>
          <div className="">
            <span className="font-semibold absolute right-[450px]">Proven ROI</span>
          </div>
          <div className="">
            <span className="font-semibold absolute right-[420px]">Bespoke Campaigns</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 23 },
              { x: "Feb", y: 117 },
              { x: "Mar", y: 41 },
              { x: "Apr", y: 125 },
              { x: "May", y: 56 },
              { x: "Jun", y: 134 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 80 },
              { x: "Feb", y: 58 },
              { x: "Mar", y: 197 },
              { x: "Apr", y: 98 },
              { x: "May", y: 116 },
              { x: "Jun", y: 174 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#34d399", "#fbbf24"]} // Changed colors to green and yellow
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
