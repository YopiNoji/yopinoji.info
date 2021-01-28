FROM node:10.23.2-alpine
EXPOSE 3000
ENV HOST 0.0.0.0

WORKDIR /usr/src
COPY ./package.json .
RUN npm install
COPY . .
# CMD ["npm", "run", "dev"]