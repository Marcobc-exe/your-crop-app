FROM python:3.13.3-slim

# System libs for psycopg
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential libpq-dev curl && \
    rm -rf /var/lib/apt/lists/*

# Create app dir
WORKDIR /app

# Install Python deps first (better caching)
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of the project
COPY . /app

# Create a non-root user (optional)
RUN useradd -ms /bin/bash django
USER django

EXPOSE 8000
