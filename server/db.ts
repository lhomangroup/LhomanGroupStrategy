import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Base44 sandbox preview: the Neon driver talks to Postgres over WebSocket only,
// so in this environment it is pointed at the local wsproxy sidecar from
// docker-compose.base44.yml instead of a Neon endpoint. Strictly opt-in and off
// unless BASE44_PREVIEW_MODE is exactly "1" (i.e. only inside the sandbox).
if (process.env.BASE44_PREVIEW_MODE === "1" && process.env.NEON_WS_PROXY) {
  neonConfig.wsProxy = process.env.NEON_WS_PROXY;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });