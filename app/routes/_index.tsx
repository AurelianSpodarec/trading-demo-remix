import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
};

function Index() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Landing Page</h1>

            <div className="flex flex-col">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard/trades">Trades</Link>
            </div>
        </div>
    );
}

export default Index;
