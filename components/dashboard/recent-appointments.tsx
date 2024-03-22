import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const appointments = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "completed",
    initials: "OM",
  },
  {
    name: "Sophia Rodriguez",
    email: "sophia.rodriguez@email.com",
    status: "scheduled",
    initials: "SR",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@email.com",
    status: "completed",
    initials: "EW",
  },
  {
    name: "Ava Thompson",
    email: "ava.thompson@email.com",
    status: "completed",
    initials: "AT",
  },
];

export function RecentAppointments() {
  return (
    <ul className="space-y-8">
      {appointments.map((appointment, index) => (
        <li key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage alt="Avatar" />
            <AvatarFallback>{appointment.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {appointment.name}
            </p>
            <p className="text-sm text-muted-foreground">{appointment.email}</p>
          </div>
          <div className="ml-auto">
            <Badge
              variant={
                appointment.status === "scheduled" ? "scheduled" : "completed"
              }
            >
              {appointment.status}
            </Badge>
          </div>
        </li>
      ))}
    </ul>
  );
}
