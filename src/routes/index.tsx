import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main className="p-8">
      <h1 className="font-bold text-lg">Devices</h1>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Serial number</th>
            <th>Product Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apple Macbook Air 15" (2025)</td>
            <td>SZ90378913903</td>
            <td>Laptop</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Apple Macbook Air 15" (2025)</td>
            <td>SZ90378913903</td>
            <td>Laptop</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
