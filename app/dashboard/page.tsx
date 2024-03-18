import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Overview } from "@/components/dashboard/overview";
import { RecentAppointments } from "@/components/dashboard/recent-appointments";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardList, SquareUser } from "lucide-react";

export default function page() {
  return (
    <section className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi, Welcome back 👋
        </h2>
        <div className="hidden items-center space-x-2 md:flex">
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {summary.map((data, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {data.title}
                </CardTitle>
                {data.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.value}</div>
                <p className="text-xs text-muted-foreground">
                  {data.percentage}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-4 md:col-span-3">
            <CardHeader>
              <CardTitle>Recent Appointments</CardTitle>
              <CardDescription>
                See all your recent appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentAppointments />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const summary = [
  {
    title: "Total Patients",
    value: "2,567",
    percentage: "+8% from last month",
    icon: <SquareUser className="size-4 text-muted-foreground" />,
  },
  {
    title: "Pending Consults",
    value: "45",
    percentage: "-10% from last week",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Total Appointments",
    value: "+12,234",
    percentage: "+19% from last month",
    icon: <ClipboardList className="size-4 text-muted-foreground" />,
  },
  {
    title: "Admitted Now",
    value: "12",
    percentage: "+2 since last hour",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];
