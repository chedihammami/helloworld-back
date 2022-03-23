FROM node:alpine 

RUN mkdir -p /usr/src/back-end

COPY . /usr/src/back-end

WORKDIR /usr/src/back-end

RUN npm install 

EXPOSE 3001 

CMD ["node" , "index.js"]