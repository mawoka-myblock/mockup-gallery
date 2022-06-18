<script lang="ts">
	let url = 'mawoka.eu';
	let url_width = 10;
	let input;
	let image;
	let showImage = false;
	let main_container;
	import { saveImage } from '$lib/save';

	// This function displays the image if one is selected via the input-form
	const onChange = () => {
		const file = input.files[0];

		if (file) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);
			showImage = true;
			return;
		}
		showImage = false;
	};
	// +++ START auto-width +++
	//  This block sets the width fo the url-input field, so it's centerd, since input doesn't support width: fit-content
	const setWidth = (text: string) => {
		url_width = text.length + 1;
		if (text.length === 0) {
			url_width = 5;
		}
	};
	$: setWidth(url);
	// --- END auto-width ---
</script>

<div class="w-screen h-screen overflow-hidden">
	<div bind:this={main_container} class="h-screen w-screen rounded-lg">
		<div class="h-fit rounded-t-lg bg-gray-200">
			<div class="flex gap-3 p-4 align-middle">
				<div
					class="w-1/12 pt-1 hover:cursor-pointer"
					on:click={() => {
						saveImage(main_container);
					}}
				>
					<span class="inline-block h-4 w-4 rounded-full bg-red-400 transition" />
					<span class="inline-block h-4 w-4 rounded-full bg-yellow-400 transition" />
					<span class="inline-block h-4 w-4 rounded-full bg-green-400 transition" />
				</div>
				<div class="flex w-10/12 justify-center">
					<div class="flex h-8 w-1/2 rounded-lg bg-gray-300 align-middle">
						<div class="mt-0.5 w-full text-center font-mono">
							<input
								class="pt-0.5 text-gray-700 text-right bg-transparent outline-none"
								style="width: {url_width}ch;"
								bind:value={url}
							/>
							<svg
								class="inline-block h-5 w-5 font-semibold text-green-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/></svg
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col overflow-hidden">
			{#if showImage}
				<img
					bind:this={image}
					src=""
					alt="Preview"
					class="overflow-hidden rounded-b-lg"
					on:contextmenu|preventDefault={() => {
						input.files.pop();
						showImage = false;
					}}
				/>
			{:else}
				<input bind:this={input} on:change={onChange} type="file" />
				<p>
					To download the screenshot, click on the colored buttons in the top-left corner.
					To remove the image, reload the page.
				</p>
				<p>YOu can edit the url at the top by clicking onto it.</p>
			{/if}
		</div>
	</div>
</div>
