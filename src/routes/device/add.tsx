import { createFileRoute } from "@tanstack/react-router";
import { AddDeviceForm } from "../../components/AddDeviceForm";
import { Topbar } from "../../components/Topbar";

export const Route = createFileRoute("/device/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Topbar />
      <main className="m-auto max-w-2xl px-8">
        <h1 className="font-bold text-2xl my-4">Add device</h1>
        <AddDeviceForm />
      </main>
    </>
  );
}
