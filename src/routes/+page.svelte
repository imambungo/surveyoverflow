<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="tester" style="width:600px;height:600px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->

<script>
	import { onMount } from 'svelte'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

		const javascript = {
			name: 'JavaScript',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     62.5,   69.8,   67.8,   67.7,  64.96,  65.36,  63.61], // popularity
			y: [     59.8,   61.9,   66.8,   58.3,  61.51,  61.46,  57.83], // love
			type: 'scatter'
		}

		const sql = {
			name: 'SQL',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     51.2,     57,   54.4,   54.7,   47.8,  49.43,  48.66],
			y: [     53.4,   57.5,  64.1,    56.6,  61.83,  64.25,  64.26],
			type: 'scatter'
		}

		const layout = {
			title: 'Title of the Graph',
			dragmode: false, // https://plotly.com/javascript/reference/#layout-dragmode
			xaxis: {
				title: 'Popularity',
				range: [0, 100], // https://stackoverflow.com/q/76736430/9157799
				fixedrange: true // https://plotly.com/javascript/reference/#layout-xaxis-fixedrange
			},
			yaxis: {
				title: 'Love',
				range: [0, 100],
				fixedrange: true
			}
		}

		const config = { // https://plotly.com/javascript/configuration-options/
			scrollZoom: true,
			displayModeBar: false,
			showAxisDragHandles: false // https://stackoverflow.com/a/76736023/9157799
		}

		const data = [javascript, sql];
		Plotly.newPlot( 'tester', data, layout, config) // https://plotly.com/javascript/line-charts/
	})

</script>