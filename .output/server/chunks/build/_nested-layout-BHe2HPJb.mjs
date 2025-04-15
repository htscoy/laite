import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';

const a = function() {
  return jsxs("div", { children: [jsx("div", { children: "I'm a nested layout" }), jsxs("div", { className: "flex gap-2 border-b", children: [jsx(Link, { to: "/route-a", activeProps: { className: "font-bold" }, children: "Go to route A" }), jsx(Link, { to: "/route-b", activeProps: { className: "font-bold" }, children: "Go to route B" })] }), jsx("div", { children: jsx(Outlet, {}) })] });
};

export { a as component };
//# sourceMappingURL=_nested-layout-BHe2HPJb.mjs.map
