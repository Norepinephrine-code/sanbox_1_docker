FROM node:22-alpine

WORKDIR /sandbox_1

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
