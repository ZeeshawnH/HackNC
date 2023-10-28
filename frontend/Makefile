.DELETE_ON_ERROR:

PORT=8080

deps: \
	src/assets/dexie.mjs \
	src/assets/petite-vue.es.js \
	src/assets/rxjs.umd.min.js \
	src/assets/vueuse_rxjs.js

serve: deps
	echo listening on port $(PORT)
	python3 -m http.server $(PORT) --bind 127.0.0.1 --directory src

src/assets/dexie.mjs:
	curl -L 'https://unpkg.com/dexie@latest/dist/modern/dexie.mjs' > '$@'

src/assets/petite-vue.es.js:
	#curl -L 'https://unpkg.com/petite-vue?module' > '$@'
	curl -L 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js?module' > '$@'

src/assets/rxjs.umd.min.js:
	curl -L 'https://unpkg.com/rxjs@%5E7/dist/bundles/rxjs.umd.min.js' > '$@'

#src/assets/vueuse_rxjs.js:
#	curl -L 'https://unpkg.com/@vueuse/rxjs?module' > '$@'

src/assets/vueuse_rxjs.js:
	curl -L 'https://unpkg.com/@vueuse/rxjs@10.5.0/index.iife.min.js' > '$@'

clean:
	rm -rf src/assets/*
