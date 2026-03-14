import AdminSidebar from "@/components/layout/admin/AdminSidebar";

export default function PanelLayout({ children }) {
    return (
        <main className="bg-background-dark font-display text-slate-100 overflow-x-hidden">
            <div className="flex h-screen overflow-hidden lg:overflow-auto">

                <AdminSidebar />

                <div className="mt-20 lg:mt-0 w-full overflow-y-auto">
                    {children}
                </div>

            </div>
        </main>
    );
}