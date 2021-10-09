## numbers

<https://www.w3schools.com/js/js_number_methods.asp>

### integer

```txt

5/2
```

### float

### base converter

```js
function baseConverter(number, base) {
  let remainder = 0,
    convertedString = "",
    digits = "0123456789ABCDEF";

  while (n > 0) {
    remainder = Math.floor(number % base);
    convertedString = digits[remainder] + convertedString;
    number = Math.floor(number / base);
  }

  return convertedString;
}
```

## random
