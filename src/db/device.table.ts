import { db } from "./config";
import { DeviceUpdate, Device, NewDevice } from "./schema.types";

export async function findDeviceById(id: string) {
  return await db
    .selectFrom("device")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function findDevices(criteria: Partial<Device>) {
  let query = db.selectFrom("device");

  if (criteria.id) {
    query = query.where("id", "=", criteria.id); // Kysely is immutable, you must re-assign!
  }

  if (criteria.serial_number) {
    query = query.where("serial_number", "=", criteria.serial_number);
  }

  if (criteria.serial_number !== undefined) {
    query = query.where(
      "serial_number",
      criteria.serial_number === null ? "is" : "=",
      criteria.serial_number,
    );
  }

  if (criteria.name) {
    query = query.where("name", "=", criteria.name);
  }

  if (criteria.product_group_id) {
    query = query.where("product_group_id", "=", criteria.product_group_id);
  }

  return await query.selectAll().execute();
}

export async function updateDevice(id: number, updateWith: DeviceUpdate) {
  await db.updateTable("device").set(updateWith).where("id", "=", id).execute();
}

export async function createDevice(device: NewDevice) {
  return await db
    .insertInto("device")
    .values(device)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function deleteDevice(id: number) {
  return await db
    .deleteFrom("device")
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirst();
}
