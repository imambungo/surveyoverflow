<div style="width: 800px;"> <!-- https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js -->
   <canvas bind:this={canvas} id="acquisitions"></canvas> <!-- https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294 -->
</div>

<script>
   import { onMount } from 'svelte' // https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294

   import { Chart,
		BarController, CategoryScale, BarElement,
		ScatterController, LinearScale, PointElement, LineElement,
		LineController,
	} from 'chart.js' // https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js | https://stackoverflow.com/a/67143648/9157799
	import zoomPlugin from "chartjs-plugin-zoom" // https://www.chartjs.org/docs/latest/#features | https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://stackoverflow.com/a/76910295/9157799
   import annotationPlugin from 'chartjs-plugin-annotation' // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/

   Chart.register(
		zoomPlugin,                                                // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://www.chartjs.org/docs/latest/developers/plugins.html#global-plugins
      annotationPlugin,                                          // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/integration.html
		BarController, CategoryScale, BarElement,                  // https://stackoverflow.com/a/67143648/9157799
		ScatterController, LinearScale, PointElement, LineElement,
		LineController,
	)

   export let datasets
   let canvas

   onMount(() => {
      new Chart(  // https://www.chartjs.org/docs/latest/charts/scatter.html
			canvas,
			{
				type: 'scatter',
				data: {
					datasets,
				},
				options: {  // https://www.chartjs.org/docs/latest/general/data-structures.html#object-using-custom-properties
					parsing: {
						xAxisKey: 'popularity',
						yAxisKey: 'love',
					},
					showLine: true, // https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties
					plugins: { 
						zoom: { // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/usage.html
							zoom: {
								wheel: {
									enabled: true,
								},
								pinch: {
									enabled: true
								},
								mode: 'xy',
							},
							pan: {
								enabled: true
							},
						},
                  annotation: { // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/usage.html
                     annotations: {
                        label1: {
                           type: 'label',
                           xValue: 2.5,
                           yValue: 60,
                           backgroundColor: 'rgba(245,245,245)',
                           content: ['This is my text', 'This is my text, second line'],
                           font: {
                              size: 18
                           }
                        }
                     }
                  }
					},
				},
			}
		)
   })
</script>