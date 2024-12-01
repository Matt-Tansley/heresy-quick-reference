<script lang="ts">
	let { title, rules } = $props();
</script>

<details>
	<summary class="accordion-title" role="button">{title}</summary>
	{#each rules as rule}
		<article class="card">{rule.name}</article>
	{/each}
</details>

<style>
	.accordion-title {
		font-weight: bold;
		text-align: center;
	}

	.card {
		background-color: var(--pico-color-grey-750);
	}
</style>
