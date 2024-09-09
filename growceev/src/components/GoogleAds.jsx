"use client"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"

export default function GoogleAds() {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-white">
      <main className="flex flex-col items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Google Ads</h1>
        <h2 className="text-3xl font-semibold mb-6">Your Success, Our Ads</h2>
        <p className="text-lg mb-8 mx-96">
        The digital landscape is competitive. To stand out, you need a strategic approach to Google Ads. Our team has a proven track record of delivering exceptional results for our clients. Here's why you should partner with us
        </p>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full">
          Let's Talk
          <ArrowRightIcon className="ml-2 w-4 h-4"/>
        </Button>
      </main>
      <section className="grid grid-cols-3 gap-8 px-4 lg:px-40 lg:py-10 text-lg">
        <div className="flex flex-col justify-evenly items-center">
          <div className="">
            <span className="font-semibold absolute left-96">Keyword Research</span>
          </div>
          <div className="">
            <span className="font-semibold absolute left-[300px]">Content Creation</span>
          </div>
          <div className="">
            <span className="font-semibold absolute left-96">Competitor Analysis</span>
          </div>
        </div>
        <div className="flex justify-center">
          <LineChart className="w-full max-w-lg aspect-[4/3]"/>
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <div className="">
            <span className="font-semibold absolute right-[400px]">Link Building</span>
          </div>
          <div className="">
            <span className="font-semibold absolute right-[280px]">Bespoke Campaigns</span>
          </div>
          <div className="">
            <span className="font-semibold absolute right-[370px]">Regular Updates</span>
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


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
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
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
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
        colors={["#2563eb", "#e11d48"]}
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