FROM node:latest

RUN ["echo", "1"]

# Create app directory
# RUN mkdir -p /usr/src/app
# RUN chmod -R 777 /usr/src/app
WORKDIR /usr/src/app

RUN echo "2"

# Install app dependencies
COPY package*.json ./
RUN npm install

CMD echo 3

COPY . .

CMD echo 4

EXPOSE 8000

CMD echo 5

CMD [ "node", "server.js" ]