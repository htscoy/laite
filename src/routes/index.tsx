import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "../components/DataTable";
import { Topbar } from "../components/Topbar";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Topbar />
      <main className="m-auto max-w-7xl px-8">
        <h1 className="font-bold text-lg">Devices</h1>
        <DataTable />
      </main>
    </>
  );
}
