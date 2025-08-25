#Step 1: Build React App
# Use an official Node.js image for building the app
FROM node:18 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app for production (output will be in /app/dist)
RUN npm run build



#Step 2: Serve React App

# Use a lightweight web server to serve static files
FROM nginx:alpine

# Copy built files from "build stage" to Nginx default public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default HTTP)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]