FROM node:10.14.1-alpine
EXPOSE 3000
ENV HOST 0.0.0.0

WORKDIR /usr/src
COPY ./package.json .
RUN npm install \
    && npm cache clean --force
# COPY . .
# CMD ["npm", "run", "dev"]