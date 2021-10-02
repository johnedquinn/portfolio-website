##
# @name  Dockerfile
# @desc  N/A
# @auth  johnedquinn
##

# Build Environment
FROM node:16 AS build-stage
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production
COPY . ./
RUN npm run build

# Production Environment
FROM nginx:1.20
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
