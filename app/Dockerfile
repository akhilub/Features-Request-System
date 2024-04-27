# Use Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Build production bundle
RUN npm run build

# Expose port
EXPOSE 8080 

# Start app
CMD ["npm", "start"]  
