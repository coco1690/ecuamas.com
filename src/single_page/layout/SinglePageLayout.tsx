import { CustomFooter } from "@/components/custom/CustomFooter";
import { CustomHeader } from "@/components/custom/CustomHeader";
import { FloatingWhatsAppButton } from "@/components/custom/FloatingWhatsAppButton";
import { Outlet } from "react-router-dom";

export const SinglePageLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <CustomHeader />

      {/* Main Content */}
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
        <FloatingWhatsAppButton />
      </main>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
};