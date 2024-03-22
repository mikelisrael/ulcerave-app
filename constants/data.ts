import { NavItem } from "@/types";

export type Patient = {
  id: string;
  name: string;
  gender: "Male" | "Female";
  verified: boolean;
  status: string;
  age: number;
};

export const patients: Patient[] = [
  {
    id: "#ABC123",
    name: "Candice Schiner",
    gender: "Female",
    verified: false,
    status: "completed",
    age: 35,
  },
  {
    id: "#DEF456",
    name: "John Doe",
    gender: "Male",
    verified: true,
    status: "scheduled",
    age: 42,
  },
  {
    id: "#GHI789",
    name: "Alice Johnson",
    gender: "Female",
    verified: true,
    status: "completed",
    age: 28,
  },
  {
    id: "#JKL012",
    name: "David Smith",
    gender: "Male",
    verified: false,
    status: "scheduled",
    age: 50,
  },
  {
    id: "#MNO345",
    name: "Emma Wilson",
    gender: "Female",
    verified: true,
    status: "completed",
    age: 31,
  },
  {
    id: "#PQR678",
    name: "James Brown",
    gender: "Male",
    verified: false,
    status: "scheduled",
    age: 37,
  },
  {
    id: "#STU901",
    name: "Laura White",
    gender: "Female",
    verified: true,
    status: "completed",
    age: 45,
  },
  {
    id: "#VWX234",
    name: "Michael Lee",
    gender: "Male",
    verified: false,
    status: "scheduled",
    age: 29,
  },
  {
    id: "#YZA567",
    name: "Olivia Green",
    gender: "Female",
    verified: true,
    status: "completed",
    age: 33,
  },
  {
    id: "#BCD890",
    name: "Robert Taylor",
    gender: "Male",
    verified: false,
    status: "scheduled",
    age: 39,
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
