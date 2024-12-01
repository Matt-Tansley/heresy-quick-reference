<script lang="ts">
	let { rule } = $props();

	let modal: HTMLDialogElement;

	const toggleModal = () => {
		modal.open ? closeModal() : openModal();
	};

	const openModal = () => {
		modal.showModal();
	};

	const closeModal = () => {
		modal.close();
	};
</script>

<!-- Rule pill -->
<article class="card" onclick={toggleModal}>{rule.name}</article>

<!-- Modal -->
<dialog bind:this={modal}>
	<article>
		<header>
			<button aria-label="Close" rel="prev" onclick={toggleModal}></button>
			<h3>{rule.name}</h3>
		</header>
		<p>
			{rule.text}
		</p>
	</article>
</dialog>

<style>
	.card {
		background-color: var(--pico-color-grey-750);
	}
</style>
