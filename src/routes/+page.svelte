<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>Double-click anywhere on the plot area to reset the zoom level.</p>
<div id="programming_languages" style="width:800px;height:800px;"></div> <!-- https://plotly.com/javascript/getting-started/ -->
<div id="db" style="width:800px;height:800px;"></div>
<div id="framework" style="width:800px;height:800px;"></div>
<div id="other_frameworks" style="width:800px;height:800px;"></div>
<div id="cloud_platforms" style="width:800px;height:800px;"></div>

<script>
	import { onMount } from 'svelte'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

		const pl_data = [
			{
				name: 'JavaScript',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     62.5,   69.8,   67.8,   67.7,  64.96,  65.36,  63.61], // popularity
				y: [     59.8,   61.9,   66.8,   58.3,  61.51,  61.46,  57.83], // love
				type: 'scatter'
			}, {
				name: 'SQL',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     51.2,     57,   54.4,   54.7,   47.8,  49.43,  48.66], // popularity
				y: [     53.4,   57.5,  64.1,    56.6,  61.83,  64.25,  64.26], // love
				type: 'scatter'
			}, {
				name: 'Java',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     39.7,   45.3,   41.1,   40.2,  35.35,  33.27,  30.55], // popularity
				y: [     50.5,   50.7,   53.4,   44.1,  47.15,  45.75,  44.11], // love
				type: 'scatter'
			}, {
				name: 'C#',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     34.1,   34.4,   31.0,   31.4,  27.86,  27.98,  27.62], // popularity
				y: [     61.7,   60.4,   67.0,   59.7,  61.96,  63.39,  62.87], // love
				type: 'scatter'
			}, {
				name: 'Python',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     32.0,   38.8,   41.7,   44.1,  48.24,  48.07,  49.28], // popularity
				y: [     62.7,   60.8,   73.1,   66.7,  67.83,  67.34,  65.52], // love
				type: 'scatter'
			}, {
				name: 'PHP',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     28.1,   30.7,   26.4,   26.2,  21.98,  20.87,  18.58], // popularity
				y: [     41.4,   41.6,   45.8,   37.3,  40.24,  41.61,  41.83], // love
				type: 'scatter'
			}, {
				name: 'TypeScript',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [      9.5,   17.4,   21.2,   25.4,  30.19,  34.83,  38.87], // popularity
				y: [     64.1,   67.0,   73.1,   67.1,  72.73,  73.46,  71.70], // love
				type: 'scatter'
			}, {
				name: 'Ruby',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [      9.1,   10.1,    8.4,    7.1,   6.75,   6.05,   6.23], // popularity
				y: [     48.5,   47.4,   50.3,   42.9,  53.24,  49.99,  47.69], // love
				type: 'scatter'
			}, {
				name: 'Go',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [      4.3,    7.1,    8.2,    8.8,   9.55,  11.15,  13.24], // popularity
				y: [     63.3,   65.6,   67.9,   62.3,  62.74,  64.58,  62.45], // love
				type: 'scatter'
			}, {
				name: 'Swift',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [      6.5,    8.1,    6.6,    5.9,    5.1,   4.91,   4.65], // popularity
				y: [     63.9,   65.1,   69.2,   59.5,  63.56,  62.88,  61.42], // love
				type: 'scatter'
			}, {
				name: 'C',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     19.0,   23.0,   20.6,   21.8,  21.01,  19.27,  19.34], // popularity
				y: [     41.7,   37.4,   42.5,   33.1,  39.56,  39.68,  43.29], // love
				type: 'scatter'
			}, {
				name: 'C++',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     22.3,   25.4,   23.5,   23.9,  24.31,  22.55,  22.42], // popularity
				y: [     52.0,   46.7,   52.0,   43.4,  49.24,  48.39,  49.77], // love
				type: 'scatter'
			}, {
				name: 'Kotlin',
				mode: 'lines+markers',
				text: ['2018', '2019', '2020', '2021', '2022', '2023'],
				x: [      4.5,    6.4,    7.8,   8.32,   9.16,   9.06], // popularity
				y: [     75.1,   72.6,   62.9,  61.55,  63.29,  60.77], // love
				type: 'scatter'
			}, {
				name: 'Dart',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [      1.9,    4.0,   6.02,   6.54,   6.02], // popularity
				y: [     66.3,   62.1,  63.77,  62.16,  58.56], // love
				type: 'scatter'
			}, {
				name: 'Rust',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [      3.2,    5.1,   7.03,   9.32,  13.05], // popularity
				y: [     83.5,   86.1,  86.98,  86.73,  84.66], // love
				type: 'scatter'
			}
		]

		const layout = {
			title: 'Title of the Graph',
			dragmode: 'pan', // false, // https://plotly.com/javascript/reference/#layout-dragmode
			xaxis: {
				title: 'Popularity',
				range: [0, 100], // https://stackoverflow.com/q/76736430/9157799
				//fixedrange: true // prevents zoom | https://plotly.com/javascript/reference/#layout-xaxis-fixedrange
				scaleanchor: 'y', // https://community.plotly.com/t/autoscale-y-axis-on-double-click-for-data-in-view/74537/3?u=imambungo
			},
			yaxis: {
				title: 'Love',
				range: [0, 100],
				//fixedrange: true
			}
		}

		const config = { // https://plotly.com/javascript/configuration-options/
			scrollZoom: true,
			displayModeBar: false,
			showAxisDragHandles: false // https://stackoverflow.com/a/76736023/9157799
		}

		const dataToAnnotations = data => data.map(data => ({  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
			x: data.x.at(-1),  // https://stackoverflow.com/a/3216041/9157799
			y: data.y.at(-1),
			xref: 'x',
			yref: 'y',
			text: data.name,
			showarrow: false,
			font: {
				size: 14,
			},
			yshift: 9  // https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-yshift
		}))

		Plotly.newPlot('programming_languages', pl_data, {
			...layout,
			title: 'Programming, scripting, and markup languages',
			annotations: dataToAnnotations(pl_data)  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		const db_data = [
			{
				name: 'MySQL',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     55.6,   58.7,   54.0,   55.6,  50.18,  46.85,  41.09], // popularity
				y: [     49.6,   48.7,   53.9,   47.1,  51.35,  51.17,  50.77], // love
				type: 'scatter'
			}, {
				name: 'PostgreSQL',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     26.5,   32.9,   34.3,   36.1,  40.42,  43.59,  45.55], // popularity
				y: [     60.8,   62.0,   69.6,   63.9,  70.40,  72.08,  71.32], // love
				type: 'scatter'
			}, {
				name: 'MongoDB',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     21.0,   25.9,   25.5,   26.4,   27.7,   28.3,  25.52], // popularity
				y: [     55.0,   55.1,   59.5,   56.0,  60.28,  60.51,  55.21], // love
				type: 'scatter'
			}, {
				name: 'Microsoft SQL Server',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     38.6,   41.2,   32.8,   26.4,   33.0,  26.87,  26.87], // popularity
				y: [     54.2,   51.6,   59.5,   57.5,   50.9,  54.08,  54.95], // love
				type: 'scatter'
			}, {
				name: 'SQLite',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     26.6,   19.7,   31.6,   31.2,   32.8,  32.01,   30.9], // popularity
				y: [     47.2,   48.1,   55.6,   49.4,  54.43,  57.51,  58.96], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('db', db_data, {
			...layout,
			title: 'Databases',
			annotations: dataToAnnotations(db_data)  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/


		const framework_data = [
			{
				name: 'React',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     19.5,   27.8,   31.3,   35.9,  40.14,  42.62,  40.58], // popularity
				y: [     66.9,   69.4,   74.5,   68.9,  69.28,  68.19,  63.61], // love
				type: 'scatter'
			}, {
				name: 'Angular',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     44.3,   36.9,   30.7,   25.1,  22.96,  20.39,  17.46], // popularity
				y: [     51.7,   54.6,   57.6,   54.0,  55.82,  52.27,  50.75], // love
				type: 'scatter'
			}, {
				name: 'jQuery',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     48.7,   43.3,  34.42,  28.57,  21.98], // popularity
				y: [     45.3,   36.5,  35.29,   34.0,  32.89], // love
				type: 'scatter'
			}, {
				name: 'Laravel',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     10.5,   11.1,  10.12,   9.45,   7.58], // popularity
				y: [     60.1,   51.4,  53.79,  54.47,  52.63], // love
				type: 'scatter'
			}, {
				name: 'ASP.NET',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     26.3,   21.9,  15.74,   14.9,  12.79], // popularity
				y: [     64.9,   36.9,  36.40,  37.63,  38.26], // love
				type: 'scatter'
			}, {
				name: 'ASP.NET Core',
				mode: 'lines+markers',
				text: ['2020', '2021', '2022', '2023'],
				x: [     19.1,   18.1,  18.59,  16.57], // popularity
				y: [     70.7,  71.47,  71.49,  70.89], // love
				type: 'scatter'
			}, {
				name: 'Spring Boot',
				mode: 'lines+markers',
				text: ['2023'],
				x: [    11.95], // popularity
				y: [    59.49], // love
				type: 'scatter'
			}, {
				name: 'Express',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     19.7,   21.2,  23.82,  22.99,  19.28], // popularity
				y: [     68.3,   61.9,  62.07,  59.15,  54.26], // love
				type: 'scatter'
			}, {
				name: 'Ruby on Rails',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [      8.2,    7.0,   7.04,   5.83,   5.49], // popularity
				y: [     57.1,   49.3,  57.55,  55.34,  52.97], // love
				type: 'scatter'
			}, {
				name: 'Gatsby',
				mode: 'lines+markers',
				text: ['2020', '2021', '2022', '2023'],
				x: [      4.0,   3.97,   3.46,   2.33], // popularity
				y: [     60.7,  48.66,  35.57,  28.66], // love
				type: 'scatter'
			}, {
				name: 'Svelte',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [     2.75,   4.58,   6.62], // popularity
				y: [    71.47,  75.28,  74.50], // love
				type: 'scatter'
			}, {
				name: 'FastAPI',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [     3.88,   6.02,   7.42], // popularity
				y: [    70.04,  67.74,  64.49], // love
				type: 'scatter'
			}, {
				name: 'Next.js',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    13.52,  16.67], // popularity
				y: [    69.23,  65.95], // love
				type: 'scatter'
			}, {
				name: 'Vue.js',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     15.2,   17.3,  18.97,  18.82,  16.38], // popularity
				y: [     73.6,   66.0,  64.41,  63.16,  57.87], // love
				type: 'scatter'
			}, {
				name: 'Node.js',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     47.1,   49.6,   49.9,   51.4,  33.91,  47.12,  42.65], // popularity
				y: [     62.1,   66.4,   72.1,   66.8,  63.22,  67.36,  64.63], // love
				type: 'scatter'
			}, {
				name: 'Django',
				mode: 'lines+markers',
				text: ['2018', '2019', '2020', '2021', '2022', '2023'],
				x: [     13.0,   13.0,   14.2,  14.99,  14.65,  11.47], // popularity
				y: [     58.3,   62.1,   55.3,  55.28,  53.10,  50.51], // love
				type: 'scatter'
			}, {
				name: 'Flask',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     12.1,   14.2,  16.14,  14.64,  12.16], // popularity
				y: [     61.1,   54.4,  51.04,  48.41,  45.36], // love
				type: 'scatter'
			}, {
				name: 'WordPress',
				mode: 'lines+markers',
				text: ['2017', '2018', '2019', '2020', '2023'],
				x: [     15.6,   15.9,   14.5,   14.2,  13.38], // popularity
				y: [     35.5,   36.8,   40.5,   33.0,  32.52], // love
				type: 'scatter'
			}, {
				name: 'Deno',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [     1.41,   1.69,   2.36], // popularity
				y: [    68.45,  72.32,  63.82], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('framework', framework_data, {
			...layout,
			title: 'Web frameworks and technologies',
			annotations: dataToAnnotations(framework_data)  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/


		const other_frameworks_data = [
			{
				name: 'React Native',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [     10.5,   11.5,  14.51,  12.57,   8.43], // popularity
				y: [     62.5,   57.9,  58.08,  55.98,   54.0], // love
				type: 'scatter'
			}, {
				name: 'Flutter',
				mode: 'lines+markers',
				text: ['2019', '2020', '2021', '2022', '2023'],
				x: [      3.4,    7.2,  13.55,  12.64,   9.12], // popularity
				y: [     75.4,   68.8,  68.17,  68.03,  64.43], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('other_frameworks', other_frameworks_data, {
			...layout,
			title: 'Other frameworks and libraries',
			annotations: dataToAnnotations(other_frameworks_data)  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		const cloud_platforms_data = [ // don't use data from before 2021 since they're not specifically cloud platforms
			{
				name: 'Firebase',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    21.14,  15.47], // popularity
				y: [    57.45,  54.46], // love
				type: 'scatter'
			}, {
				name: 'Google Cloud',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    31.05,  26.81,  23.86], // popularity
				y: [    59.65,  58.18,  55.13], // love
				type: 'scatter'
			}, {
				name: 'Microsoft Azure',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    30.77,  28.72,  26.03], // popularity
				y: [    59.23,  59.42,  59.93], // love
				type: 'scatter'
			}, {
				name: 'DigitalOcean',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    17.67,  15.64,  13.37], // popularity
				y: [    58.85,  57.61,  53.04], // love
				type: 'scatter'
			}, {
				name: 'Heroku',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [       24,  19.98,  12.02], // popularity
				y: [    48.17,  43.65,  21.97], // love
				type: 'scatter'
			}, {
				name: 'Oracle Cloud Infrastructure (OCI)',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [     1.89,   2.18,    2.6], // popularity
				y: [    42.80,  50.90,  55.08], // love
				type: 'scatter'
			}, {
				name: 'AWS',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    54.22,  51.01,  48.62], // popularity
				y: [    66.55,  66.32,  62.24], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('cloud_platforms', cloud_platforms_data, {
			...layout,
			title: 'Cloud platforms',
			annotations: dataToAnnotations(cloud_platforms_data)  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/
	})

</script>