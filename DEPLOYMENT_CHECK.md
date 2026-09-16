# ClariFi production deployment check

## Vercel (frontend)

Required environment variable:

- `VITE_API_URL=https://<your-render-service>.onrender.com`

The production Vite build intentionally fails if `VITE_API_URL` is missing. `vercel.json` configures the `dist` output and SPA routing fallback so direct routes such as `/portfolio` and `/documents` work.

## Render (backend)

`render.yaml` creates the Python web service and PostgreSQL database. Set these secrets/variables when prompted:

Required for core production readiness:

- `CLARIFI_FRONTEND_ORIGIN=https://<your-vercel-domain>`
- `R2_ENDPOINT_URL`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET_NAME`

Provided automatically by the Blueprint:

- `DATABASE_URL` from `clarifi-postgres`
- `CLARIFI_ENVIRONMENT=production`

Optional integrations:

- `GEMINI_API_KEY`
- `TAVILY_API_KEY`
- `R2_PUBLIC_BASE_URL`

The start command runs `alembic upgrade head` before Uvicorn. In production the backend refuses to silently fall back to SQLite if `DATABASE_URL` is absent.

## Health check

Render checks `GET /api/health`. It returns HTTP 200 only when PostgreSQL is reachable and R2 configuration is present; otherwise it returns HTTP 503 with a degraded status. Gemini and Tavily remain optional.

## Local verification commands

Frontend (requires npm registry access):

```bash
npm ci
VITE_API_URL=https://example.onrender.com npm run build
npm run lint
```

Backend:

```bash
python -m compileall -q backend/app backend/tests
PYTHONPATH=backend pytest -q backend/tests
```
