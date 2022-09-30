// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { options } from '@/themes/LigthTheme'

export default createVuetify(
  {
    theme: {
      defaultTheme: 'dark',
      // themes: {
      //   dark: {
      //     primary: '#3f51b5',
      //     secondary: '#b0bec5',
      //     accent: '#8c9eff',
      //     error: '#b71c1c',
      //   },
      //   light: {
      //     primary: '#3f51b5',
      //     secondary: '#b0bec5',
      //     accent: '#8c9eff',
      //     error: '#b71c1c',
      //   },
      // }
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}