# ms.js: miliseconds conversion utility

```js
ms('1d')      // 86400000
ms('10h')     // 36000000
ms('2h')      // 7200000
ms('1m')      // 60000
ms('5s')      // 5000
ms('100')     // 100
```

```js
ms(60000)             // "1 minute"
ms(2 * 60000)         // "2 minutes"
ms(ms('10 hours'))    // "10 hours"
```

```js
ms(ms('10 horas', 'pt-br')) 	// "10 hours - using pt-br language"
```

- Node/Browser compatible. Published as `ms` in NPM.
- If a number is supplied to `ms`, a string with a unit is returned.
- If a string that contains the number is supplied, it returns it as
a number (e.g: it returns `100` for `'100'`).
- If you pass a string with a number and a valid unit, the number of
equivalent ms is returned.
- Support multilanguage (i18n) for format ms times.