## Divisors

This was pretty straightforward: iterate from one to the square root, and when the remainder is zero, add the divisor *and its pair* to a list of divisors. The greatest challenge actually came when I was trying to format the output nicely, since I forgot that JavaScript sorts arrays lexicographically even when it is an array of all numbers. The interesting thing I did is that I wrote this in TypeScript (essentially JavaScript with more type checking) and not directly in JavaScript. This may explain why some bits of the generated `divisor.js` file look odd - you can look in `divisor.ts` to see what I actually wrote.

## Triangle

For this problem I tried to be minimally invasive to the existing code. In order to accomplish this, I kept the global `triangle` variable that stores the most recently added triangle (the one which can be modified). This allowed me to simply add the current triangle to my list of triangles when spawning a new one. Doing this and drawing every triangle in the list was all I needed to do.
