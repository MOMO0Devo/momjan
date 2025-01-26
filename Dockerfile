FROM  node:22-alpine

WORKDIR /app
COPY package*.json ./

RUN npm run install 
COPY .    .
EXPOSE  3000
CMD npm run dev


