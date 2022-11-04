FROM node:18.12.0-alpine
WORKDIR /TODO-APP
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]