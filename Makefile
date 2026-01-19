validate:
	bun install
	@bun run check-format || { code=$$?; bun run format; exit $$code; }
	bun run lint
	make build
	bun run test

build:
	bun run build
