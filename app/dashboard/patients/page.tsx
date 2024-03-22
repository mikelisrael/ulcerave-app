// import BreadCrumb from "@/components/breadcrumb";
import BreadCrumbDisplay from "@/components/layout/BreadCrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { patients } from "@/constants/data";

export default function PatientsPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumbDisplay />
        <UserClient data={patients} />
      </div>
    </>
  );
}
