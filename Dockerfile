# syntax docker/dockerfile:1.3-labs
FROM node:14

RUN <<EOF
  apt-get update

  apt-get install -y \
    gosu

  apt-get clean
  rm -rf /var/lib/apt/lists/*
EOF

RUN <<EOF
  groupadd -o -g 1000 user
  useradd -o -u 1000 -g user -m user

  mkdir -p /work
  chown -R user:user /work
EOF

WORKDIR /work
ADD --chown=user:user ./package.json ./package-lock.json ./.npmrc /work/
RUN gosu user npm ci

ADD --chown=user:user ./gatsby-config.ts ./gatsby-node.ts /work/
ADD --chown=user:user ./static /work/static
ADD --chown=user:user ./src /work/src

CMD [ "gosu", "user", "npm", "run", "build" ]
