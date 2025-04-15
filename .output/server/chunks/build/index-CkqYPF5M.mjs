import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';

function l(d) {
  return jsxs("table", { className: "w-full", children: [jsx("thead", { children: jsxs("tr", { children: [jsx("th", { children: "ID" }), jsx("th", { children: "Name" }), jsx("th", { children: "Serial number" }), jsx("th", { children: "Product Group" })] }) }), jsxs("tbody", { children: [jsxs("tr", { children: [jsx("td", { children: "1" }), jsx("td", { children: 'Apple Macbook Air 15" (2025)' }), jsx("td", { children: "SZ90378913903" }), jsx("td", { children: "Laptop" })] }), jsxs("tr", { children: [jsx("td", { children: "1" }), jsx("td", { children: 'Apple Macbook Air 15" (2025)' }), jsx("td", { children: "SZ90378913903" }), jsx("td", { children: "Laptop" })] }), jsxs("tr", { children: [jsx("td", { children: "1" }), jsx("td", { children: 'Apple Macbook Air 15" (2025)' }), jsx("td", { children: "SZ90378913903" }), jsx("td", { children: "Laptop" })] }), jsxs("tr", { children: [jsx("td", { children: "1" }), jsx("td", { children: 'Apple Macbook Air 15" (2025)' }), jsx("td", { children: "SZ90378913903" }), jsx("td", { children: "Laptop" })] }), jsxs("tr", { children: [jsx("td", { children: "1" }), jsx("td", { children: 'Apple Macbook Air 15" (2025)' }), jsx("td", { children: "SZ90378913903" }), jsx("td", { children: "Laptop" })] })] })] });
}
function i(d) {
  return jsxs("header", { className: "flex justify-between px-8 py-2", children: [jsx("div", {}), jsx("nav", { children: jsx("ul", { children: jsx("li", { children: jsx(Link, { to: "/settings", children: "Settings" }) }) }) })] });
}
const o = function() {
  return jsxs(Fragment, { children: [jsx(i, {}), jsxs("main", { className: "m-auto max-w-7xl px-8", children: [jsx("h1", { className: "font-bold text-lg", children: "Devices" }), jsx(l, {})] })] });
};

export { o as component };
//# sourceMappingURL=index-CkqYPF5M.mjs.map
