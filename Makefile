TESTS += timezone.test.js
#TZ += en_US.js

help:
	@echo 'Usage: make build TZ=./lib/localename TZ+=./lib/localename'
	@echo 'E.g.: make build TZ=./lib/en_US.js TZ+=./lib/es_MX.js'

build:
	@echo 'Building dist/timezone.js'
	@./node_modules/gluejs/bin/gluejs \
	--include ./index.js \
	$(TZ) \
	--global Timezone \
	--main index.js \
	--out dist/timezone.js

test:
	@sudo -E ./node_modules/.bin/mocha \
		--ui exports \
		--reporter spec \
		--slow 2000ms \
		--bail \
		$(TESTS)

.PHONY: test build help
