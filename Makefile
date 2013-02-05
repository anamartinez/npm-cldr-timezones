TESTS += timezone.test.js
#TZ += en_US.js

help:
	@echo 'Usage: make build TZ=./lib/localename TZ+=./lib/localename'
	@echo 'E.g.: make build TZ=./lib/en_US.js TZ+=./lib/en_US.js'

build:
	@echo 'Building dist/cldr.js'
	@./node_modules/gluejs/bin/gluejs \
	--include ./index.js \
	$(TZ) \
	--global Cldr \
	--main index.js \
	--out dist/cldr.js

test:
	@sudo -E ./node_modules/.bin/mocha \
		--ui exports \
		--reporter spec \
		--slow 2000ms \
		--bail \
		$(TESTS)

.PHONY: test build help
