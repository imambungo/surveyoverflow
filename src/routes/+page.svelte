<svelte:head>
   <title>Survey Overflow - Stack Overflow survey trends over the years</title>
   <meta name="description" content="See how Stack Overflow Developer Survey results change over the years.">
</svelte:head>

<div class='lg:max-w-5xl lg:mx-auto flex flex-col gap-10 landscape:items-center'>
	<header class='p-4 mb-4 flex flex-col gap-3 items-center lg:max-w-5xl lg:mx-auto w-full'>
      <div class='flex justify-between w-full'> <!-- website name and social media links -->
         <p class='text-lg font-semibold text-slate-700'>Survey Overflow</p>
         <div class='flex gap-3 justify-center text-slate-600 decoration-slate-300 text-xs font-medium items-center mt-1'>
            <a class='underline' target='_blank' href='https://github.com/imambungo/surveyoverflow'>GitHub</a>
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
	<p class='p-4 text-sm text-slate-500'>
		Note: The data isn't currently complete. If there's some data you want to add, you can submit a PR <a class='text-sky-500' target='_blank' href='https://github.com/imambungo/surveyoverflow#contributing'>here</a>.
	</p>

	<ChartJS datasets={pl_data}></ChartJS>
	<ChartJS datasets={db_data}></ChartJS>
	<ChartJS datasets={cloud_platforms_data}></ChartJS>
	<ChartJS datasets={web_frameworks_data}></ChartJS>
	<ChartJS datasets={other_frameworks_data}></ChartJS>
	<ChartJS datasets={other_tools_data}></ChartJS>

	<!-- <div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="programming_languages"></div> <!~~ https://plotly.com/javascript/getting-started/ ~~>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="db"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="cloud_platforms"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="web_frameworks"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="other_frameworks"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="other_tools"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="ide"></div>
	<div class='aspect-square landscape:h-[90vh] max-w-5xl max-h-[64rem]' id="async_tools"></div> -->
	<footer class='text-center p-6'>
      <p class='mt-2 text-xs font-light whitespace-nowrap decoration-slate-300 text-slate-500'>
			App <a class='underline' target="_blank" href="https://icons8.com/icon/MUzrfFgK6i0O/line-chart">icon</a> by <a class='underline' target="_blank" href="https://icons8.com">Icons8</a>.
      </p>
   </footer>
</div>

<script>
	import ChartJS from './ChartJS.svelte'

	import pl_data from './pl_data.js'
	import db_data from './db_data.js'
	import cloud_platforms_data from './cloud_platforms_data.js'
	import web_frameworks_data from './web_frameworks_data.js'
	import other_frameworks_data from './other_frameworks_data.js'
	import other_tools_data from './other_tools_data.js'
	import ide_data from './ide_data.js'
	import async_tools_data from './async_tools_data.js'

	// onMount(async () => {
	// 	// new Chart(
	// 	// 	document.getElementById('coba'),
	// 	// 	{
	// 	// 		type: 'line',
	// 	// 		data: {
	// 	// 			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	// 	// 			datasets: [{
	// 	// 				label: 'My First Dataset',
	// 	// 				data: [65, 59, 80, 81, 56, 55, 40],
	// 	// 				fill: false,
	// 	// 				borderColor: 'rgb(75, 192, 192)',
	// 	// 				tension: 0.1
	// 	// 			}]
	// 	// 		},
	// 	// 		options: {
	// 	// 			plugins: {
	// 	// 				zoom: {
	// 	// 					zoom: {
	// 	// 						wheel: {
	// 	// 							enabled: true,
	// 	// 						},
	// 	// 						pinch: {
	// 	// 							enabled: true
	// 	// 						},
	// 	// 						mode: 'xy',
	// 	// 					},
	// 	// 					pan: {
	// 	// 						enabled: true
	// 	// 					},
	// 	// 				}
	// 	// 			}
	// 	// 		}
	// 	// 	}
	// 	// )

	// 	// const Plotly = await import('plotly.js-dist-min') // https://www.npmjs.com/package/plotly.js | https://stackoverflow.com/a/76728081/9157799

	// 	// const layout = {
	// 	// 	dragmode: 'pan', // false, // https://plotly.com/javascript/reference/#layout-dragmode
	// 	// 	xaxis: {
	// 	// 		title: 'Popularity',
	// 	// 		range: [0, 100], // https://stackoverflow.com/q/76736430/9157799
	// 	// 		//fixedrange: true // prevents zoom | https://plotly.com/javascript/reference/#layout-xaxis-fixedrange
	// 	// 		scaleanchor: 'y', // https://community.plotly.com/t/autoscale-y-axis-on-double-click-for-data-in-view/74537/3?u=imambungo
	// 	// 	},
	// 	// 	yaxis: {
	// 	// 		title: 'Love',
	// 	// 		range: [0, 100],
	// 	// 		//fixedrange: true
	// 	// 	},
	// 	// 	legend: {
	// 	// 		orientation: 'h',  // https://plotly.com/javascript/legend/#changing-the-orientation-of-legend | https://plotly.com/javascript/reference/layout/#layout-legend-orientation
	// 	// 	},
	// 	// 	showlegend: false,
	// 	// 	margin: {  // https://plotly.com/javascript/reference/layout/#layout-margin
	// 	// 		b: 35,
	// 	// 		l: 35,
	// 	// 		r: 35,
	// 	// 		t: 35
	// 	// 	},
	// 	// 	shapes: [
	// 	// 		{
	// 	// 			type: 'rect',
	// 	// 			xref: 'x',
	// 	// 			yref: 'y',
	// 	// 			x0: 0,
	// 	// 			y0: 0,
	// 	// 			x1: 100,
	// 	// 			y1: 100,
	// 	// 			fillcolor: 'rgba(220, 220, 220, 0.1)', // Transparent color
	// 	// 			line: {
	// 	// 				width: 0,
	// 	// 			},
	// 	// 		},
	// 	// 	],
	// 	// 	annotations: [
	// 	// 		{
	// 	// 			xref: 'paper', // paper: make it sticky | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xref
	// 	// 			yref: 'paper',
	// 	// 			x: 1, // right side of the plot area | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xref
	// 	// 			y: 0, // bottom of the plot area
	// 	// 			text: 'Double-click anywhere to reset the zoom level',
	// 	// 			xanchor: 'right', // text on the left | https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-xanchor
	// 	// 			yanchor: 'bottom', // text above
	// 	// 			showarrow: false,
	// 	// 			font: {
	// 	// 				size: 12,
	// 	// 				color: 'rgba(5, 5, 5, 0.5)'
	// 	// 			},
	// 	// 		}
	// 	// 	]
	// 	// }

	// 	// const config = { // https://plotly.com/javascript/configuration-options/
	// 	// 	scrollZoom: true,
	// 	// 	displayModeBar: false,
	// 	// 	showAxisDragHandles: false, // https://stackoverflow.com/a/76736023/9157799
	// 	// 	responsive: true // https://plotly.com/javascript/responsive-fluid-layout/
	// 	// }

	// 	// const dataToAnnotations = data => data.map(data => ({  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// 	x: data.x.at(-1),  // https://stackoverflow.com/a/3216041/9157799
	// 	// 	y: data.y.at(-1),
	// 	// 	xref: 'x',
	// 	// 	yref: 'y',
	// 	// 	text: data.name,
	// 	// 	showarrow: false,
	// 	// 	font: {
	// 	// 		size: 12,
	// 	// 	},
	// 	// 	yshift: 9  // https://plotly.com/javascript/reference/layout/annotations/#layout-annotations-items-annotation-yshift
	// 	// }))

	// 	// Plotly.newPlot('programming_languages', pl_data, {
	// 	// 	...layout,
	// 	// 	title: 'Programming, scripting, and markup languages',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(pl_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('db', db_data, {
	// 	// 	...layout,
	// 	// 	title: 'Databases',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(db_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('cloud_platforms', cloud_platforms_data, {
	// 	// 	...layout,
	// 	// 	title: 'Cloud platforms',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(cloud_platforms_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('web_frameworks', web_frameworks_data, {
	// 	// 	...layout,
	// 	// 	title: 'Web frameworks and technologies',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(web_frameworks_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('other_frameworks', other_frameworks_data, {
	// 	// 	...layout,
	// 	// 	title: 'Other frameworks and libraries',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(other_frameworks_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('other_tools', other_tools_data, {
	// 	// 	...layout,
	// 	// 	title: 'Other tools',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(other_tools_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/

	// 	// Plotly.newPlot('ide', ide_data, {
	// 	// 	...layout,
	// 	// 	title: 'Integrated development environment',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(ide_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/
		
	// 	// Plotly.newPlot('async_tools', async_tools_data, {
	// 	// 	...layout,
	// 	// 	title: 'Asynchronous tools',
	// 	// 	annotations: [...layout.annotations , ...dataToAnnotations(async_tools_data)]  // https://plotly.com/javascript/text-and-annotations/#multiple-annotations
	// 	// }, config) // https://plotly.com/javascript/line-charts/
	// })

</script>