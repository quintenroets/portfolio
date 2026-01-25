install-bun:
	curl -fsSL https://bun.sh/install | bash

install:
	bun install
	npx playwright install --with-deps

serve:
	bun run dev

preview:
	bun run preview

lint:
	bun run lint

format:
	@bun run check-format || { code=$$?; bun run format; exit $$code; }

test:
	bun run test

validate:
	make install
	make format
	make lint
	make build
	make test

build:
	bun run build
