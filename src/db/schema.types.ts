import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  device: DeviceTable;
}

export interface DeviceTable {
  id: Generated<string>;
  name: string;
  serial_number: string;
  product_group_id: number;
}

export type Device = Selectable<DeviceTable>;
export type NewDevice = Insertable<DeviceTable>;
export type DeviceUpdate = Updateable<DeviceTable>;
