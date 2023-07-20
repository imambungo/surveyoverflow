<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="tester" style="width:600px;height:250px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->

<script>
	import { onMount } from 'svelte'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799
		const TESTER = document.getElementById('tester');
		Plotly.newPlot( TESTER, [{
			x: [1, 2, 3, 4, 5],
			y: [1, 2, 4, 8, 16] }], {
			margin: { t: 0 }
		})
	})

</script>