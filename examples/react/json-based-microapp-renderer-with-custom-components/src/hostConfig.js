/**
 * Copyright 2022 Workgrid Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const hostConfig = {
  spacing: {
    small: 3,
    default: 8,
    medium: 20,
    large: 30,
    extraLarge: 40,
    padding: 10,
  },
  separator: {
    lineThickness: 1,
    lineColor: '#EEEEEE',
  },
  supportsInteractivity: true,
  fontTypes: {
    default: {
      fontFamily:
        "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26,
      },
      fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600,
      },
    },
    monospace: {
      fontFamily: "'Courier New', Courier, monospace",
      fontSizes: {
        small: 12,
        default: 14,
        medium: 17,
        large: 21,
        extraLarge: 26,
      },
      fontWeights: {
        lighter: 200,
        default: 400,
        bolder: 600,
      },
    },
  },
  containerStyles: {
    default: {
      backgroundColor: '#FFFFFF',
      foregroundColors: {
        default: {
          default: '#000000',
          subtle: '#767676',
        },
        accent: {
          default: '#0063B1',
          subtle: '#0063B1',
        },
        attention: {
          default: '#FF0000',
          subtle: '#DDFF0000',
        },
        good: {
          default: '#54a254',
          subtle: '#DD54a254',
        },
        warning: {
          default: '#c3ab23',
          subtle: '#DDc3ab23',
        },
      },
    },
    emphasis: {
      backgroundColor: '#F0F0F0',
      foregroundColors: {
        default: {
          default: '#000000',
          subtle: '#767676',
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC',
        },
        attention: {
          default: '#FF0000',
          subtle: '#DDFF0000',
        },
        good: {
          default: '#54a254',
          subtle: '#DD54a254',
        },
        warning: {
          default: '#c3ab23',
          subtle: '#DDc3ab23',
        },
      },
    },
    accent: {
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333',
        },
        dark: {
          default: '#000000',
          subtle: '#66000000',
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000',
        },
        accent: {
          default: 'pink',
          subtle: '#882E89FC',
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300',
        },
        good: {
          default: '#54a254',
          subtle: '#DD54a254',
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500',
        },
      },
    },
    good: {
      backgroundColor: '#CCFFCC',
      foregroundColors: {
        default: {
          default: '#333333',
          subtle: '#EE333333',
        },
        dark: {
          default: '#000000',
          subtle: '#66000000',
        },
        light: {
          default: '#FFFFFF',
          subtle: '#33000000',
        },
        accent: {
          default: '#2E89FC',
          subtle: '#882E89FC',
        },
        attention: {
          default: '#cc3300',
          subtle: '#DDcc3300',
        },
        good: {
          default: '#54a254',
          subtle: '#DD54a254',
        },
        warning: {
          default: '#e69500',
          subtle: '#DDe69500',
        },
      },
    },
  },
  imageSizes: {
    small: 40,
    medium: 80,
    large: 160,
  },
  actions: {
    maxActions: 6,
    spacing: 'default',
    buttonSpacing: 10,
    showCard: {
      actionMode: 'inline',
      inlineTopMargin: 8,
    },
    actionsOrientation: 'vertical',
    actionAlignment: 'stretch',
    iconSize: 50,
  },
  adaptiveCard: {
    allowCustomStyle: true,
  },
  imageSet: {
    imageSize: 'medium',
    maxImageHeight: 100,
  },
  factSet: {
    title: {
      color: 'default',
      size: 'default',
      isSubtle: false,
      weight: 'bolder',
      wrap: true,
      maxWidth: 150,
    },
    value: {
      color: 'default',
      size: 'default',
      isSubtle: false,
      weight: 'default',
      wrap: true,
    },
    spacing: 8,
  },
}
export default hostConfig
