SHELL := bash
export PATH := node_modules/.bin/:$(PATH)

eslint:
	eslint --ext .js ./src

install:
	npm install

run: install
	node ./src/app.js