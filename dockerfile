FROM node:16

# working directory
RUN mkdir /app
WORKDIR /app

# update the operting system
RUN apt-get update

#copy all the files
COPY . .

# install node dependency and build project
RUN npm install
RUN npm run build

# run on container start command
CMD ["node", "dist/main.js"]
