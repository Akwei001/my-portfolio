export const themes = {
  light: {
    name: 'Light',
    colors: {
      background: 'rgb(255, 255, 255)',
      text: 'rgb(0, 0, 0)',
      primary: 'rgb(128, 90, 213)',
      accent: 'rgba(128, 90, 213, 0.1)'
    }
  },
  dark: {
    name: 'Dark',
    colors: {
      background: 'rgb(17, 17, 17)',
      text: 'rgb(238, 238, 238)',
      primary: 'rgb(128, 90, 213)',
      accent: 'rgba(128, 90, 213, 0.2)'
    }
  },
  serika: {
    name: 'Serika',
    colors: {
      background: 'rgb(50, 50, 50)',
      text: 'rgb(225, 225, 225)',
      primary: 'rgb(228, 183, 25)',
      accent: 'rgba(228, 183, 25, 0.2)'
    }
  },
  botanical: {
    name: 'Botanical',
    colors: {
      background: 'rgb(35, 42, 38)',
      text: 'rgb(205, 215, 206)',
      primary: 'rgb(127, 162, 127)',
      accent: 'rgba(127, 162, 127, 0.2)'
    }
  }
};

export type ThemeNames = keyof typeof themes; 