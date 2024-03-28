# Stage 1 building npm production build
FROM node:20 AS build-stage
#creates new build stage  and sets the base image for subsequent insturctions
#doesnt run full OS but does share kenreal.

WORKDIR /app 
#sets working directory for any RUN, CMD , Enterydpoint  

COPY package*.json /app/
#copying all package*.json files to app directory in image

RUN npm install
#install dependancies

COPY . .
#move all files from current directory to image crnt directory

RUN npm run build
# builds app


#stage 2 setup for nginx reverse proxy
FROM nginx:alpine

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./nginx/default.conf /etc/nginx/conf.d/

COPY --from=build-stage /app/.next /usr/share/nginx/html

# Expose the listening port
EXPOSE 90

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

# USER should be node because it is non root user a Root user would be a secuirty issue in node
#PM2 is proudcution ready process manager for node if it crashes PM2 will restart it 
#without it just crashes and will no longer be avialable
