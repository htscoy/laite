import{jsx as r,jsxs as s}from"react/jsx-runtime";import{RouterProvider as S,useRouter as T,useMatch as _,rootRouteId as k,ErrorComponent as P,Link as l,createRootRoute as M,Outlet as N,HeadContent as $,Scripts as D,createFileRoute as u,lazyRouteComponent as p,createRouter as E}from"@tanstack/react-router";import{TanStackRouterDevtools as F}from"@tanstack/react-router-devtools";import{createMiddleware as h,registerGlobalMiddleware as j}from"@tanstack/start-client-core";import A from"tiny-invariant";import{PassThrough as I}from"node:stream";import{isbot as m}from"isbot";import c from"react-dom/server";import{defineHandlerCallback as O,transformReadableStreamWithRouter as G,transformPipeableStreamWithRouter as H,createStartHandler as B}from"@tanstack/start-server-core";function f(e){return r(S,{router:e.router})}const L=O(async({request:e,router:t,responseHeaders:n})=>{if(typeof c.renderToReadableStream=="function"){const o=await c.renderToReadableStream(r(f,{router:t}),{signal:e.signal});m(e.headers.get("User-Agent"))&&await o.allReady;const a=G(t,o);return new Response(a,{status:t.state.statusCode,headers:n})}if(typeof c.renderToPipeableStream=="function"){const o=new I;try{const i=c.renderToPipeableStream(r(f,{router:t}),{...m(e.headers.get("User-Agent"))?{onAllReady(){i.pipe(o)}}:{onShellReady(){i.pipe(o)}},onError:(v,C)=>{console.error("Error in renderToPipeableStream:",v,C)}})}catch(i){console.error("Error in renderToPipeableStream:",i)}const a=H(t,o);return new Response(a,{status:t.state.statusCode,headers:n})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")}),W=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/","/settings","/device/add"],preloads:["/_build/assets/client-CoOhFtGQ.js","/_build/assets/client-D2B8J1pg.js"]},"/":{filePath:"index.tsx"},"/settings":{filePath:"settings.tsx"},"/device/add":{filePath:"device/add.tsx"}}});function U(e){return globalThis.MANIFEST[e]}function X(){const e=W(),t=e.routes.__root__=e.routes.__root__||{};t.assets=t.assets||[];let n="";const o=U("client"),a=o.inputs[o.handler]?.output.path;return a||A(a,"Could not find client entry in vinxi manifest"),t.assets.push({tag:"script",attrs:{type:"module",suppressHydrationWarning:!0,async:!0},children:`${n}import("${a}")`}),e}function z(){const e=X();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([t,n])=>{const{preloads:o,assets:a}=n;return[t,{preloads:o,assets:a}]}))}}function g({error:e}){const t=T(),n=_({strict:!1,select:o=>o.id===k});return console.error("DefaultCatchBoundary Error:",e),s("div",{className:"min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",children:[r(P,{error:e}),s("div",{className:"flex gap-2 items-center flex-wrap",children:[r("button",{onClick:()=>{t.invalidate()},className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",children:"Try Again"}),n?r(l,{to:"/",className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",children:"Home"}):r(l,{to:"/",className:"px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold",onClick:o=>{o.preventDefault(),window.history.back()},children:"Go Back"})]})]})}function x({children:e}){return s("div",{className:"space-y-2 p-2",children:[r("div",{className:"text-gray-600 dark:text-gray-400",children:e||r("p",{children:"The page you are looking for does not exist."})}),s("p",{className:"flex items-center gap-2 flex-wrap",children:[r("button",{onClick:()=>window.history.back(),className:"bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm",children:"Go back"}),r(l,{to:"/",className:"bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm",children:"Start Over"})]})]})}const J="/_build/assets/app-pXuyX2L3.css",d=M({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],links:[{rel:"stylesheet",href:J}]}),errorComponent:e=>r(R,{children:r(g,{...e})}),notFoundComponent:()=>r(x,{}),component:Q});function Q(){return r(R,{children:r(N,{})})}function R({children:e}){return s("html",{children:[r("head",{children:r($,{})}),s("body",{children:[e,r(F,{position:"bottom-right"}),r(D,{})]})]})}const K=()=>import("./assets/settings-CxxHolBS.js"),y=u("/settings")({component:p(K,"component",()=>y.ssr)}),V=()=>import("./assets/index-CkqYPF5M.js"),b=u("/")({component:p(V,"component",()=>b.ssr)}),Y=()=>import("./assets/add-B9eC2_T7.js"),w=u("/device/add")({component:p(Y,"component",()=>w.ssr)}),Z=y.update({id:"/settings",path:"/settings",getParentRoute:()=>d}),q=b.update({id:"/",path:"/",getParentRoute:()=>d}),ee=w.update({id:"/device/add",path:"/device/add",getParentRoute:()=>d}),te={IndexRoute:q,SettingsRoute:Z,DeviceAddRoute:ee},re=d._addFileChildren(te)._addFileTypes();function oe(){return E({routeTree:re,defaultPreload:"intent",defaultErrorComponent:g,defaultNotFoundComponent:()=>r(x,{}),scrollRestoration:!0})}const ne=h().client(async e=>{const t=new Date;return e.next({context:{clientTime:t},sendContext:{clientTime:t}})}),ae=h().middleware([ne]).client(async e=>{const t=await e.next(),n=new Date;return console.log("Client Req/Res:",{duration:t.context.clientTime.getTime()-n.getTime(),durationToServer:t.context.durationToServer,durationFromServer:n.getTime()-t.context.serverTime.getTime()}),t});j({middleware:[ae]});const he=B({createRouter:oe,getRouterManifest:z})(L);export{he as default};
