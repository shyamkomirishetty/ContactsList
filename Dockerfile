FROM node:6.11.0

LABEL maintainer shyam.komirishetty@gmail.com

WORKDIR /var/www

COPY . /var/www

RUN npm install

RUN npm run build

CMD npm start

EXPOSE 3000




