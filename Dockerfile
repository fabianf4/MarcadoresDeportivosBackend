FROM node:18-alpine3.15

WORKDIR /app

COPY . .

RUN npm install -p

ENV PORT=3000
ENV URI=mongodb://mongodb:27017/
ENV DB=marcadoresdeportivos
ENV SALT=10
ENV SECRET=MYSECRET

CMD ["npm", "start"]