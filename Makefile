install:
	npm install

game:
	npm run babel-node -- src/bin/brain-games.js

even:
	npm run babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint
