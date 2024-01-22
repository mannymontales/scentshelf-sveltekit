# https://vsupalov.com/docker-arg-env-variable-guide/
# https://vsupalov.com/docker-build-time-env-values/
# https://www.reddit.com/r/docker/comments/111viuo/using_environment_variables_in_dockerfile/
# Review on when to set environment varaiables at build time or run time for best practices.

# # Define build arguments
# ARG PUBLIC_BASE

# # Set environment variables from build arguments
# ENV PUBLIC_BASE=${PUBLIC_BASE}



# https://gist.github.com/aradalvand/04b2cad14b00e5ffe8ec96a3afbb34fb

# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json 
COPY package*.json .

# Install dependencies, including dotenv based on package.json
RUN npm ci

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# We run the npm run build command so that SvelteKit generates the build directory, 
# containing a standalone Node server that serves our application — assuming, of course, that you're using adapter-node.
# We subsequently run the npm prune --production command to delete all the dev dependencies from the "node_modules" folder, since we no longer need any of them.
RUN npm run build
RUN npm prune --production

# Stage 2
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]










