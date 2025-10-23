#!/usr/bin/env bash
set -e

# Wait for Postgres
echo "Waiting for Postgres at ${POSTGRES_HOST}:${POSTGRES_PORT}..."
until /usr/local/bin/python - <<'PYCODE'
import os, time
import psycopg2
from psycopg2 import OperationalError
host = os.environ.get("POSTGRES_HOST", "db")
port = int(os.environ.get("POSTGRES_PORT", "5432"))
user = os.environ.get("POSTGRES_USER")
password = os.environ.get("POSTGRES_PASSWORD")
dbname = os.environ.get("POSTGRES_DB")
for _ in range(60):
    try:
        conn = psycopg2.connect(host=host, port=port, user=user, password=password, dbname=dbname)
        conn.close()
        print("Postgres is ready.")
        raise SystemExit(0)
    except OperationalError:
        time.sleep(1)
raise SystemExit(1)
PYCODE
do
  echo "Postgres not ready yet..."
  sleep 1
done

# Run migrations & start server
python manage.py migrate --noinput
python manage.py collectstatic --noinput 2>/dev/null || true
python manage.py runserver 0.0.0.0:8000
