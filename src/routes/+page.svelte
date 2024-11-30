<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
</script>

<Header></Header>

<main class="container">
	{#each alphabet as letter}
		<Accordion title={letter.toUpperCase()}></Accordion>
	{/each}
</main>
