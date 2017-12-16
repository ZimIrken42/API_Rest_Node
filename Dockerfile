FROM alpine

RUN apk update &&\
    # apk upgrade --no-progress &&\ # desnecessario
    apk add --no-progress nodejs

# admin
RUN adduser -D -h /home/app -s /bin/false app app
ENV HOME=/home/app

# API : config
COPY package.json $HOME
# RUN npm shrinkwrap --silent --progress=false
COPY npm-shrinkwrap.json $HOME

# admin
RUN chown -R app:app $HOME

USER root
WORKDIR $HOME
# API : npm install
RUN # npm cache clean &&\
    npm install # --silent # --progress=false



# API : Cunstom
RUN echo $(/usr/bin/npm --silent --progress=false install -g nodemon) >>\
    /dev/null

COPY . $HOME
RUN chown -R app:app $HOME/*

USER app
# FINIshin
CMD ["node", "app.js"]
