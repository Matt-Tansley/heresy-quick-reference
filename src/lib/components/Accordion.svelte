<script lang="ts">
	import RulePill from '$lib/components/RulePill.svelte';

	let { title, rules } = $props();
</script>

<details>
	<summary class="accordion-title" role="button">{title}</summary>
	{#each rules as rule}
		<RulePill {rule}></RulePill>
	{/each}
</details>

<style>
	.accordion-title {
		font-weight: bold;
		text-align: center;
	}
</style>
