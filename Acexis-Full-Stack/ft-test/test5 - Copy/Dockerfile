FROM node:alpine

WORKDIR /usr/src/app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "start"]