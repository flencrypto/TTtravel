.PHONY: all install build

all: install build

install:
	cd tt-travels && npm install

build:
	cd tt-travels && npm run build
