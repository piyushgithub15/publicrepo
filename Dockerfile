# Dockerfile
# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install production dependencies.
COPY package*.json ./
RUN npm install

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "node", "index.js" ]

# Expose the port the app runs on
EXPOSE 3000
