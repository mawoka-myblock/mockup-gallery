<script lang="ts">
	import WebsiteImage from '$lib/media/website.webp';
	interface Author {
		name: string;
		url: string;
	}

	interface Mockups {
		title: string;
		description: string;
		image_url: string;
		path: string;
		author: Author;
	}
	const mockups: Mockups[] = [
		{
			title: 'Website',
			path: '/website',
			description: "Mockup of a website which looks like Apple's Safari",
			image_url: WebsiteImage,
			author: {
				name: 'Mawoka',
				url: 'https://mawoka.eu'
			}
		}
	];
</script>

<div>
	<div class="flex justify-center w-full">
		<h1 class="text-8xl marck-script mt-14">Mawoka's Mockups</h1>
	</div>
	<div class="flex justify-center w-full pb-4">
		<p>This page is for mockups I need myself.</p>
	</div>
	<div class="w-screen h-full">
		{#each mockups as mockup}
			<div class="flex justify-center pb-16">
				<a href={mockup.path} class="rounded-lg bg-gray-300 w-2/3 h-2/6">
					<div>
						<h3 class="text-3xl text-center mt-4">{mockup.title}</h3>
						<p class="text-center text-lg italic">
							By <a
								class="underline text-lime-800 font-semibold"
								href={mockup.author.url}>{mockup.author.name}</a
							>
						</p>
						<div class="px-10 pb-5">
							<img
								class="rounded-lg border-2 border-gray-500 aspect-video"
								alt="Preview"
								src={mockup.image_url}
							/>
						</div>
						<p class="text-center mb-5">{mockup.description}</p>
					</div>
				</a>
			</div>
		{/each}
		<div class="flex justify-center pb-16">
			<a
				href="https://github.com/mawoka-myblock/mockup-gallery"
				class="rounded-lg bg-gray-300 w-2/3 h-2/6"
			>
				<div>
					<h3 class="text-3xl text-center my-4">Add your own!</h3>
				</div>
			</a>
		</div>
	</div>
</div>
