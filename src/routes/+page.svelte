<svelte:head>
   <title>Survey Overflow - Stack Overflow survey trends over the years</title>
   <meta name="description" content="See how Stack Overflow Developer Survey results change over the years.">
</svelte:head>

<div class='lg:max-w-5xl lg:mx-auto flex flex-col gap-10 landscape:items-center'>
	<header class='p-4 mb-4 flex flex-col gap-3 items-center lg:max-w-5xl lg:mx-auto w-full'>
      <div class='flex justify-between w-full'> <!-- website name and social media links -->
         <p class='text-lg font-semibold text-slate-700'>Survey Overflow</p>
         <div class='flex gap-3 justify-center text-slate-600 decoration-slate-300 text-xs font-medium items-center mt-1'>
            <a class='underline' target='_blank' href='https://github.com/imambungo/survey-overflow'>GitHub</a>
         </div>
      </div>
      <div class='my-4 flex flex-col items-center gap-3 w-full'> <!-- header 1 and header text -->
         <h1 class='mt-3 text-2xl font-semibold text-slate-800 text-center w-full'>
            Stack Overflow Developer Survey trends.
         </h1>
         <p class='text-slate-600 text-center w-full leading-snug'>
				See how the result of the Stack Overflow survey changes over the years.
         </p>
      </div>
   </header>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="programming_languages" ></div> <!-- https://plotly.com/javascript/getting-started/ -->
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="db"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="cloud_platforms"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="framework"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="other_frameworks"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="other_tools"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="ide"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="async_tools"></div>
	<footer class='text-center p-6 text-xs'>
      <p class='mt-2 font-light text-slate-500'>
         <span class='whitespace-nowrap decoration-slate-300'>
            App <a class='underline' target="_blank" href="https://icons8.com/icon/MUzrfFgK6i0O/line-chart">icon</a> by <a class='underline' target="_blank" href="https://icons8.com">Icons8</a>.
         </span>
      </p>
   </footer>
</div>

<script>
	import { onMount } from 'svelte'

	import pl_data from './pl_data.js'
	import db_data from './db_data.js'
	import cloud_platforms_data from './cloud_platforms_data.js'

	onMount(async () => {
		const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

		const layout = {
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
			},
			legend: {
				orientation: 'h',  // https://plotly.com/javascript/legend/#changing-the-orientation-of-legend | https://plotly.com/javascript/reference/layout/#layout-legend-orientation
			},
			showlegend: false,
			margin: {  // https://plotly.com/javascript/reference/layout/#layout-margin
				b: 35,
				l: 35,
				r: 35,
				t: 35
			},
			shapes: [
				{
					type: 'rect',
					xref: 'x',
					yref: 'y',
					x0: 0,
					y0: 0,
					x1: 100,
					y1: 100,
					fillcolor: 'rgba(220, 220, 220, 0.1)', // Transparent color
					line: {
						width: 0,
					},
				},
			],
			annotations: [
				{
					xref: 'paper', // paper: make it sticky | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xref
					yref: 'paper',
					x: 1, // right side of the plot area | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xref
					y: 0, // bottom of the plot area
					text: 'Double-click anywhere to reset the zoom level',
					xanchor: 'right', // text on the left | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xanchor
					yanchor: 'bottom', // text above
					showarrow: false,
					font: {
						size: 12,
						color: 'rgba(5, 5, 5, 0.5)'
					},
				}
			]
		}

		const config = { // https://plotly.com/javascript/configuration-options/
			scrollZoom: true,
			displayModeBar: false,
			showAxisDragHandles: false, // https://stackoverflow.com/a/76736023/9157799
			responsive: true // https://plotly.com/javascript/responsive-fluid-layout/
		}

		const dataToAnnotations = data => data.map(data => ({  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
			x: data.x.at(-1),  // https://stackoverflow.com/a/3216041/9157799
			y: data.y.at(-1),
			xref: 'x',
			yref: 'y',
			text: data.name,
			showarrow: false,
			font: {
				size: 12,
			},
			yshift: 9  // https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-yshift
		}))

		Plotly.newPlot('programming_languages', pl_data, {
			...layout,
			title: 'Programming, scripting, and markup languages',
			annotations: [...layout.annotations , ...dataToAnnotations(pl_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		Plotly.newPlot('db', db_data, {
			...layout,
			title: 'Databases',
			annotations: [...layout.annotations , ...dataToAnnotations(db_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
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
			annotations: [...layout.annotations , ...dataToAnnotations(framework_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
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
			annotations: [...layout.annotations , ...dataToAnnotations(other_frameworks_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		const async_tools_data = [
			{
				name: 'Jira',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    49.47,  52.37], // popularity
				y: [    56.33,  53.10], // love
				type: 'scatter'
			}, {
				name: 'Trello',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    33.32,  19.36], // popularity
				y: [    48.57,  46.94], // love
				type: 'scatter'
			}, {
				name: 'Notion',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    19.82,   17.8], // popularity
				y: [    66.82,  64.28], // love
				type: 'scatter'
			}, {
				name: 'Asana',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [     7.91,   5.04], // popularity
				y: [    37.79,  36.95], // love
				type: 'scatter'
			}, {
				name: 'Airtable',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [     2.94,   2.13], // popularity
				y: [    43.39,  38.50], // love
				type: 'scatter'
			}, {
				name: 'Linear',
				mode: 'lines+markers',
				text: ['2023'],
				x: [     2.07], // popularity
				y: [    74.03], // love
				type: 'scatter'
			}, {
				name: 'Markdown File',
				mode: 'lines+markers',
				text: ['2023'],
				x: [    26.17], // popularity
				y: [    81.83], // love
				type: 'scatter'
			}, {
				name: 'GitHub Discussions',
				mode: 'lines+markers',
				text: ['2023'],
				x: [    16.98], // popularity
				y: [    70.19], // love
				type: 'scatter'
			}, {
				name: 'Confluence',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [     39.8,  34.16], // popularity
				y: [    51.46,  50.10], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('async_tools', async_tools_data, {
			...layout,
			title: 'Asynchronous tools',
			annotations: [...layout.annotations , ...dataToAnnotations(async_tools_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		const ide_data = [
			{
				name: 'Visual Studio Code',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    71.06,  74.48,  73.71], // popularity
				y: [    79.30,  81.00,  76.98], // love
				type: 'scatter'
			}, {
				name: 'Neovim',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [     4.99,   6.75,  11.88], // popularity
				y: [    82.36,  82.92,  81.43], // love
				type: 'scatter'
			}, {
				name: 'Visual Studio',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    33.03,  32.15,  28.43], // popularity
				y: [    60.00,  60.76,  59.98], // love
				type: 'scatter'
			}, {
				name: 'IntelliJ IDEA',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    28.74,  27.97,  26.82], // popularity
				y: [    67.65,  68.08,  66.39], // love
				type: 'scatter'
			}, {
				name: 'Android Studio',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    22.22,   19.8,  16.82], // popularity
				y: [    50.28,  49.41,  46.72], // love
				type: 'scatter'
			}, {
				name: 'Notepad++',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    29.71,  27.71,  24.54], // popularity
				y: [    56.24,  58.85,  60.28], // love
				type: 'scatter'
			}, {
				name: 'Sublime Text',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    20.47,  16.51,  12.61], // popularity
				y: [    51.39,  50.74,  52.04], // love
				type: 'scatter'
			}, {
				name: 'Emacs',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [      5.3,   4.51,   4.69], // popularity
				y: [    68.85,  70.39,  64.61], // love
				type: 'scatter'
			}, {
				name: 'Xcode',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    11.07,  10.53,   9.45], // popularity
				y: [    52.38,  50.22,  49.12], // love
				type: 'scatter'
			}, {
				name: 'Atom',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    12.94,   9.35,   5.63], // popularity
				y: [    33.07,  30.80,  19.12], // love
				type: 'scatter'
			}, {
				name: 'Nano',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [     9.26,   8.98], // popularity
				y: [    57.49,  57.25], // love
				type: 'scatter'
			}, {
				name: 'Vim',
				mode: 'lines+markers',
				text: ['2021', '2022', '2023'],
				x: [    24.19,  23.34,  22.29], // popularity
				y: [    69.70,  69.69,  66.74], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('ide', ide_data, {
			...layout,
			title: 'Integrated development environment',
			annotations: [...layout.annotations , ...dataToAnnotations(ide_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		const other_tools_data = [  // 2022 onwards. Don't use data from 2021 because git is removed since 2022.
			{
				name: 'Docker',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    63.72,  51.55], // popularity
				y: [    76.93,  74.99], // love
				type: 'scatter'
			}, {
				name: 'Yarn',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    27.64,  21.86], // popularity
				y: [    61.90,  54.44], // love
				type: 'scatter'
			}, {
				name: 'pnpm',
				mode: 'lines+markers',
				text: ['2023'],
				x: [     6.28], // popularity
				y: [    71.86], // love
				type: 'scatter'
			}, {
				name: 'Bun',
				mode: 'lines+markers',
				text: ['2023'],
				x: [     0.77], // popularity
				y: [    66.77], // love
				type: 'scatter'
			}, {
				name: 'npm',
				mode: 'lines+markers',
				text: ['2022', '2023'],
				x: [    65.17,  49.36], // popularity
				y: [    62.85,  59.67], // love
				type: 'scatter'
			}
		]

		Plotly.newPlot('other_tools', other_tools_data, {
			...layout,
			title: 'Other tools',
			annotations: [...layout.annotations , ...dataToAnnotations(other_tools_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/

		Plotly.newPlot('cloud_platforms', cloud_platforms_data, {
			...layout,
			title: 'Cloud platforms',
			annotations: [...layout.annotations , ...dataToAnnotations(cloud_platforms_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
		}, config) // https://plotly.com/javascript/line-charts/
	})

</script>