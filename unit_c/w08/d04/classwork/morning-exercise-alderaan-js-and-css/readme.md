## Let's take a break from dating and talk about Star Wars

![:image](http://www.firsttvdrama.com/funstuff/tarkin/tark3.jpg)

Grand Moff Tarkin is threatening to destroy Princess Leia's homeworld Alderaan unless she reveals the secret location of the Rebel Alliance!

### On your index.html page

There should be a div with an `id` of `alderaan` with a class of `planet`

There should be a div with an `id` of `death-star` with a class of `planet`

There should be a link with an `id` of `tell` and a button with an `id` of `never`

> Can you make the planet divs circles? https://css-tricks.com/examples/ShapesOfCSS/

### Let's talk about events

If you mouseover `alderaan` or `death-star` their respective names should appear. 

If you click on `button#never` the `#alderaan` planet should be removed from the DOM after 5 seconds.

After the '#alderaan' div has been removed, add the text "I felt a great disturbance in the Force" to `.top-bar.flash` and add the class "show."  Remove the class "show" after 3 seconds.

If you click on `a#tell` reveal the `form#secret-cordinates`

If you type `Yavin 4` into `input[name=location]` the `body` background color should turn `green` otherwise make the body background color `red`

If you press `H` reveal the 'form#secret-message'

If you type `Help me Obi Wan, you're my only hope` into `input[name=plea]` the background should change to blue.

> Be sure to prevent the default behavior on any links or forms!

### Styling Forms

Take a look at http://purecss.io/

- Apply "pure-button" to any link or buttons http://purecss.io/buttons/

- Apply "pure-form" and any additional HTML needed to style your forms as compact inline forms. http://purecss.io/forms/

- Can you layout your planets using Pure Grids? http://purecss.io/grids/
