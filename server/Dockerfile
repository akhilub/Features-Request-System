# Use Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /server


COPY ../package.json .  

# Install dependencies  
RUN npm install

# Copy server files
COPY . .

# Expose port
EXPOSE 8009

# Start server
CMD ["npm", "run", "backend"]