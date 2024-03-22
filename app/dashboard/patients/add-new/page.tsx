import BreadCrumbDisplay from "@/components/layout/BreadCrumb";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumbDisplay />
      </div>
    </ScrollArea>
  );
};

export default page;
