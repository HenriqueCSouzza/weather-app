import type WeatherForecast from '../types/forecast'

export const weatherForecast: WeatherForecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1701874800,
      main: {
        temp: 301.17,
        feels_like: 302.63,
        temp_min: 301.17,
        temp_max: 305.04,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 931,
        humidity: 60,
        temp_kf: -3.87
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 59
      },
      wind: {
        speed: 1.91,
        deg: 303,
        gust: 3.64
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-06 15:00:00'
    },
    {
      dt: 1701885600,
      main: {
        temp: 301.53,
        feels_like: 302.93,
        temp_min: 301.53,
        temp_max: 302.68,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 58,
        temp_kf: -1.15
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 64
      },
      wind: {
        speed: 1.19,
        deg: 214,
        gust: 3.07
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.65
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-06 18:00:00'
    },
    {
      dt: 1701896400,
      main: {
        temp: 299.62,
        feels_like: 299.62,
        temp_min: 299.62,
        temp_max: 299.62,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 928,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 91
      },
      wind: {
        speed: 3.09,
        deg: 133,
        gust: 3.59
      },
      visibility: 10000,
      pop: 0.47,
      rain: {
        '3h': 0.22
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-06 21:00:00'
    },
    {
      dt: 1701907200,
      main: {
        temp: 297.53,
        feels_like: 298.03,
        temp_min: 297.53,
        temp_max: 297.53,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 62
      },
      wind: {
        speed: 1.58,
        deg: 118,
        gust: 2.49
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        '3h': 0.36
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-07 00:00:00'
    },
    {
      dt: 1701918000,
      main: {
        temp: 296.69,
        feels_like: 297.19,
        temp_min: 296.69,
        temp_max: 296.69,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 80,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 24
      },
      wind: {
        speed: 0.56,
        deg: 51,
        gust: 1.08
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        '3h': 0.28
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-07 03:00:00'
    },
    {
      dt: 1701928800,
      main: {
        temp: 295.93,
        feels_like: 296.46,
        temp_min: 295.93,
        temp_max: 295.93,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 55
      },
      wind: {
        speed: 1.32,
        deg: 14,
        gust: 1.81
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        '3h': 0.38
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-07 06:00:00'
    },
    {
      dt: 1701939600,
      main: {
        temp: 295.87,
        feels_like: 296.34,
        temp_min: 295.87,
        temp_max: 295.87,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 82,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.69,
        deg: 346,
        gust: 3.34
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-07 09:00:00'
    },
    {
      dt: 1701950400,
      main: {
        temp: 300.83,
        feels_like: 302.04,
        temp_min: 300.83,
        temp_max: 300.83,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 930,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.78,
        deg: 337,
        gust: 4.55
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-07 12:00:00'
    },
    {
      dt: 1701961200,
      main: {
        temp: 305.95,
        feels_like: 306.42,
        temp_min: 305.95,
        temp_max: 305.95,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 929,
        humidity: 39,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 2.74,
        deg: 271,
        gust: 4.39
      },
      visibility: 10000,
      pop: 0.31,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-07 15:00:00'
    },
    {
      dt: 1701972000,
      main: {
        temp: 305.41,
        feels_like: 306.19,
        temp_min: 305.41,
        temp_max: 305.41,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 927,
        humidity: 42,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 1.52,
        deg: 352,
        gust: 4.23
      },
      visibility: 10000,
      pop: 0.3,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-07 18:00:00'
    },
    {
      dt: 1701982800,
      main: {
        temp: 296.2,
        feels_like: 296.75,
        temp_min: 296.2,
        temp_max: 296.2,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 926,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 80
      },
      wind: {
        speed: 3.35,
        deg: 292,
        gust: 6.12
      },
      visibility: 9514,
      pop: 0.97,
      rain: {
        '3h': 18.48
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-07 21:00:00'
    },
    {
      dt: 1701993600,
      main: {
        temp: 294.79,
        feels_like: 295.33,
        temp_min: 294.79,
        temp_max: 294.79,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 502,
          main: 'Rain',
          description: 'heavy intensity rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 3.18,
        deg: 20,
        gust: 4.63
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        '3h': 23.03
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-08 00:00:00'
    },
    {
      dt: 1702004400,
      main: {
        temp: 294.23,
        feels_like: 294.61,
        temp_min: 294.23,
        temp_max: 294.23,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 85,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.07,
        deg: 354,
        gust: 11.93
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.37
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-08 03:00:00'
    },
    {
      dt: 1702015200,
      main: {
        temp: 294.45,
        feels_like: 294.83,
        temp_min: 294.45,
        temp_max: 294.45,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.88,
        deg: 270,
        gust: 1.85
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-08 06:00:00'
    },
    {
      dt: 1702026000,
      main: {
        temp: 294.53,
        feels_like: 294.97,
        temp_min: 294.53,
        temp_max: 294.53,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.47,
        deg: 130,
        gust: 3.28
      },
      visibility: 10000,
      pop: 0.35,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-08 09:00:00'
    },
    {
      dt: 1702036800,
      main: {
        temp: 294.7,
        feels_like: 295.16,
        temp_min: 294.7,
        temp_max: 294.7,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 86,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.43,
        deg: 360,
        gust: 6.06
      },
      visibility: 10000,
      pop: 0.33,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-08 12:00:00'
    },
    {
      dt: 1702047600,
      main: {
        temp: 298.65,
        feels_like: 298.93,
        temp_min: 298.65,
        temp_max: 298.65,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 929,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 1.81,
        deg: 355,
        gust: 2.98
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-08 15:00:00'
    },
    {
      dt: 1702058400,
      main: {
        temp: 299.86,
        feels_like: 301.13,
        temp_min: 299.86,
        temp_max: 299.86,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 929,
        humidity: 64,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.33,
        deg: 147,
        gust: 2.9
      },
      visibility: 10000,
      pop: 0.35,
      rain: {
        '3h': 0.44
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-08 18:00:00'
    },
    {
      dt: 1702069200,
      main: {
        temp: 294.41,
        feels_like: 294.99,
        temp_min: 294.41,
        temp_max: 294.41,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 92,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 95
      },
      wind: {
        speed: 5.33,
        deg: 162,
        gust: 7.8
      },
      visibility: 9153,
      pop: 0.94,
      rain: {
        '3h': 1.73
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-08 21:00:00'
    },
    {
      dt: 1702080000,
      main: {
        temp: 293.15,
        feels_like: 293.66,
        temp_min: 293.15,
        temp_max: 293.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 930,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 97
      },
      wind: {
        speed: 4.28,
        deg: 151,
        gust: 8.52
      },
      visibility: 10000,
      pop: 0.94,
      rain: {
        '3h': 0.57
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-09 00:00:00'
    },
    {
      dt: 1702090800,
      main: {
        temp: 292.17,
        feels_like: 292.58,
        temp_min: 292.17,
        temp_max: 292.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 930,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.45,
        deg: 152,
        gust: 7.73
      },
      visibility: 9144,
      pop: 0.58,
      rain: {
        '3h': 0.39
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-09 03:00:00'
    },
    {
      dt: 1702101600,
      main: {
        temp: 291.71,
        feels_like: 292.1,
        temp_min: 291.71,
        temp_max: 291.71,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 928,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.87,
        deg: 150,
        gust: 7
      },
      visibility: 9176,
      pop: 0.46,
      rain: {
        '3h': 0.24
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-09 06:00:00'
    },
    {
      dt: 1702112400,
      main: {
        temp: 291.34,
        feels_like: 291.7,
        temp_min: 291.34,
        temp_max: 291.34,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 930,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.86,
        deg: 152,
        gust: 6.97
      },
      visibility: 326,
      pop: 0.36,
      rain: {
        '3h': 0.16
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-09 09:00:00'
    },
    {
      dt: 1702123200,
      main: {
        temp: 291.64,
        feels_like: 291.97,
        temp_min: 291.64,
        temp_max: 291.64,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 931,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.21,
        deg: 142,
        gust: 7.13
      },
      visibility: 9407,
      pop: 0.35,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-09 12:00:00'
    },
    {
      dt: 1702134000,
      main: {
        temp: 292.3,
        feels_like: 292.59,
        temp_min: 292.3,
        temp_max: 292.3,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 931,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.56,
        deg: 142,
        gust: 6.4
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 0.21
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-09 15:00:00'
    },
    {
      dt: 1702144800,
      main: {
        temp: 291.8,
        feels_like: 292.04,
        temp_min: 291.8,
        temp_max: 291.8,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 930,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.12,
        deg: 143,
        gust: 7.4
      },
      visibility: 5424,
      pop: 0.37,
      rain: {
        '3h': 0.14
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-09 18:00:00'
    },
    {
      dt: 1702155600,
      main: {
        temp: 290.6,
        feels_like: 290.83,
        temp_min: 290.6,
        temp_max: 290.6,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 929,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 5.28,
        deg: 143,
        gust: 8.68
      },
      visibility: 2240,
      pop: 0.35,
      rain: {
        '3h': 0.13
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-09 21:00:00'
    },
    {
      dt: 1702166400,
      main: {
        temp: 290.41,
        feels_like: 290.65,
        temp_min: 290.41,
        temp_max: 290.41,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 931,
        humidity: 94,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.33,
        deg: 124,
        gust: 8.35
      },
      visibility: 7331,
      pop: 0.28,
      rain: {
        '3h': 0.13
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-10 00:00:00'
    },
    {
      dt: 1702177200,
      main: {
        temp: 290.53,
        feels_like: 290.75,
        temp_min: 290.53,
        temp_max: 290.53,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 930,
        humidity: 93,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.84,
        deg: 126,
        gust: 7.78
      },
      visibility: 9751,
      pop: 0.13,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-10 03:00:00'
    },
    {
      dt: 1702188000,
      main: {
        temp: 290.72,
        feels_like: 290.91,
        temp_min: 290.72,
        temp_max: 290.72,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.29,
        deg: 121,
        gust: 6.84
      },
      visibility: 10000,
      pop: 0.13,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-10 06:00:00'
    },
    {
      dt: 1702198800,
      main: {
        temp: 290.98,
        feels_like: 291.12,
        temp_min: 290.98,
        temp_max: 290.98,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 88,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.89,
        deg: 111,
        gust: 5.99
      },
      visibility: 10000,
      pop: 0.17,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-10 09:00:00'
    },
    {
      dt: 1702209600,
      main: {
        temp: 294.72,
        feels_like: 294.84,
        temp_min: 294.72,
        temp_max: 294.72,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 929,
        humidity: 73,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 98
      },
      wind: {
        speed: 3.2,
        deg: 84,
        gust: 4.32
      },
      visibility: 10000,
      pop: 0.13,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-10 12:00:00'
    },
    {
      dt: 1702220400,
      main: {
        temp: 297.45,
        feels_like: 297.66,
        temp_min: 297.45,
        temp_max: 297.45,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 928,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.48,
        deg: 132,
        gust: 2
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        '3h': 0.11
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-10 15:00:00'
    },
    {
      dt: 1702231200,
      main: {
        temp: 293.57,
        feels_like: 293.99,
        temp_min: 293.57,
        temp_max: 293.57,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 89,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 4.53,
        deg: 162,
        gust: 6.05
      },
      visibility: 9640,
      pop: 0.98,
      rain: {
        '3h': 1.5
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-10 18:00:00'
    },
    {
      dt: 1702242000,
      main: {
        temp: 292.1,
        feels_like: 292.58,
        temp_min: 292.1,
        temp_max: 292.1,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.41,
        deg: 97,
        gust: 6.12
      },
      visibility: 124,
      pop: 1,
      rain: {
        '3h': 2.52
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-10 21:00:00'
    },
    {
      dt: 1702252800,
      main: {
        temp: 291.91,
        feels_like: 292.32,
        temp_min: 291.91,
        temp_max: 291.91,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.37,
        deg: 114,
        gust: 5.71
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 1.7
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-11 00:00:00'
    },
    {
      dt: 1702263600,
      main: {
        temp: 291.85,
        feels_like: 292.26,
        temp_min: 291.85,
        temp_max: 291.85,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.34,
        deg: 52,
        gust: 5.31
      },
      visibility: 10000,
      pop: 0.39,
      rain: {
        '3h': 0.17
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-11 03:00:00'
    },
    {
      dt: 1702274400,
      main: {
        temp: 291.72,
        feels_like: 292.11,
        temp_min: 291.72,
        temp_max: 291.72,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 924,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 2.04,
        deg: 45,
        gust: 4.54
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-11 06:00:00'
    },
    {
      dt: 1702285200,
      main: {
        temp: 292.17,
        feels_like: 292.61,
        temp_min: 292.17,
        temp_max: 292.17,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 0.87,
        deg: 323,
        gust: 2.38
      },
      visibility: 10000,
      pop: 0.52,
      rain: {
        '3h': 1
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-11 09:00:00'
    },
    {
      dt: 1702296000,
      main: {
        temp: 293.22,
        feels_like: 293.66,
        temp_min: 293.22,
        temp_max: 293.22,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 100
      },
      wind: {
        speed: 3.18,
        deg: 321,
        gust: 9.43
      },
      visibility: 10000,
      pop: 0.46,
      rain: {
        '3h': 0.2
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-11 12:00:00'
    }
  ],
  city: {
    id: 3448439,
    name: 'São Paulo',
    coord: {
      lat: -23.5475,
      lon: -46.6361
    },
    country: 'BR',
    population: 10021295,
    timezone: -10800,
    sunrise: 1701850326,
    sunset: 1701898989
  }
}
