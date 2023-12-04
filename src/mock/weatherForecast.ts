import type WeatherForecast from '../types/forecast'

export const weatherForecast: WeatherForecast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1701356400,
      main: {
        temp: 300.31,
        feels_like: 302.1,
        temp_min: 300.18,
        temp_max: 300.31,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 68,
        temp_kf: 0.13
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 40
      },
      wind: {
        speed: 3.72,
        deg: 286,
        gust: 5.07
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-11-30 15:00:00'
    },
    {
      dt: 1701367200,
      main: {
        temp: 301.11,
        feels_like: 302.54,
        temp_min: 301.11,
        temp_max: 302.7,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 60,
        temp_kf: -1.59
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 3.62,
        deg: 269,
        gust: 4.97
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-11-30 18:00:00'
    },
    {
      dt: 1701378000,
      main: {
        temp: 300.34,
        feels_like: 301.64,
        temp_min: 300.34,
        temp_max: 300.35,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 62,
        temp_kf: -0.01
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
        all: 43
      },
      wind: {
        speed: 2.19,
        deg: 173,
        gust: 3.26
      },
      visibility: 10000,
      pop: 0.47,
      rain: {
        '3h': 0.22
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-11-30 21:00:00'
    },
    {
      dt: 1701388800,
      main: {
        temp: 295.49,
        feels_like: 296.03,
        temp_min: 295.49,
        temp_max: 295.49,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 86,
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
        all: 37
      },
      wind: {
        speed: 2.73,
        deg: 150,
        gust: 4.94
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        '3h': 0.69
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-01 00:00:00'
    },
    {
      dt: 1701399600,
      main: {
        temp: 294.71,
        feels_like: 295.25,
        temp_min: 294.71,
        temp_max: 294.71,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 89,
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
        all: 26
      },
      wind: {
        speed: 1.6,
        deg: 162,
        gust: 3.13
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        '3h': 0.74
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-01 03:00:00'
    },
    {
      dt: 1701410400,
      main: {
        temp: 293.33,
        feels_like: 293.88,
        temp_min: 293.33,
        temp_max: 293.33,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 95,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 30
      },
      wind: {
        speed: 2.03,
        deg: 157,
        gust: 3.45
      },
      visibility: 10000,
      pop: 0.22,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-01 06:00:00'
    },
    {
      dt: 1701421200,
      main: {
        temp: 293.11,
        feels_like: 293.49,
        temp_min: 293.11,
        temp_max: 293.11,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 928,
        humidity: 89,
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
        all: 89
      },
      wind: {
        speed: 1.46,
        deg: 126,
        gust: 1.95
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-01 09:00:00'
    },
    {
      dt: 1701432000,
      main: {
        temp: 296.98,
        feels_like: 297.27,
        temp_min: 296.98,
        temp_max: 296.98,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 930,
        humidity: 71,
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
        all: 88
      },
      wind: {
        speed: 1.82,
        deg: 126,
        gust: 1.81
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-01 12:00:00'
    },
    {
      dt: 1701442800,
      main: {
        temp: 302.08,
        feels_like: 302.6,
        temp_min: 302.08,
        temp_max: 302.08,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 929,
        humidity: 49,
        temp_kf: 0
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
        all: 55
      },
      wind: {
        speed: 3,
        deg: 170,
        gust: 2.26
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-01 15:00:00'
    },
    {
      dt: 1701453600,
      main: {
        temp: 303.35,
        feels_like: 303.59,
        temp_min: 303.35,
        temp_max: 303.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 928,
        humidity: 44,
        temp_kf: 0
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
        all: 52
      },
      wind: {
        speed: 4.25,
        deg: 159,
        gust: 3.3
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-01 18:00:00'
    },
    {
      dt: 1701464400,
      main: {
        temp: 298.05,
        feels_like: 298.37,
        temp_min: 298.05,
        temp_max: 298.05,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 10
      },
      wind: {
        speed: 4.91,
        deg: 148,
        gust: 5.49
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-01 21:00:00'
    },
    {
      dt: 1701475200,
      main: {
        temp: 295.11,
        feels_like: 295.29,
        temp_min: 295.11,
        temp_max: 295.11,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ],
      clouds: {
        all: 7
      },
      wind: {
        speed: 2.39,
        deg: 98,
        gust: 3.59
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-02 00:00:00'
    },
    {
      dt: 1701486000,
      main: {
        temp: 294.16,
        feels_like: 294.25,
        temp_min: 294.16,
        temp_max: 294.16,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 1.7,
        deg: 74,
        gust: 3.61
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-02 03:00:00'
    },
    {
      dt: 1701496800,
      main: {
        temp: 293.24,
        feels_like: 293.32,
        temp_min: 293.24,
        temp_max: 293.24,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n'
        }
      ],
      clouds: {
        all: 11
      },
      wind: {
        speed: 1.26,
        deg: 107,
        gust: 2.01
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-02 06:00:00'
    },
    {
      dt: 1701507600,
      main: {
        temp: 293.17,
        feels_like: 293.34,
        temp_min: 293.17,
        temp_max: 293.17,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 927,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 4
      },
      wind: {
        speed: 1.53,
        deg: 52,
        gust: 2.7
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-02 09:00:00'
    },
    {
      dt: 1701518400,
      main: {
        temp: 300.89,
        feels_like: 301.65,
        temp_min: 300.89,
        temp_max: 300.89,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 928,
        humidity: 54,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 2
      },
      wind: {
        speed: 1.07,
        deg: 27,
        gust: 2.35
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-02 12:00:00'
    },
    {
      dt: 1701529200,
      main: {
        temp: 307.02,
        feels_like: 306.26,
        temp_min: 307.02,
        temp_max: 307.02,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 927,
        humidity: 30,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 1
      },
      wind: {
        speed: 1.52,
        deg: 240,
        gust: 2.2
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-02 15:00:00'
    },
    {
      dt: 1701540000,
      main: {
        temp: 307.94,
        feels_like: 307.14,
        temp_min: 307.94,
        temp_max: 307.94,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 925,
        humidity: 28,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 5
      },
      wind: {
        speed: 2.14,
        deg: 241,
        gust: 2.48
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-02 18:00:00'
    },
    {
      dt: 1701550800,
      main: {
        temp: 302.05,
        feels_like: 302.92,
        temp_min: 302.05,
        temp_max: 302.05,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 925,
        humidity: 52,
        temp_kf: 0
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
        all: 53
      },
      wind: {
        speed: 4.52,
        deg: 161,
        gust: 5.4
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-02 21:00:00'
    },
    {
      dt: 1701561600,
      main: {
        temp: 298.57,
        feels_like: 298.81,
        temp_min: 298.57,
        temp_max: 298.57,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 926,
        humidity: 63,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 46
      },
      wind: {
        speed: 2.42,
        deg: 110,
        gust: 3.96
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-03 00:00:00'
    },
    {
      dt: 1701572400,
      main: {
        temp: 297.2,
        feels_like: 297.41,
        temp_min: 297.2,
        temp_max: 297.2,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 926,
        humidity: 67,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 78
      },
      wind: {
        speed: 1.49,
        deg: 71,
        gust: 3.1
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-03 03:00:00'
    },
    {
      dt: 1701583200,
      main: {
        temp: 295.29,
        feels_like: 295.41,
        temp_min: 295.29,
        temp_max: 295.29,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 925,
        humidity: 71,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 2.36,
        deg: 152,
        gust: 4.78
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-03 06:00:00'
    },
    {
      dt: 1701594000,
      main: {
        temp: 294.37,
        feels_like: 294.56,
        temp_min: 294.37,
        temp_max: 294.37,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 926,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 9
      },
      wind: {
        speed: 1.62,
        deg: 128,
        gust: 3.08
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-03 09:00:00'
    },
    {
      dt: 1701604800,
      main: {
        temp: 301.19,
        feels_like: 301.93,
        temp_min: 301.19,
        temp_max: 301.19,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 927,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 13
      },
      wind: {
        speed: 1.41,
        deg: 35,
        gust: 2.58
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-03 12:00:00'
    },
    {
      dt: 1701615600,
      main: {
        temp: 307.54,
        feels_like: 306.78,
        temp_min: 307.54,
        temp_max: 307.54,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 926,
        humidity: 29,
        temp_kf: 0
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ],
      clouds: {
        all: 18
      },
      wind: {
        speed: 1.11,
        deg: 205,
        gust: 1.67
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-03 15:00:00'
    },
    {
      dt: 1701626400,
      main: {
        temp: 307.59,
        feels_like: 307.23,
        temp_min: 307.59,
        temp_max: 307.59,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 925,
        humidity: 31,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 9
      },
      wind: {
        speed: 3.64,
        deg: 186,
        gust: 3.5
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-03 18:00:00'
    },
    {
      dt: 1701637200,
      main: {
        temp: 299.89,
        feels_like: 301.04,
        temp_min: 299.89,
        temp_max: 299.89,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 925,
        humidity: 62,
        temp_kf: 0
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
        all: 51
      },
      wind: {
        speed: 5.05,
        deg: 147,
        gust: 6.18
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-03 21:00:00'
    },
    {
      dt: 1701648000,
      main: {
        temp: 297.65,
        feels_like: 297.85,
        temp_min: 297.65,
        temp_max: 297.65,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 58
      },
      wind: {
        speed: 2.82,
        deg: 94,
        gust: 4.21
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-04 00:00:00'
    },
    {
      dt: 1701658800,
      main: {
        temp: 296.63,
        feels_like: 296.76,
        temp_min: 296.63,
        temp_max: 296.63,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 927,
        humidity: 66,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: {
        all: 43
      },
      wind: {
        speed: 1.82,
        deg: 128,
        gust: 3.79
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-04 03:00:00'
    },
    {
      dt: 1701669600,
      main: {
        temp: 294.25,
        feels_like: 294.45,
        temp_min: 294.25,
        temp_max: 294.25,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 927,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      clouds: {
        all: 65
      },
      wind: {
        speed: 2.39,
        deg: 158,
        gust: 3.06
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-04 06:00:00'
    },
    {
      dt: 1701680400,
      main: {
        temp: 293.73,
        feels_like: 294.04,
        temp_min: 293.73,
        temp_max: 293.73,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 84,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ],
      clouds: {
        all: 38
      },
      wind: {
        speed: 2.87,
        deg: 151,
        gust: 3.83
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-04 09:00:00'
    },
    {
      dt: 1701691200,
      main: {
        temp: 297.85,
        feels_like: 298.1,
        temp_min: 297.85,
        temp_max: 297.85,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 930,
        humidity: 66,
        temp_kf: 0
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
        all: 63
      },
      wind: {
        speed: 3.31,
        deg: 145,
        gust: 3.16
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-04 12:00:00'
    },
    {
      dt: 1701702000,
      main: {
        temp: 301.66,
        feels_like: 302.52,
        temp_min: 301.66,
        temp_max: 301.66,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 929,
        humidity: 53,
        temp_kf: 0
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
        all: 81
      },
      wind: {
        speed: 3.97,
        deg: 155,
        gust: 3.15
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-04 15:00:00'
    },
    {
      dt: 1701712800,
      main: {
        temp: 301.15,
        feels_like: 302.17,
        temp_min: 301.15,
        temp_max: 301.15,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 928,
        humidity: 56,
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
        all: 63
      },
      wind: {
        speed: 6.13,
        deg: 146,
        gust: 4.49
      },
      visibility: 10000,
      pop: 0.36,
      rain: {
        '3h': 0.31
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-04 18:00:00'
    },
    {
      dt: 1701723600,
      main: {
        temp: 294.98,
        feels_like: 295.33,
        temp_min: 294.98,
        temp_max: 294.98,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 928,
        humidity: 81,
        temp_kf: 0
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d'
        }
      ],
      clouds: {
        all: 99
      },
      wind: {
        speed: 3.81,
        deg: 161,
        gust: 4.71
      },
      visibility: 10000,
      pop: 0.66,
      rain: {
        '3h': 11.62
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-04 21:00:00'
    },
    {
      dt: 1701734400,
      main: {
        temp: 293.63,
        feels_like: 293.9,
        temp_min: 293.63,
        temp_max: 293.63,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 930,
        humidity: 83,
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
        all: 99
      },
      wind: {
        speed: 4,
        deg: 139,
        gust: 6.8
      },
      visibility: 10000,
      pop: 0.62,
      rain: {
        '3h': 0.38
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-05 00:00:00'
    },
    {
      dt: 1701745200,
      main: {
        temp: 293.04,
        feels_like: 293.36,
        temp_min: 293.04,
        temp_max: 293.04,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 930,
        humidity: 87,
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
        all: 93
      },
      wind: {
        speed: 3.02,
        deg: 145,
        gust: 6.39
      },
      visibility: 10000,
      pop: 0.82,
      rain: {
        '3h': 0.47
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-05 03:00:00'
    },
    {
      dt: 1701756000,
      main: {
        temp: 292.41,
        feels_like: 292.77,
        temp_min: 292.41,
        temp_max: 292.41,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 929,
        humidity: 91,
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
        speed: 2.57,
        deg: 134,
        gust: 5.37
      },
      visibility: 10000,
      pop: 0.83,
      rain: {
        '3h': 0.47
      },
      sys: {
        pod: 'n'
      },
      dt_txt: '2023-12-05 06:00:00'
    },
    {
      dt: 1701766800,
      main: {
        temp: 292.56,
        feels_like: 292.88,
        temp_min: 292.56,
        temp_max: 292.56,
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
        speed: 2.22,
        deg: 105,
        gust: 5.09
      },
      visibility: 10000,
      pop: 0.31,
      rain: {
        '3h': 0.17
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-05 09:00:00'
    },
    {
      dt: 1701777600,
      main: {
        temp: 297.27,
        feels_like: 297.57,
        temp_min: 297.27,
        temp_max: 297.27,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 932,
        humidity: 70,
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
        all: 99
      },
      wind: {
        speed: 2.55,
        deg: 89,
        gust: 3.49
      },
      visibility: 10000,
      pop: 0.34,
      rain: {
        '3h': 0.15
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2023-12-05 12:00:00'
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
    sunrise: 1701331895,
    sunset: 1701380342
  }
}
