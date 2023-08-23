export const change_opacity = (color, value) => {
   const get_rgba = (color) => {
      const array_of_rgba_string = color.replace(/[^\d,.]/g, '').split(',') // https://stackoverflow.com/q/10970958/9157799#comment47468911_10971090
      const array_of_rgba_number = array_of_rgba_string.map(string => Number(string))
      return array_of_rgba_number
   }
   const [r, g, b, a] = get_rgba(color)
   const new_color = `rgba(${r},${g},${b},${value})`
   return new_color
}