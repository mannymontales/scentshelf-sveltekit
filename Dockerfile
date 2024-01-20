# # Stage 1: Build the app
# FROM node:18-alpine AS builder

# # Define build arguments
# ARG PUBLIC_BASE

# # Set environment variables from build arguments
# ENV PUBLIC_BASE=${PUBLIC_BASE}

# # Set working directory
# WORKDIR /app
# # Copy package.json and package-lock.json 
# COPY package*.json ./

# # Install dependencies, including dotenv
# RUN npm ci

# # Copy the rest of your app's source code from your host to your image filesystem.
# COPY . .

# # Build app
# RUN npm run build

# # Stage 2: Setup runtime environment
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Copy the build output from the first stage
# COPY --from=builder /app/build ./build

# # Copy node_modules from the first stage (contains production dependencies and dotenv)
# COPY --from=builder /app/node_modules ./node_modules

# # # Copy package.json and .env file
# # COPY package.json .
# # COPY .env .
# COPY package.json .

# # EXPOSE 3000

# ENV NODE_ENV=production

# # Start the app using Node.js and dotenv
# CMD ["node", "-r", "dotenv/config", "build"]

# https://kit.svelte.dev/docs/adapters
# https://kit.svelte.dev/docs/adapter-node
https://vsupalov.com/docker-arg-env-variable-guide/
https://vsupalov.com/docker-build-time-env-values/
https://www.reddit.com/r/docker/comments/111viuo/using_environment_variables_in_dockerfile/
https://kit.svelte.dev/docs/modules#$env-dynamic-private
https://gist.github.com/aradalvand/04b2cad14b00e5ffe8ec96a3afbb34fb


FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]










