# Timestamp Microservice for FCC

Go to the following url: https://what-time.glitch.me/

By adding parameters to the URL string, the API will return a timestamp for that parameter.

Therefore, if you enter a UNIX timestamp, the API will convert it into a natural date; alternatively, it will take a natural date and convert it into a timestamp.

### Examples

* `https://what-time.glitch.me/April%208%201974`
* `https://what-time.glitch.me/134683200000`

:dizzy: *Returns* :dizzy:

```javascript 
  {
    "unix": "134683200000",
    "natural": "20:00:00 Apr 8th, 1974"
  }
```

#### ISSUES

* When entering a date string as a parameter, it has trouble recognizing `AM` and `PM`. Rather, enter time in 24-hour format - i.e. `20:20 March 21, 2001`