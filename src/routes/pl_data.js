// const pl_data = [
//    {
//       name: 'JavaScript',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     62.5,   69.8,   67.8,   67.7,  64.96,  65.36,  63.61], // popularity
//       y: [     59.8,   61.9,   66.8,   58.3,  61.51,  61.46,  57.83], // love
//       type: 'scatter'
//    }, {
//       name: 'SQL',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     51.2,     57,   54.4,   54.7,   47.8,  49.43,  48.66], // popularity
//       y: [     53.4,   57.5,  64.1,    56.6,  61.83,  64.25,  64.26], // love
//       type: 'scatter'
//    }, {
//       name: 'Java',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     39.7,   45.3,   41.1,   40.2,  35.35,  33.27,  30.55], // popularity
//       y: [     50.5,   50.7,   53.4,   44.1,  47.15,  45.75,  44.11], // love
//       type: 'scatter'
//    }, {
//       name: 'C#',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     34.1,   34.4,   31.0,   31.4,  27.86,  27.98,  27.62], // popularity
//       y: [     61.7,   60.4,   67.0,   59.7,  61.96,  63.39,  62.87], // love
//       type: 'scatter'
//    }, {
//       name: 'Python',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     32.0,   38.8,   41.7,   44.1,  48.24,  48.07,  49.28], // popularity
//       y: [     62.7,   60.8,   73.1,   66.7,  67.83,  67.34,  65.52], // love
//       type: 'scatter'
//    }, {
//       name: 'PHP',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     28.1,   30.7,   26.4,   26.2,  21.98,  20.87,  18.58], // popularity
//       y: [     41.4,   41.6,   45.8,   37.3,  40.24,  41.61,  41.83], // love
//       type: 'scatter'
//    }, {
//       name: 'TypeScript',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [      9.5,   17.4,   21.2,   25.4,  30.19,  34.83,  38.87], // popularity
//       y: [     64.1,   67.0,   73.1,   67.1,  72.73,  73.46,  71.70], // love
//       type: 'scatter'
//    }, {
//       name: 'Ruby',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [      9.1,   10.1,    8.4,    7.1,   6.75,   6.05,   6.23], // popularity
//       y: [     48.5,   47.4,   50.3,   42.9,  53.24,  49.99,  47.69], // love
//       type: 'scatter'
//    }, {
//       name: 'Go',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [      4.3,    7.1,    8.2,    8.8,   9.55,  11.15,  13.24], // popularity
//       y: [     63.3,   65.6,   67.9,   62.3,  62.74,  64.58,  62.45], // love
//       type: 'scatter'
//    }, {
//       name: 'Swift',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [      6.5,    8.1,    6.6,    5.9,    5.1,   4.91,   4.65], // popularity
//       y: [     63.9,   65.1,   69.2,   59.5,  63.56,  62.88,  61.42], // love
//       type: 'scatter'
//    }, {
//       name: 'C',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     19.0,   23.0,   20.6,   21.8,  21.01,  19.27,  19.34], // popularity
//       y: [     41.7,   37.4,   42.5,   33.1,  39.56,  39.68,  43.29], // love
//       type: 'scatter'
//    }, {
//       name: 'C++',
//       mode: 'lines+markers',
//       text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [     22.3,   25.4,   23.5,   23.9,  24.31,  22.55,  22.42], // popularity
//       y: [     52.0,   46.7,   52.0,   43.4,  49.24,  48.39,  49.77], // love
//       type: 'scatter'
//    }, {
//       name: 'Kotlin',
//       mode: 'lines+markers',
//       text: ['2018', '2019', '2020', '2021', '2022', '2023'],
//       x: [      4.5,    6.4,    7.8,   8.32,   9.16,   9.06], // popularity
//       y: [     75.1,   72.6,   62.9,  61.55,  63.29,  60.77], // love
//       type: 'scatter'
//    }, {
//       name: 'Dart',
//       mode: 'lines+markers',
//       text: ['2019', '2020', '2021', '2022', '2023'],
//       x: [      1.9,    4.0,   6.02,   6.54,   6.02], // popularity
//       y: [     66.3,   62.1,  63.77,  62.16,  58.56], // love
//       type: 'scatter'
//    }, {
//       name: 'HTML/CSS', // in 2018, they're splitted
//       mode: 'lines+markers',
//       text: ['2019', '2020', '2021', '2022', '2023'],
//       x: [     63.5,   63.1,  56.07,  55.08,  52.97], // popularity
//       y: [     62.2,   53.5,  60.19,  62.09,  61.90], // love
//       type: 'scatter'
//    }, {
//       name: 'Rust',
//       mode: 'lines+markers',
//       text: ['2019', '2020', '2021', '2022', '2023'],
//       x: [      3.2,    5.1,   7.03,   9.32,  13.05], // popularity
//       y: [     83.5,   86.1,  86.98,  86.73,  84.66], // love
//       type: 'scatter'
//    }
// ]

const pl_data = [
   {
      label: 'JavaScript',
      // text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      // x: [     62.5,   69.8,   67.8,   67.7,  64.96,  65.36,  63.61], // popularity
      // y: [     59.8,   61.9,   66.8,   58.3,  61.51,  61.46,  57.83], // love
      data: [{  // https://www.chartjs.org/docs/latest/general/data-structures.html#object-using-custom-properties
         year:     '2017',
         popularity: 62.5,
         love:       59.8,
      }, {
         year:     '2018',
         popularity: 69.8,
         love:       61.9,
      }, {
         year:     '2019',
         popularity: 67.8,
         love:       66.8,
      }, {
         year:     '2020',
         popularity: 67.7,
         love:       58.3,
      }]
   }
   // }, {
   //    label: 'SQL',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     51.2,     57,   54.4,   54.7,   47.8,  49.43,  48.66], // popularity
   //    y: [     53.4,   57.5,  64.1,    56.6,  61.83,  64.25,  64.26], // love
   // }, {
   //    label: 'Java',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     39.7,   45.3,   41.1,   40.2,  35.35,  33.27,  30.55], // popularity
   //    y: [     50.5,   50.7,   53.4,   44.1,  47.15,  45.75,  44.11], // love
   // }, {
   //    label: 'C#',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     34.1,   34.4,   31.0,   31.4,  27.86,  27.98,  27.62], // popularity
   //    y: [     61.7,   60.4,   67.0,   59.7,  61.96,  63.39,  62.87], // love
   // }, {
   //    label: 'Python',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     32.0,   38.8,   41.7,   44.1,  48.24,  48.07,  49.28], // popularity
   //    y: [     62.7,   60.8,   73.1,   66.7,  67.83,  67.34,  65.52], // love
   // }, {
   //    label: 'PHP',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     28.1,   30.7,   26.4,   26.2,  21.98,  20.87,  18.58], // popularity
   //    y: [     41.4,   41.6,   45.8,   37.3,  40.24,  41.61,  41.83], // love
   // }, {
   //    label: 'TypeScript',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [      9.5,   17.4,   21.2,   25.4,  30.19,  34.83,  38.87], // popularity
   //    y: [     64.1,   67.0,   73.1,   67.1,  72.73,  73.46,  71.70], // love
   // }, {
   //    label: 'Ruby',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [      9.1,   10.1,    8.4,    7.1,   6.75,   6.05,   6.23], // popularity
   //    y: [     48.5,   47.4,   50.3,   42.9,  53.24,  49.99,  47.69], // love
   // }, {
   //    label: 'Go',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [      4.3,    7.1,    8.2,    8.8,   9.55,  11.15,  13.24], // popularity
   //    y: [     63.3,   65.6,   67.9,   62.3,  62.74,  64.58,  62.45], // love
   // }, {
   //    label: 'Swift',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [      6.5,    8.1,    6.6,    5.9,    5.1,   4.91,   4.65], // popularity
   //    y: [     63.9,   65.1,   69.2,   59.5,  63.56,  62.88,  61.42], // love
   // }, {
   //    label: 'C',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     19.0,   23.0,   20.6,   21.8,  21.01,  19.27,  19.34], // popularity
   //    y: [     41.7,   37.4,   42.5,   33.1,  39.56,  39.68,  43.29], // love
   // }, {
   //    label: 'C++',
   //    text: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [     22.3,   25.4,   23.5,   23.9,  24.31,  22.55,  22.42], // popularity
   //    y: [     52.0,   46.7,   52.0,   43.4,  49.24,  48.39,  49.77], // love
   // }, {
   //    label: 'Kotlin',
   //    text: ['2018', '2019', '2020', '2021', '2022', '2023'],
   //    x: [      4.5,    6.4,    7.8,   8.32,   9.16,   9.06], // popularity
   //    y: [     75.1,   72.6,   62.9,  61.55,  63.29,  60.77], // love
   // }, {
   //    label: 'Dart',
   //    text: ['2019', '2020', '2021', '2022', '2023'],
   //    x: [      1.9,    4.0,   6.02,   6.54,   6.02], // popularity
   //    y: [     66.3,   62.1,  63.77,  62.16,  58.56], // love
   // }, {
   //    label: 'HTML/CSS', // in 2018, they're splitted
   //    text: ['2019', '2020', '2021', '2022', '2023'],
   //    x: [     63.5,   63.1,  56.07,  55.08,  52.97], // popularity
   //    y: [     62.2,   53.5,  60.19,  62.09,  61.90], // love
   // }, {
   //    label: 'Rust',
   //    text: ['2019', '2020', '2021', '2022', '2023'],
   //    x: [      3.2,    5.1,   7.03,   9.32,  13.05], // popularity
   //    y: [     83.5,   86.1,  86.98,  86.73,  84.66], // love
   // }
]

export default pl_data