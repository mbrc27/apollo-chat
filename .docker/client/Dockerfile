FROM node:10.2.1

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN LD_LIBRARY_PATH=/usr/local/lib && export LD_LIBRARY_PATH
RUN echo "LD_LIBRARY_PATH=/usr/local/lib && export LD_LIBRARY_PATH" >> ~/.bashrc

# set entrypoint
COPY entrypoint.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
