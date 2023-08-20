<div class='aspect-square landscape:h-[90vh] max-w-5xl'> <!-- https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js -->
   <canvas bind:this={canvas} id="acquisitions"></canvas> <!-- https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294 -->
</div>
<button on:click={() => chart.resetZoom()}>reset zoom</button> <!-- https://stackoverflow.com/a/68294029/9157799 -->

<script>
   import { onMount } from 'svelte' // https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294

   import { Chart,
		ScatterController, LinearScale, PointElement, LineElement,
      Title,                                                     // https://stackoverflow.com/a/75210481/9157799
	} from 'chart.js' // https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js | https://stackoverflow.com/a/67143648/9157799
	import zoomPlugin from "chartjs-plugin-zoom" // https://www.chartjs.org/docs/latest/#features | https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://stackoverflow.com/a/76910295/9157799
   import annotationPlugin from 'chartjs-plugin-annotation' // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/

   Chart.register(
		zoomPlugin,                                                // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://www.chartjs.org/docs/latest/developers/plugins.html#global-plugins
      annotationPlugin,                                          // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/integration.html
		ScatterController, LinearScale, PointElement, LineElement, // https://stackoverflow.com/a/67143648/9157799
      Title,                                                     // https://stackoverflow.com/a/75210481/9157799
	)

   export let datasets
   export let title
   let canvas
   let chart

   const datasets_to_label_annotations = datasets => {
      const annotations = {}
      datasets.forEach(item => {
         annotations[item.label] = { // https://stackoverflow.com/a/8317995/9157799
            type: 'label',
            content: item.label, // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/types/label.html#label-annotation-specific-options
            xValue: item.data.at(-1).popularity, // at(-1) --> https://stackoverflow.com/a/3216041/9157799
            yValue: item.data.at(-1).love, // at(-1) --> https://stackoverflow.com/a/3216041/9157799
            font: {
               size: 14 // https://tailwindcss.com/docs/font-size
            },
         }
      })
      return annotations
   }

   onMount(() => {
      chart = new Chart(  // https://www.chartjs.org/docs/latest/charts/scatter.html | https://stackoverflow.com/a/68294029/9157799
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
               aspectRatio: 1, // https://stackoverflow.com/a/70720880/9157799
					showLine: true, // https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties
               scales: {
                  x: { // https://www.chartjs.org/docs/latest/axes/#default-scales
                     min: 0,
                     max: 100,
                     title: { // https://www.chartjs.org/docs/latest/axes/labelling.html
                        display: true, // false by default
                        text: 'Popularity',
                     }
                  },
                  y: { // https://www.chartjs.org/docs/latest/axes/#default-scales
                     min: 0,
                     max: 100,
                     title: { // https://www.chartjs.org/docs/latest/axes/labelling.html
                        display: true, // false by default
                        text: 'Love',
                     }
                  }
               },
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
                     limits: { // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/options.html#limits
                        x: {min: 'original', max: 'original'},
                        y: {min: 'original', max: 'original'},
                     }
						},
                  annotation: { // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/usage.html
                     annotations: datasets_to_label_annotations(datasets)
                  },
                  title: { // https://www.chartjs.org/docs/latest/configuration/title.html
                     display: true, // false by default
                     text: title
                  },
					},
               onHover: (event, active_elements, chart) => { // https://www.chartjs.org/docs/latest/configuration/interactions.html#events
                  console.log(event)

                  if (active_elements.length > 0) {
                     console.log('AHOY! ' + active_elements.length + ' active elements')
                     console.log('the first active elements down below')
                     const data = active_elements[0].element.$context.dataset.data
                     console.log(data)

                     const highlight_data_year_of_the_same_dataset = (chart, data) => {
                        const data_to_year_annotations = (data) => { // because the plugin interaction doesn't support dataset mode:  https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/options.html#interaction
                           const annotations = {}
                           data.forEach(element => {
                              annotations[element.year] = { // https://stackoverflow.com/a/2241883/9157799
                                 type: 'label',
                                 content: element.year, // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/types/label.html#label-annotation-specific-options
                                 xValue: element.popularity,
                                 yValue: element.love,
                                 font: {
                                    size: 14 // https://tailwindcss.com/docs/font-size
                                 },
                              }
                           })
                           return annotations
                        }

                        chart.options.plugins.annotation.annotations = data_to_year_annotations(data) // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
                        chart.update()                                                           // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
                     }
                     highlight_data_year_of_the_same_dataset(chart, data)
                  }

                  if (active_elements.length == 0) {
                     chart.options.plugins.annotation.annotations = datasets_to_label_annotations(datasets)  // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
                     chart.update()
                  }
               },
               elements: {
                  point: {
                     hitRadius: 20, // https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration
                  }
               },
               animations: false, // https://www.chartjs.org/docs/latest/configuration/animations.html#disabling-animation
				},
			}
		)
   })
</script>