<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div id="tester" style="width:800px;height:800px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->
<div id="db" style="width:800px;height:800px;"></div>
<div id="framework" style="width:800px;height:800px;"></div>

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
			x: [     51.2,     57,   54.4,   54.7,   47.8,  49.43,  48.66], // popularity
			y: [     53.4,   57.5,  64.1,    56.6,  61.83,  64.25,  64.26], // love
			type: 'scatter'
		}

		const java = {
			name: 'Java',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     39.7,   45.3,   41.1,   40.2,  35.35,  33.27,  30.55], // popularity
			y: [     50.5,   50.7,   53.4,   44.1,  47.15,  45.75,  44.11], // love
			type: 'scatter'
		}

		const cSharp = {
			name: 'C#',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     34.1,   34.4,   31.0,   31.4,  27.86,  27.98,  27.62], // popularity
			y: [     61.7,   60.4,   67.0,   59.7,  61.96,  63.39,  62.87], // love
			type: 'scatter'
		}

		const python = {
			name: 'Python',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     32.0,   38.8,   41.7,   44.1,  48.24,  48.07,  49.28], // popularity
			y: [     62.7,   60.8,   73.1,   66.7,  67.83,  67.34,  65.52], // love
			type: 'scatter'
		}

		const php = {
			name: 'PHP',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     28.1,   30.7,   26.4,   26.2,  21.98,  20.87,  18.58], // popularity
			y: [     41.4,   41.6,   45.8,   37.3,  40.24,  41.61,  41.83], // love
			type: 'scatter'
		}

		const typescript = {
			name: 'TypeScript',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [      9.5,   17.4,   21.2,   25.4,  30.19,  34.83,  38.87], // popularity
			y: [     64.1,   67.0,   73.1,   67.1,  72.73,  73.46,  71.70], // love
			type: 'scatter'
		}

		const ruby = {
			name: 'Ruby',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [      9.1,   10.1,    8.4,    7.1,   6.75,   6.05,   6.23], // popularity
			y: [     48.5,   47.4,   50.3,   42.9,  53.24,  49.99,  47.69], // love
			type: 'scatter'
		}

		const go = {
			name: 'Go',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [      4.3,    7.1,    8.2,    8.8,   9.55,  11.15,  13.24], // popularity
			y: [     63.3,   65.6,   67.9,   62.3,  62.74,  64.58,  62.45], // love
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

		const data = [javascript, sql, java, cSharp, python, php, typescript, ruby, go];
		Plotly.newPlot( 'tester', data, layout, config) // https://plotly.com/javascript/line-charts/

		const mysql = {
			name: 'MySQL',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     55.6,   58.7,   54.0,   55.6,  50.18,  46.85,  41.09], // popularity
			y: [     49.6,   48.7,   53.9,   47.1,  51.35,  51.17,  50.77], // love
			type: 'scatter'
		}

		const postgresql = {
			name: 'PostgreSQL',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     26.5,   32.9,   34.3,   36.1,  40.42,  43.59,  45.55], // popularity
			y: [     60.8,   62.0,   69.6,   63.9,  70.40,  72.08,  71.32], // love
			type: 'scatter'
		}

		const mongodb = {
			name: 'MongoDB',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     21.0,   25.9,   25.5,   26.4,   27.7,   28.3,  25.52], // popularity
			y: [     55.0,   55.1,   59.5,   56.0,  60.28,  60.51,  55.21], // love
			type: 'scatter'
		}

		const sqlite = {
			name: 'SQLite',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     26.6,   19.7,   31.6,   31.2,   32.8,  32.01,   30.9], // popularity
			y: [     47.2,   48.1,   55.6,   49.4,  54.43,  57.51,  58.96], // love
			type: 'scatter'
		}

		const db_data = [mysql, postgresql, mongodb, sqlite]
		Plotly.newPlot('db', db_data, layout, config)


		const react = {
			name: 'React',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     19.5,   27.8,   31.3,   35.9,  40.14,  42.62,  40.58], // popularity
			y: [     66.9,   69.4,   74.5,   68.9,  69.28,  68.19,  63.61], // love
			type: 'scatter'
		}

		const angular = {
			name: 'Angular',
			mode: 'lines+markers',
			text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
			x: [     44.3,   36.9,   30.7,   25.1,  22.96,  20.39,  17.46], // popularity
			y: [     51.7,   54.6,   57.6,   54.0,  55.82,  52.27,  50.75], // love
			type: 'scatter'
		}

		const jquery = {
			name: 'jQuery',
			mode: 'lines+markers',
			text: ['2019', '2020', '2021', '2022', '2023'],
			x: [     48.7,   43.3,  34.42,  28.57,  21.98], // popularity
			y: [     45.3,   36.5,  35.29,   34.0,  32.89], // love
			type: 'scatter'
		}

		const laravel = {
			name: 'Laravel',
			mode: 'lines+markers',
			text: ['2019', '2020', '2021', '2022', '2023'],
			x: [     10.5,   11.1,  10.12,   9.45,   7.58], // popularity
			y: [     60.1,   51.4,  53.79,  54.47,  52.63], // love
			type: 'scatter'
		}

		const express = {
			name: 'Express',
			mode: 'lines+markers',
			text: ['2019', '2020', '2021', '2022', '2023'],
			x: [     19.7,   21.2,  23.82,  22.99,  19.28], // popularity
			y: [     68.3,   61.9,  62.07,  59.15,  54.26], // love
			type: 'scatter'
		}

		const svelte = {
			name: 'Svelte',
			mode: 'lines+markers',
			text: ['2021', '2022', '2023'],
			x: [     2.75,   4.58,   6.62], // popularity
			y: [    71.47,  75.28,  74.50], // love
			type: 'scatter'
		}

		const framework_data = [react, angular, jquery, laravel, express, svelte]
		Plotly.newPlot('framework', framework_data, layout, config)
	})

</script>