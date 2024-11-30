<script lang="ts">
	let { title } = $props();
</script>

<details>
	<summary class="accordion-title" role="button">{title}</summary>
	<p>Info goes here</p>
</details>

<style>
	.accordion-title {
		font-weight: bold;
		text-align: center;
	}
</style>
