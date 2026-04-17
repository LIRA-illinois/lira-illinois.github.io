# LIRA Website

## Updating the Publications Page

The publications page assumes citations are in a `src/assets/pubs.json` file. You can use [Pandoc](https://pandoc.org/) to convert a `.bibtex` file into a `.json` file as follows:

```bash
$ pandoc src/assets/pubs.bib -t csljson -o src/assets/pubs.json
```

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. This is where you would update or add a new news item, paper, project, or team member, in the form of a Markdown file.

Files (e.g., `.pdf` files) are currently in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Useful references

- How to define [modular type scales](https://blog.prototypr.io/defining-a-modular-type-scale-for-web-ui-51acd5df31aa)
- How to test [type scales](https://typescale.com/?source=post_page-----51acd5df31aa---------------------------------------)