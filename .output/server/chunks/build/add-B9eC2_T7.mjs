import { jsx, jsxs } from 'react/jsx-runtime';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { z as z$1 } from 'zod';
import { createServerFn, startSerializer, mergeHeaders } from '@tanstack/start-client-core';
import { isPlainObject, encode, isRedirect, isNotFound } from '@tanstack/router-core';
import { getHeaders, getEvent } from '@tanstack/start-server-core';

function b({ type: e, label: t, ...n }) {
  return jsxs("div", { className: "py-2 flex flex-col", children: [jsx("label", { children: t }), jsx("input", { ...n, type: e, className: "border rounded-sm py-2 px-1" })] });
}
function D(e) {
  return jsx(b, { ...e, type: "number" });
}
function R(e) {
  return jsx(b, { ...e, type: "text" });
}
function E({ type: e = "submit", children: t, ...n }) {
  return jsx("button", { ...n, type: e, children: t });
}
async function G(e, t, n) {
  var s;
  const d = t[0];
  if (isPlainObject(d) && d.method) {
    const o = d, p = o.data instanceof FormData ? "formData" : "payload", m = new Headers({ ...p === "payload" ? { "content-type": "application/json", accept: "application/json" } : {}, ...o.headers instanceof Headers ? Object.fromEntries(o.headers.entries()) : o.headers });
    if (o.method === "GET") {
      const a = encode({ payload: startSerializer.stringify({ data: o.data, context: o.context }) });
      a && (e.includes("?") ? e += `&${a}` : e += `?${a}`);
    }
    e.includes("?") ? e += "&createServerFn" : e += "?createServerFn", o.response === "raw" && (e += "&raw");
    const y = await n(e, { method: o.method, headers: m, signal: o.signal, ...H(o) }), h = await v(y);
    if ((s = h.headers.get("content-type")) != null && s.includes("application/json")) {
      const a = startSerializer.decode(await h.json());
      if (isRedirect(a) || isNotFound(a) || a instanceof Error) throw a;
      return a;
    }
    return h;
  }
  const u = await v(await n(e, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) })), i = u.headers.get("content-type");
  return i && i.includes("application/json") ? startSerializer.decode(await u.json()) : u.text();
}
function H(e) {
  var _a;
  return e.method === "POST" ? e.data instanceof FormData ? (e.data.set("__TSR_CONTEXT", startSerializer.stringify(e.context)), { body: e.data }) : { body: startSerializer.stringify({ data: (_a = e.data) != null ? _a : null, context: e.context }) } : {};
}
async function v(e) {
  if (!e.ok) {
    const t = e.headers.get("content-type");
    throw t && t.includes("application/json") ? startSerializer.decode(await e.json()) : new Error(await e.text());
  }
  return e;
}
function O(e) {
  return e.replace(/^\/|\/$/g, "");
}
const A = (e, t) => {
  const n = `/${O(t)}/${e}`;
  return Object.assign((...d) => G(n, d, async (u, i) => {
    i.headers = mergeHeaders(getHeaders(), i.headers);
    const o = await $fetch.native(u, i), p = getEvent(), m = mergeHeaders(o.headers, p.___ssrRpcResponseHeaders);
    return p.___ssrRpcResponseHeaders = m, o;
  }), { url: n, functionId: e });
}, P = A("src_actions_addDeviceFn_ts--addDevice_createServerFn_handler", "/_server"), $ = createServerFn({ method: "POST" }).validator((e) => {
  if (console.log(e), !(e instanceof FormData)) throw new Error("Invalid form data");
  const t = e.get("serialNumber"), n = e.get("productGroup"), s = e.get("deviceName");
  if (!t || !n || !s) throw new Error("serialNumber and productGroup are required");
  return { serialNumber: t.toString(), productGroup: n.toString(), deviceName: s.toString() };
}).handler(P), { fieldContext: I, formContext: k } = createFormHookContexts(), { useAppForm: z } = createFormHook({ fieldComponents: { TextInput: R, NumberInput: D }, formComponents: { SubmitButton: E }, fieldContext: I, formContext: k }), B = () => {
  const e = z({ defaultValues: { serialNumber: "", productGroup: "", deviceName: "" }, validators: { onChange: z$1.object({ serialNumber: z$1.string(), productGroup: z$1.string(), deviceName: z$1.string() }) }, onSubmit: async ({ value: t }) => {
    const n = await $({ data: t });
    console.log(n);
  } });
  return jsxs("form", { onSubmit: (t) => {
    t.preventDefault(), e.handleSubmit();
  }, method: "post", children: [jsx("h1", { children: "Add device" }), jsx(e.AppField, { name: "deviceName", children: (t) => jsx(t.TextInput, { value: t.state.value, onChange: (n) => t.handleChange(n.target.value), label: "Device Name" }) }), jsx(e.AppField, { name: "serialNumber", children: (t) => jsx(t.TextInput, { value: t.state.value, onChange: (n) => t.handleChange(n.target.value), label: "Serial Number" }) }), jsx(e.AppField, { name: "productGroup", children: (t) => jsx(t.TextInput, { value: t.state.value, onChange: (n) => t.handleChange(n.target.value), label: "Product Group" }) }), jsx(e.AppForm, { children: jsx(e.SubmitButton, { children: "Submit" }) })] });
}, M = function() {
  return jsx(B, {});
};

export { M as component };
//# sourceMappingURL=add-B9eC2_T7.mjs.map
