FROM node:16-alpine
# Change working directory
WORKDIR "/app"


# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm  packages 
RUN npm install 

COPY . .

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000


CMD ["npm","start"]
