# Translation: $|_|p3r 1337

![1337](http://img2.wikia.nocookie.net/__cb20061021211138/uncyclopedia/images/b/b4/3A7_1337!!!!111.jpg)

_What is "leetspeak?"_

**From Wikipedia:**

> Leet (or "1337"), also known as eleet or leetspeak, is an alternative alphabet for many languages that is used primarily on the Internet.

### Objectives:

1. Get further practice creating and requiring node modules.
- **Optional:** Play with _regular expressions_ to make finding and replacing characters and patterns easier.

### Resources:

- [leet speak alphabet](http://qntm.org/l33t) - for simplicity's sake, I suggest avoiding the use of a lot of characters that will need to be escaped (for example, use 5 instead of $, etc).
- [regular expressions 101](https://regex101.com/) - test out your regular expressions and get a breakdown of what your patterns are doing.
- [MDN Docs on regex in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) - great reference and explanation

## Part One: Translate!

Create a new module in a file called `leetify.js`. Your module should have a `translate` method defined on it that will take a string and return a new, "leet-ified" version. You may also want to define a `dictionary` object that defines the relationships between letters and their leetified versions. Here's a translation table to get you started:

| Regular | 1337 |
|:-------:|:----:|
| `a`     | `@`  |
| `e`     | `3`  |
| `g`     | `9`  |
| `l`     | `1`  |
| `o`     | `0`  |
| `s`     | `5`  |
| `t`     | `7`  |
| `z`     | `2`  |

Use this module to create a command line application that allows the user to leetify their input.

#### Example\*:

```bash
$ node leetspeak.js encode When you wish upon a star...
> \|\|]-[3|\| Y0|_| \|\||5]-[ |_|P0|\| @ 5+@|2...

$ node leetspeak.js encode Seriously, no one can read this.
> 53|2|0|_|51Y, |\|0 0|\|3 (@|\| |23@|) +]-[|5.
```
\* _Feel free to make your translation more readable, or to substitute only certain characters._


## Bonus: Decode!

Create another method - `decode` - within your module. This method should take a leet-ified string and translate it back into normal text.

#### Example:

```bash
$ node leetspeak.js decode '|\/|Y 3Y35 @|23 B|_||2|\|||\|9'
> my eyes are burning
```
