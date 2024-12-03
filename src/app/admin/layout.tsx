import React from "react";
import AdminSidebar from "./AdminSidebar";
interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className='flex w-[100%] h-[100%] overflow-hidden'>
        <AdminSidebar />
        <div className='w-[90%] h-[100%]'>
            {children}
        </div>
    </div>
  );
};

export default AdminDashboardLayout;
