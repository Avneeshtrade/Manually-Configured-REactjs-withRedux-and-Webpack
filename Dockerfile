FROM node:14.15.1

WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm","run","dev" ]

