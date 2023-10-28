BIND=localhost
PORT=8080

run:
	npm run dev

build:
	npm run build

serve: build
	echo $(BIND):$(PORT)
	python3 -m http.server --bind $(BIND) --directory dist $(PORT)
