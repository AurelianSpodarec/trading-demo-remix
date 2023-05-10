import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
    return [{ title: "New Remix App" }];
};

export default function Index() {
    return (
        <div className="bg-pink-700">
            <h1>Hello</h1>
        </div>
    );
}
