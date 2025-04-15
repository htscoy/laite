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

const m = g("/api/users/$id")({ GET: async ({ request: t, params: o }) => {
  console.info(`Fetching users by id=${o.id}... @`, t.url);
  try {
    const e = await a.get("https://jsonplaceholder.typicode.com/users/" + o.id);
    return json({ id: e.data.id, name: e.data.name, email: e.data.email });
  } catch (e) {
    return console.error(e), json({ error: "User not found" }, { status: 404 });
  }
} });

export { m as APIRoute };
//# sourceMappingURL=users._id.mjs.map
