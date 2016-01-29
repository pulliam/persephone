# Asset Pipeline

Care about these:

- minification
- uglification
- concatenation

Rails handles these in the Asset Pipeline with Sprockets

Require your CSS and JS files with manifest files.

CSS sprokect directives are written after `*`

This will load a `puppies.css` file inside `app/assets/stylesheets/`

```
/* application.css
*
*= require puppies
*/
```

JS sprokect directives are written after `//`

This will load a `kittens.css` file inside `app/assets/javascripts/`

```
// application.js
//
//= require kittens
//
```

Images can be linked to use Rails Asset helpers, but you'll need
to include `.erb` to the end of a file.

```
/* puppies.css.erb */

body {
  background-image: url('<%= asset_path "dog.jpg" %>');
}
```

This will be processed to the correct file path to load a
"dog.jpg" image inside `app/assets/images`
