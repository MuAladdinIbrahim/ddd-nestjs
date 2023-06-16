# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./
COPY yarn.lock ./


# Copy the source code
COPY . .

# Build the production app
RUN yarn build

# Set environment variables
ENV NODE_ENV production

# Expose the app port
EXPOSE $PORT

# Start the app
CMD ["yarn", "start:prod"]