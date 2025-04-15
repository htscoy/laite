import a from 'redaxios';
import { g } from '../nitro/nitro.mjs';
import { json } from '@tanstack/start-client-core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import 'react/jsx-runtime';
import '@tanstack/react-router';
import '@tanstack/react-router-devtools';
import 'node:stream';
import 'isbot';
import 'react-dom/server';

const l = g("/api/users")({ GET: async ({ request: o }) => {
  console.info("Fetching users... @", o.url);
  const s = (await a.get("https://jsonplaceholder.typicode.com/users")).data.slice(0, 10);
  return json(s.map((e) => ({ id: e.id, name: e.name, email: e.email })));
} });

export { l as APIRoute };
//# sourceMappingURL=users.mjs.map
