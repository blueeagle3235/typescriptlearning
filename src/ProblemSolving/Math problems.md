## numbers

### base converter

```js
function baseConverter(number, base) {
  var remainder,
    convertedString = "",
    digits = "0123456789ABCDEF";

  while (n > 0) {
    remainder = Math.floor(number % base);
    convertedString = digits[rem] + convertedString;
    number = Math.floor(number / base);
  }

  return convertedString;
}
```

## random
