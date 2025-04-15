import { createServerFn } from "@tanstack/react-start";
import { v4 as uuidv4 } from "uuid";
import { createDevice } from "~/db/device.table";

interface DeviceData {
  id: string;
  serialNumber: string;
  productGroup: string;
  deviceName: string;
}

export const addDevice = createServerFn({ method: "POST" })
  .validator((data: DeviceData) => {
    const { serialNumber, productGroup, deviceName } = data;
    if (!serialNumber || !productGroup || !deviceName) {
      throw new Error("serialNumber and productGroup are required");
    }
    return {
      serialNumber: serialNumber.toString(),
      productGroup: productGroup.toString(),
      deviceName: deviceName.toString(),
    };
  })
  .handler(async ({ data: { serialNumber, productGroup, deviceName } }) => {
    const id = uuidv4();
    createDevice({
      id,
      serial_number: serialNumber,
      product_group_id: 1,
      name: deviceName,
    });
    return { serialNumber, productGroup, deviceName };
  });
