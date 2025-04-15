import { Database } from "./schema.types"; // this is the Database interface we defined earlier
import pg from "pg";
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
  pool: new pg.Pool({
    database: process.env.DB_NAME ?? "postgres",
    host: process.env.DB_HOST ?? "localhost",
    user: process.env.DB_USER ?? "postgres",
    password: process.env.DB_PASS ?? "postgres",
    port: parseInt(process.env.DB_PORT ?? "5432"),
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
