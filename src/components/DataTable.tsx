import type { PropsWithChildren } from "react";

function DataTable(props: PropsWithChildren) {
  return (
    <table className="w-full">
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
        <tr>
          <td>1</td>
          <td>Apple Macbook Air 15" (2025)</td>
          <td>SZ90378913903</td>
          <td>Laptop</td>
        </tr>
      </tbody>
    </table>
  );
}

export { DataTable };
