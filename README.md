# yaps – yet another project starter

i got super tired of manually setting up projects every time i start a new one, so i made this boilerplate.

yaps should help you quickly get set up with a typescript web library in less than 2min of setup.

this is mainly maintained for me and by me, feel free to remix/use it as you see fit.

## setup

```sh
git clone https://github.com/aidenybai/yaps.git
cd yaps
pnpm install
```

next, i recommend you global search `REPLACE_ME_PLEASE` and replace it with whatever you want. here are some files you should enter your project name in:

- `kitchen-sink/vite.config.mjs`
- `kitchen-sink/index.html`
- `kitchen-sink/LICENSE`
- `kitchen-sink/package.json`
- `kitchen-sink/tsup.config.ts`

## development

here are some neat commands you can run:

```sh
# dev
pnpm run dev

# build
pnpm run build

# lint
pnpm run lint

# format
pnpm run format

# lint publish config
pnpm run publint

# test
pnpm run test
```

## testing

for ad-hoc testing use the `kitchen-sink` directory:

```sh
cd kitchen-sink
pnpm run dev
```

for unit testing, edit `src/index.test.ts` and run:

```sh
pnpm run test
```
