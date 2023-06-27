# Use the official Node.js image as the base
FROM node:14-alpine as build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install -g --f
RUN npm install "@material-ui/styles" --force 
RUN npm install --save @mui/lab@^5.0.0-alpha.72 @mui/styles@5.5.0

# Copy the entire project to the working directory
COPY . .
# Build the React app
RUN npm run build

# Use nginx as the production server
FROM nginx:alpine

# Copy the built static files from the previous stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 3000

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
