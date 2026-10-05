# Use Node.js 22 Alpine as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application source code
COPY . .

# Document the application's listening port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]


