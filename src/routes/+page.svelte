<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="tester" style="width:600px;height:250px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->

<script>
	import { onMount } from 'svelte'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

		const trace1 = {
			x: [1, 2, 3, 4],
			y: [10, 15, 13, 17],
			type: 'scatter'
		};

		const trace2 = {
			x: [1, 2, 3, 4],
			y: [16, 5, 11, 9],
			type: 'scatter'
		};

		const data = [trace1, trace2];
		Plotly.newPlot( 'tester', data) // https://plotly.com/javascript/line-charts/#basic-line-plot
	})

</script>