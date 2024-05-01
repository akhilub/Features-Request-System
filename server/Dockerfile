# Use Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /server

# Copy server files
COPY . .

# Install dependencies  
RUN npm install

# Expose port
EXPOSE 8009

# Start server
CMD ["npm", "run", "backend"]
