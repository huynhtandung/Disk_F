FROM node:alpine

WORKDIR /usr/src/app
COPY . .
ENV PORT=3000
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
RUN npm run build
EXPOSE 3000

CMD ["node", "dist/main.js"]