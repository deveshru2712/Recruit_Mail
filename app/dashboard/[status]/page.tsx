import Mail from "@/components/User/Mail";
import Navbar from "@/components/User/Navbar";
import Sidebar from "@/components/User/Sidebar";

export default function page() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="border-b border-slate-50/20">
        <Navbar />
      </div>
      <div className="h-full flex items-center">
        <Sidebar />
        <Mail />
      </div>
    </div>
  );
}
