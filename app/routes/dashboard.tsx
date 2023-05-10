import { Outlet } from "@remix-run/react";

function DashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Dashboard #</h1>

            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default DashboardPage;
