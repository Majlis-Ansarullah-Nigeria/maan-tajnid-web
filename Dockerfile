# Use an official NGINX alpine image as the base
FROM nginx:alpine

# Copy the static files of your React app to the NGINX document root
COPY build/ /usr/share/nginx/html

# Expose port 80 (the default port for HTTP traffic)
EXPOSE 80

# Start NGINX when the Docker container starts
CMD ["nginx", "-g", "daemon off;"]
