FROM node:16
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
EXPOSE 3000
RUN npm run setup-db
CMD ["node", "server/index.js"]
