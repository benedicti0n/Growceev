
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#e0e7ff]">
      <header className="flex items-center justify-between p-6">
        <div className="text-4xl font-bold text-blue-600">Q</div>
        <nav className="flex items-center space-x-8 text-lg">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <a href="#" className="hover:text-gray-700">
            Testimonials
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-gray-700 flex items-center">
              Services
              <ChevronDownIcon className="ml-1 w-4 h-4" />
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-700">
            Blogs
          </a>
          <Button variant="outline" className="border-2 border-gray-700 px-4 py-2 rounded-full">
            Let's Talk
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Button>
        </nav>
      </header>
      <main className="flex flex-col items-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">SEO</h1>
        <h2 className="text-3xl font-semibold mb-6">Partner with us for long term SEO success</h2>
        <p className="text-lg mb-8">
          Your Partner in SEO Success. We offer end-to-end SEO services, from content creation to link building, with a
          relentless focus on results. Our open, collaborative process keeps you informed every step of the way.
          Leveraging our team's deep expertise and a proven methodology, we deliver exceptional outcomes through
          meticulous attention to detail.
        </p>
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full">
          Let's Talk
          <ArrowRightIcon className="ml-2 w-4 h-4"/>
        </Button>
      </main>
      <section className="grid grid-cols-2 gap-8 px-4 py-20 text-lg">
        <div className="space-y-8">
          <div className="flex items-center">
            <span className="font-semibold">Keyword Research</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Content Creation</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Competitor Analysis</span>
          </div>
        </div>
        <div className="flex justify-center">
          <LineChart className="w-full max-w-lg aspect-[4/3]" />
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-end">
            <span className="font-semibold">Link Building</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="font-semibold">Bespoke Campaigns</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="font-semibold">Regular Updates</span>
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