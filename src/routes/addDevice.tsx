import { createFileRoute } from "@tanstack/react-router";
import { AddDeviceForm } from "../components/AddDeviceForm";

export const Route = createFileRoute("/addDevice")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AddDeviceForm />;
}
