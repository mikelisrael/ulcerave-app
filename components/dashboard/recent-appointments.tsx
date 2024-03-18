import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const appointments = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
    avatar: "/avatars/01.png",
    initials: "OM",
  },
  {
    name: "Sophia Rodriguez",
    email: "sophia.rodriguez@email.com",
    amount: "+$599.00",
    avatar: "/avatars/05.png",
    initials: "SR",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@email.com",
    amount: "+$799.00",
    avatar: "/avatars/06.png",
    initials: "EW",
  },
  {
    name: "Ava Thompson",
    email: "ava.thompson@email.com",
    amount: "+$299.00",
    avatar: "/avatars/07.png",
    initials: "AT",
  },
];

export function RecentAppointments() {
  return (
    <ul className="space-y-8">
      {appointments.map((appointment, index) => (
        <li key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={appointment.avatar} alt="Avatar" />
            <AvatarFallback>{appointment.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {appointment.name}
            </p>
            <p className="text-sm text-muted-foreground">{appointment.email}</p>
          </div>
          <div className="ml-auto font-medium">{appointment.amount}</div>
        </li>
      ))}
    </ul>
  );
}
