import E from 'tiny-invariant';
import { createServerFn } from '@tanstack/start-client-core';

function i(e) {
  return e.replace(/^\/|\/$/g, "");
}
const a = (e, r, t) => {
  E(t, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const o = `/${i(r)}/${e}`;
  return Object.assign(t, { url: o, functionId: e });
}, s = a("src_actions_addDeviceFn_ts--addDevice_createServerFn_handler", "/_server", (e, r) => d.__executeServer(e, r)), d = createServerFn({ method: "POST" }).validator((e) => {
  if (console.log(e), !(e instanceof FormData)) throw new Error("Invalid form data");
  const r = e.get("serialNumber"), t = e.get("productGroup"), o = e.get("deviceName");
  if (!r || !t || !o) throw new Error("serialNumber and productGroup are required");
  return { serialNumber: r.toString(), productGroup: t.toString(), deviceName: o.toString() };
}).handler(s, async ({ data: { serialNumber: e, productGroup: r, deviceName: t } }) => (console.log({ serialNumber: e, productGroup: r, deviceName: t }), { serialNumber: e, productGroup: r, deviceName: t }));

export { s as addDevice_createServerFn_handler };
//# sourceMappingURL=addDeviceFn-Dg_syz81.mjs.map
