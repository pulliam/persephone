# Sublime Build

Because we're running node from the command line, Sublime can execute it via a "Build System."
That means we can test our output through Sublime instead of rerunning from the terminal.

Tools > Build System > New Build System

Replace with this:

```
{
  "cmd": ["node", "$file"],
  "selector": "source.js"
}
```

Save As > "node.sublime-build” and run with Shift + Cmd + B.

Test that the Sublime Build works...

- Create a new JS file called geometry.js.
- Declare and assign a "geometry" variable to an empty object literal.
- Define a new method "area" on the "geometry" object that calculates the area.
- Console.log the calculated area of 4 and 5.
- Try out the build with Shift + Cmd + B.
