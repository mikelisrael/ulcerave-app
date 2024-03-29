"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Patient } from "@/constants/data";
import { ClipboardList, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { ScheduleAppointment } from "./schedule-appointment";


interface PatientClientProps {
  data: Patient[];
}

export const UserClient: React.FC<PatientClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Patients (${data.length})`}
          description="Schedule appointments, view medical records, and more."
        />

        <div className="space-x-3">
          <ScheduleAppointment />
          <Button
            className="text-xs md:text-sm"
            onClick={() => router.push(`/dashboard/patients/add-new`)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
