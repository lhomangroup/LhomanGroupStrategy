# Running this app (Base44 sandbox)

Single Node app: `server/index.ts` (Express) mounts the API and, in development, the
Vite dev server for `client/`. It listens on **port 5000** inside the container; the
compose setup publishes it on **host port 3000**.

```bash
docker compose -f docker-compose.base44.yml up -d      # db, db-ws-proxy, db-migrate, app
docker compose -f docker-compose.base44.yml logs -f app
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/   # 200, Vite dev HTML
curl -s http://localhost:3000/api/contact                         # [] (DB round-trip)
```

## Non-obvious setup facts

- **The Neon driver cannot talk to a plain Postgres.** `server/db.ts` uses
  `@neondatabase/serverless`, which is WebSocket-only, so the stack runs Neon's
  `wsproxy` sidecar (`db-ws-proxy`) in front of the local Postgres. `server/db.ts`
  points the driver at it **only** when `BASE44_PREVIEW_MODE` is exactly `"1"` and
  `NEON_WS_PROXY` is set (both wired in `docker-compose.base44.yml`; the address is
  `db-ws-proxy:80/v1`). With the flag unset the driver keeps its normal Neon behavior.
- **Schema is applied automatically.** The `db-migrate` one-shot service runs
  `npm run db:push -- --force` (drizzle-kit) before the app starts; re-run it with
  `docker compose -f docker-compose.base44.yml run --rm db-migrate`.
- **Dependencies** are installed by the `app`/`db-migrate` services on startup
  (`npm install`), so the repo needs no host-side Node install. The repo has no
  Node runtime on the sandbox host; everything runs in containers.
- **`client/index.html` loads `public/js/replit-dev-banner.js`** (relative URL from the
  original Replit setup). It 404s outside Replit — a harmless console error, left as-is.
- **Vite host check**: `server/vite.ts` already sets `allowedHosts: true`, so the preview
  hostname is accepted without further configuration.
- **No test suite** exists in the repo (no `test` script, no test runner).

## External services

| Env var | Needed at boot | Notes |
| --- | --- | --- |
| `DATABASE_URL` | yes | set by compose to the local Postgres |
| `SENDGRID_API_KEY` | no | optional; without it contact-form submissions are still saved and `sendEmail()` just logs "email sending disabled". Supplied by the platform at `/run/base44/app.env`, wired in as `env_file` on the `app` service. |

`/run/base44/app.env` is listed **after** the inline `environment:` block; note that
`DATABASE_URL` is deliberately inline because in this sandbox it always points at the
local Postgres, which is the only database the `wsproxy` bridge can reach.
