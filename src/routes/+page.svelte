<script>
	export const prerender = true;
</script>

<div class="grid">
	<a href="https://voncasa.de">
		<div class="cell">TECH</div>
	</a>
	<a href="https://casanova-events.com">
		<div class="cell">EVENTS</div>
	</a>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		height: 100%;
		background: #2b2f38;
	}

	.cell {
		background: white;
		color: #2b2f38;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		transition:
			background 0.3s,
			color 0.3s;
		font-weight: 500;
		font-size: 40px;
	}

	.cell:hover,
	a:active > .cell {
		background: #2b2f38;
		color: white;
	}

	a {
		text-decoration: none;
	}

	a:hover .cell,
	a:active > .cell {
		text-decoration: underline;
		text-decoration-color: white;
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
