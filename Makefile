validate:
	bun install
	@bun run check-format || { code=$$?; bun run format; exit $$code; }
	bun run lint
	make build

build:
	bun run build
