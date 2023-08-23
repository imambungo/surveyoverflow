<div class='w-full'>
   <div class='w-[100vw] landscape:h-[75vh] portrait:h-[65vh] max-h-[64rem] max-w-5xl'> <!-- https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js -->
      <canvas bind:this={canvas}></canvas> <!-- https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294 -->
   </div>
   <div class='mt-2 px-2 flex justify-between'>
      <button on:click={() => chart.resetZoom()} class='bg-slate-100 text-blue-500 rounded-md py-2 px-4 font-medium text-xs'>Reset zoom</button> <!-- https://stackoverflow.com/a/68294029/9157799 -->
      <div class='bg-gray-300 rounded-full p-1 w-fit font-semibold text-xs text-white'>
         <button class='px-4 py-1 tracking-tight {popularity_or_love == 'popularity' ? 'rounded-full bg-gray-50 text-gray-700 hover:cursor-default' : ''}' on:click={() => change_yAxisKey('popularity')}>
            Popularity
         </button>
         <button class='px-4 py-1 tracking-tight {popularity_or_love == 'love' ? 'rounded-full bg-gray-50 text-gray-700 hover:cursor-default' : ''}' on:click={() => change_yAxisKey('love')}>
            Love
         </button>
      </div>
   </div>
</div>

<script>
   import { onMount } from 'svelte' // https://stackoverflow.com/q/76910294/9157799#comment135586381_76910294

   import {
      Chart,
      LineElement, LineController, CategoryScale, // https://www.chartjs.org/docs/latest/getting-started/integration.html
      Title, Colors, Tooltip, Legend,                                     // https://stackoverflow.com/a/75210481/9157799
   } from 'chart.js' // https://www.chartjs.org/docs/latest/getting-started/usage.html#build-a-new-application-with-chart-js | https://stackoverflow.com/a/67143648/9157799
   import zoomPlugin from "chartjs-plugin-zoom" // https://www.chartjs.org/docs/latest/#features | https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://stackoverflow.com/a/76910295/9157799
   //import annotationPlugin from 'chartjs-plugin-annotation' // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/

   import { change_opacity } from '$lib/change_opacity.js'

   Chart.register(
      zoomPlugin,                                                // https://www.chartjs.org/chartjs-plugin-zoom/latest/guide/integration.html | https://www.chartjs.org/docs/latest/developers/plugins.html#global-plugins
      //annotationPlugin,                                          // https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/integration.html
      LineElement, LineController, CategoryScale, // https://www.chartjs.org/docs/latest/getting-started/integration.html
      Title, Colors,                                        // https://stackoverflow.com/a/75210481/9157799
      Tooltip, // weirdly, this also register for ScatterChart.svelte. it also can't be used as inline plugins: https://www.chartjs.org/docs/latest/developers/plugins.html#using-plugins. Just disable tooltip through option in ScatterChart.svelte
   )

   export let datasets
   export let title
   let canvas
   let chart
   let popularity_or_love = 'popularity'

   const change_yAxisKey = parsing_key => {
      popularity_or_love = parsing_key
      chart.options.parsing.yAxisKey = parsing_key // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
      chart.update()
   }

   onMount(() => {
      chart = new Chart(
         canvas,
         {
            type: 'line', // https://www.chartjs.org/docs/latest/charts/line.html
            data: {
               datasets,
            },
            plugins: [Legend], // register for this chart only: https://www.chartjs.org/docs/latest/developers/plugins.html
            options: {
               scales: {
                  y: { // https://www.chartjs.org/docs/latest/axes/#default-scales
                     min: 0,
                     max: 100,
                  }
               },
               maintainAspectRatio: false, // https://stackoverflow.com/a/43658507/9157799
               elements: {
                  point: {
                     hitRadius: 50, // https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration
                  }
               },
               parsing: {
                  xAxisKey: 'year',
                  yAxisKey: 'popularity',
               },
               plugins: {
                  title: { // https://www.chartjs.org/docs/latest/configuration/title.html
                     display: true, // false by default
                     text: title
                  },
                  legend: { // https://www.chartjs.org/docs/latest/configuration/legend.html
                     onHover: (event, legendItem, legend) => {
                        console.log(legendItem.datasetIndex)
                        const dataset_to_highlight = datasets[legendItem.datasetIndex] // https://www.chartjs.org/docs/latest/configuration/legend.html#custom-on-click-actions

                        // console.log(
                        //    dataset_to_highlight.backgroundColor, // 0.75
                        //    dataset_to_highlight.borderColor      // 0.56
                        // ) // the default opacity is 0.75 and 0.56 using autocolors plugin: https://github.com/kurkle/chartjs-plugin-autocolors

                        dataset_to_highlight.backgroundColor = change_opacity(dataset_to_highlight.backgroundColor, 0.9) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                        dataset_to_highlight.borderColor = change_opacity(dataset_to_highlight.borderColor, 0.8)

                        datasets.forEach(dataset => {
                           if (dataset.label != dataset_to_highlight.label) {
                              dataset.backgroundColor = change_opacity(dataset.backgroundColor, 0.25)
                              dataset.borderColor = change_opacity(dataset.borderColor, 0.1) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                           }
                        })
                        chart.update()                                                           // https://www.chartjs.org/docs/latest/developers/updates.html#updating-options
                     },
                     onLeave: (event, legendItem, legend) => {
                        datasets.forEach(dataset => {
                           dataset.backgroundColor = change_opacity(dataset.backgroundColor, 0.75) // // the default opacity is 0.75 and 0.56 using autocolors plugin: https://github.com/kurkle/chartjs-plugin-autocolors
                           dataset.borderColor = change_opacity(dataset.borderColor, 0.56) // https://www.chartjs.org/docs/latest/samples/line/styling.html https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration
                        })
                        chart.update()
                     }
                  }
               },
               animations: {
                  colors: { // https://www.chartjs.org/docs/latest/configuration/animations.html#animations-2 | https://www.chartjs.org/docs/latest/general/options.html#dataset-animation-options
                     properties: ['color'],
                  }
               },
            },
         }
      )
   })
</script>