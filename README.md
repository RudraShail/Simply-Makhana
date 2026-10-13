# Simply Makhana

Static JavaScript site for Shree Balaji Organics. There is no TypeScript and no server. Cloudflare Pages and Cloudflare Workers only need the files produced in `dist`.

## Build

```bash
npm install
npm run build
```

`dist` is the site: `index.html`, hashed CSS and JavaScript, and `images`. Pages use hash addresses such as `/#/shop`, so the host does not need rewrite rules.

## Cloudflare Pages

In the Pages project:

- Build command: `npm run build`
- Build output directory: `dist`

Or from this folder, after `npx wrangler login`:

```bash
npm run deploy:pages
```

## Cloudflare Workers

`wrangler.jsonc` publishes `dist` as static assets. There is no Worker script.

```bash
npm run deploy:worker
```
