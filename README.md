# Mockup-Gallery

A simple mockup-gallery for everyone!

## Add your own mockup
1. Fork and clone this repo
2. Create a new file in the `src`-directory ending in `.svelte`
3. create a `script`-tag and add the follwoing: `import { saveImage } from '$lib/save';`
4. Write your mockup using [Tailwind CSS](https://tailwindcss.com/).
5. Bind your root-container to a variable by adding the follwing to your div: `bind:this={YOUR_VAR_NAME}`.
6. Add a button to download a picture by applying the following: `on:click={() => {saveImage(YOUR_VAR_NAME);}}`
7. Add a new object inside the `src/routes/index@page.svelte`-file. it should give you type-hints and add your name and an url to your GitHub-profile, website, etc.