import { createServerFn } from "@tanstack/react-start";

interface DeviceData {
  serialNumber: string;
  productGroup: string;
  deviceName: string;
}

export const addDevice = createServerFn({ method: "POST" })
  .validator((data: DeviceData) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid form data");
    }
    const serialNumber = data.get("serialNumber");
    const productGroup = data.get("productGroup");
    const deviceName = data.get("deviceName");

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
    console.log({ serialNumber, productGroup, deviceName });
    return { serialNumber, productGroup, deviceName };
  });
