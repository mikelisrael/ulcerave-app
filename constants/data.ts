import { NavItem } from "@/types";

export type Patient = {
  id: string;
  name: string;
  gender: "Male" | "Female";
  verified: boolean;
  status: string;
};

export const patients: Patient[] = [
  {
    id: "#ABC123",
    name: "Candice Schiner",
    gender: "Female",
    verified: false,
    status: "completed",
  },
  {
    id: "#DEF456",
    name: "John Doe",
    gender: "Male",
    verified: true,
    status: "scheduled",
  },
  {
    id: "#GHI789",
    name: "Alice Johnson",
    gender: "Female",
    verified: true,
    status: "completed",
  },
  {
    id: "#JKL012",
    name: "David Smith",
    gender: "Male",
    verified: false,
    status: "scheduled",
  },
  {
    id: "#MNO345",
    name: "Emma Wilson",
    gender: "Female",
    verified: true,
    status: "completed",
  },
  {
    id: "#PQR678",
    name: "James Brown",
    gender: "Male",
    verified: false,
    status: "scheduled",
  },
  {
    id: "#STU901",
    name: "Laura White",
    gender: "Female",
    verified: true,
    status: "completed",
  },
  {
    id: "#VWX234",
    name: "Michael Lee",
    gender: "Male",
    verified: false,
    status: "scheduled",
  },
  {
    id: "#YZA567",
    name: "Olivia Green",
    gender: "Female",
    verified: true,
    status: "completed",
  },
  {
    id: "#BCD890",
    name: "Robert Taylor",
    gender: "Male",
    verified: false,
    status: "scheduled",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Patients",
    href: "/dashboard/patients",
    icon: "user",
    label: "patients",
  },
  {
    title: "Employees",
    href: "/dashboard/employees",
    icon: "employee",
    label: "employees",
  },
  // {
  //   title: "Profile",
  //   href: "/dashboard/profile",
  //   icon: "profile",
  //   label: "profile",
  // },
  // {
  //   title: "Kanban",
  //   href: "/dashboard/kanban",
  //   icon: "kanban",
  //   label: "kanban",
  // },
  // {
  //   title: "Login",
  //   href: "/",
  //   icon: "login",
  //   label: "login",
  // },
];
