# Use Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ../package.json .

# Install dependencies
RUN npm install


COPY . .

# Expose port
EXPOSE 8080 

# Start app
CMD ["npm", "run", "frontend"]