FROM docker.pkg.github.com/tubone24/markdown-memo/algolia-docsearch:latest
MAINTAINER tubone <tubo.yyyuuu@gmail.com>

WORKDIR /root

RUN rm -rf ./docsearch-scraper
RUN git clone https://github.com/tubone24/docsearch-scraper.git
COPY config.json ./docsearch-scraper
COPY requirements.txt ./docsearch-scraper
COPY run_index.sh ./docsearch-scraper
WORKDIR ./docsearch-scraper
RUN cp -f /usr/bin/python3 /usr/bin/python && cp -f /usr/bin/pip3 /usr/bin/pip
RUN pip install -r requirements.txt
