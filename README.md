# pwf-accents

Tiny library for removing utf-8 string accents. Available for all browsers and nodejs.


## Requirements
* pwf.js

## Install
### Browser

Simply add to page with pwf.js

```bash
bower install pwf-accents
```

Example on page

```
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="bower/pwf.js/lib/pwf.js">
    <script type="text/javascript" src="bower/pwf-accents/lib/accents.js">
    
    <script type="text/javascript">
      window.onload = function() {
        console.log(pwf.accents.strip('ščřžýáíé'))
      };
    </script>
  </head>
  
  <body></body>
</html>
```

### Node

Simply install and require

```bash
npm install pwf-accents
```

```javascript
require('pwf-accents');
```
