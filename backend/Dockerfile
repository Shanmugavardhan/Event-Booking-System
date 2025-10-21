# Use lightweight Python base image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

RUN apt-get update && apt-get install -y build-essential

# Copy and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all backend code
COPY . .

# Set environment variable for port
ENV PORT=8080

# Run the Flask app using Gunicorn
CMD exec gunicorn --bind :$PORT app:app