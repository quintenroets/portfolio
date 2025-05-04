validate:
	npm install
	@npm run check-format || { code=$$?; npm run format; exit $$code; }
	npm run lint
	make build

build:
	npm run build
