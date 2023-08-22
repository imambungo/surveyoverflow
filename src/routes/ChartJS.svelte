<div>
   <div class='aspect-square landscape:h-[88vh] max-w-5xl'> <!-- https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js -->
      <canvas bind:this={canvas} id="acquisitions"></canvas> <!-- https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294 -->
   </div>
   <button on:click={() => chart.resetZoom()} class='bg-slate-100 text-blue-500 rounded-md py-2 px-4 font-medium text-xs ml-8'>Reset zoom</button> <!-- https://stackoverflow.com/a/68294029/9157799 -->
</div>

<script>
   import { onMount } from 'svelte' // https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294

   import {
      Chart,
		ScatterController, LinearScale, PointElement, LineElement,
      Title,                                                     // https://stackoverflow.com/a/75210481/9157799
      Colors,
	} from 'chart.js' // https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js | https://stackoverflow.com/a/67143648/9157799
	import zoomPlugin from "chartjs-plugin-zoom" // https://www.chartjs.org/docs/latest/#features | https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://stackoverflow.com/a/76910295/9157799
   import annotationPlugin from 'chartjs-plugin-annotation' // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/
   import autocolors from 'chartjs-plugin-autocolors' // https://www.chartjs.org/docs/latest/general/colors.html#advanced-color-palettes

   Chart.register(
		zoomPlugin,                                                // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://www.chartjs.org/docs/latest/developers/plugins.html#global-plugins
      annotationPlugin,                                          // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/integration.html
		ScatterController, LinearScale, PointElement, LineElement, // https://stackoverflow.com/a/67143648/9157799
      Title,                                                     // https://stackoverflow.com/a/75210481/9157799
      Colors,
      autocolors,                                                // https://www.chartjs.org/docs/latest/general/colors.html#advanced-color-palettes
	)

   export let datasets
   export let title
   let canvas
   let chart

   const datasets_to_label_annotations = datasets => {
      const annotations = {}
      datasets.forEach(item => {
         annotations[item.label] = { // https://stackoverflow.com/a/8317995/9157799 | https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/types/label.html#label-annotation-specific-options
            type: 'label',
            content: item.label,
            xValue: item.data.at(-1).popularity, // at(-1) --> https://stackoverflow.com/a/3216041/9157799
            yValue: item.data.at(-1).love, // at(-1) --> https://stackoverflow.com/a/3216041/9157799
            yAdjust: -11,
            font: {
               size: 14 // https://tailwindcss.com/docs/font-size
            },
            color: 'rgba(50,50,50)',
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
                  autocolors: { // https://github.com/kurkle/chartjs-plugin-autocolors#mode
                     mode: 'dataset',
                  }
					},
               onHover: (event, active_elements, chart) => { // https://www.chartjs.org/docs/latest/configuration/interactions.html#events
                  console.log(event)

                  const change_opacity = (color, value) => {
                     const get_rgba = (color) => {
                        const array_of_rgba_string = color.replace(/[^\d,.]/g, '').split(',') // https://stackoverflow.com/q/10970958/9157799#comment47468911_10971090
                        const array_of_rgba_number = array_of_rgba_string.map(string => Number(string))
                        return array_of_rgba_number
                     }
                     const [r, g, b, a] = get_rgba(color)
                     const new_color = `rgba(${r},${g},${b},${value})`
                     return new_color
                  }

                  if (active_elements.length > 0) {
                     console.log('AHOY! ' + active_elements.length + ' active elements')
                     const dataset = active_elements[0].element.$context.dataset

                     const highlight_dataset = (chart, dataset) => {
                        const data_to_year_annotations = (data) => { // because the plugin interaction doesn't support dataset mode:  https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/options.html#interaction
                           const annotations = {}
                           data.forEach(element => {
                              annotations[element.year] = { // https://stackoverflow.com/a/2241883/9157799 | https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/types/label.html#label-annotation-specific-options
                                 type: 'label',
                                 content: element.year,
                                 xValue: element.popularity,
                                 yValue: element.love,
                                 font: {
                                    size: 12 // https://tailwindcss.com/docs/font-size
                                 },
                                 color: 'rgba(65,65,65)',
                                 yAdjust: 11,
                              }
                           })
                           return annotations
                        }

                        let label_annotations = datasets_to_label_annotations(datasets)
                        const dim_all_label_except = (label_annotations, highlighted_dataset_label) => {
                           Object.keys(label_annotations).forEach(key => { // https://stackoverflow.com/a/5737192/9157799
                              if (key != highlighted_dataset_label) {
                                 label_annotations[key].color = 'rgba(200,200,200)'
                              } else {
                                 label_annotations[key].color = 'rgba(30,30,30)'
                              }
                           })
                           return label_annotations // btw JavaScript pass object by reference but whatever: https://stackoverflow.com/q/7574054/9157799
                        }
                        label_annotations = dim_all_label_except(label_annotations, dataset.label) // btw JavaScript pass object by reference but whatever: https://stackoverflow.com/q/7574054/9157799
                        chart.options.plugins.annotation.annotations = {...label_annotations, ...data_to_year_annotations(dataset.data)} // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options

                        const highlight_dataset_lines_and_points = (dataset_to_highlight, datasets) => {
                           console.log(
                              dataset_to_highlight.backgroundColor, // 0.75
                              dataset_to_highlight.borderColor      // 0.56
                           ) // the default opacity is 0.75 and 0.56 using autocolors plugin: https://github.com/kurkle/chartjs-plugin-autocolors

                           dataset_to_highlight.backgroundColor = change_opacity(dataset_to_highlight.backgroundColor, 0.9) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                           dataset_to_highlight.borderColor = change_opacity(dataset_to_highlight.borderColor, 0.8)

                           datasets.forEach(dataset => {
                              if (dataset.label != dataset_to_highlight.label) {
                                 dataset.backgroundColor = change_opacity(dataset.backgroundColor, 0.25)
                                 dataset.borderColor = change_opacity(dataset.borderColor, 0.1) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                              }
                           })
                        }
                        highlight_dataset_lines_and_points(dataset, datasets)
                        chart.update()                                                           // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
                     }
                     highlight_dataset(chart, dataset)
                  }

                  if (active_elements.length == 0) {
                     chart.options.plugins.annotation.annotations = datasets_to_label_annotations(datasets)  // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options

                     datasets.forEach(dataset => {
                        dataset.backgroundColor = change_opacity(dataset.backgroundColor, 0.75) // // the default opacity is 0.75 and 0.56 using autocolors plugin: https://github.com/kurkle/chartjs-plugin-autocolors
                        dataset.borderColor = change_opacity(dataset.borderColor, 0.56) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                     })
                     chart.update()
                  }
               },
               elements: {
                  point: {
                     hitRadius: 20, // https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration
                  }
               },
               animations: false, // according to the docs, it should be "animation" (without "s") but the one without "s" doesn't work. Whatever. https://www.chartjs.org/docs/latest/configuration/animations.html#disabling-animation
				},
			}
		)
   })
</script>