# tr-seo-url

This module makes words with Turkish letters suitable for seo.

# Usage 1:

```
const { trSeoUrl } = require("tr-seo-url");

trSeoUrl("2 küçük agaçlık alan").then((result) => {
  console.log(result);
});
```

# Usage 2:

```
const { trSeoUrl } = require("tr-seo-url");

(async () => {
  const result = await trSeoUrl("2 küçük agaçlık alan");
})();

```
