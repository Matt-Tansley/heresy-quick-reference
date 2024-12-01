<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import type { PageData } from './$types';

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	let { data }: { data: PageData } = $props();
	const rules = data.rules; // Extract rules into it's own variable for simplicity
</script>

<Header></Header>

<main class="container">
	{#each alphabet as letter}
		<Accordion
			title={letter.toUpperCase()}
			rules={rules.filter((rule) => rule.name.toLowerCase().startsWith(letter))}
		></Accordion>
	{/each}
</main>
