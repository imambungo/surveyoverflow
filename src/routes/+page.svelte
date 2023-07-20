<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="tester" style="width:600px;height:250px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->

<script>
	import { onMount } from 'svelte'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

		const javascript = {
			name: 'JavaScript',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019'],
			x: [62.5, 69.8, 67.8], // popularity
			y: [59.8, 61.9, 66.8], // love
			type: 'scatter'
		};

		const sql = {
			name: 'SQL',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019'],
			x: [51.2, 57, 54.4],
			y: [53.4, 57.5, 64.1],
			type: 'scatter'
		};

		const layout = {
			title: 'Title of the Graph',
			xaxis: {
				title: 'Popularity'
			},
			yaxis: {
				title: 'Love'
			}
		}

		const data = [javascript, sql];
		Plotly.newPlot( 'tester', data, layout) // https://plotly.com/javascript/line-charts/
	})

</script>