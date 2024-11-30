<script lang="ts">
	import { version } from '$app/environment';
	import GameIconsWaxTablet from 'virtual:icons/game-icons/wax-tablet';
</script>

<div class="header-container center">
	<h2><GameIconsWaxTablet style="font-size: 1.2em" /> Heresy Quick Reference</h2>
	<p>
		This app attempts to alphabetise all special rules for Horus Heresy 2.0 for quick and easy
		reference during play.
	</p>
	<small>Version: {version}</small>
</div>

<style>
	.header-container {
		border-bottom-style: solid;
		border-color: var(--pico-primary);
		padding: 24px;
		flex-direction: column;
	}
</style>
