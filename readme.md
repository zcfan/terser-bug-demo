# Demo of memory leaks after terser minifying

## Before fix, the `leaks.js` leaks

The `leaks.js` leaks memory every 1 second. (Credit to [this blog post](https://blog.meteor.com/an-interesting-kind-of-javascript-memory-leak-8b47d2e7f156))

To verify it, run the following command:

```
$ node --inspect leaks.js
```

Open `chrome://inspect` and record a memory timeline.

![](leaks-timeline.png)

## After fix, the `fix.js` doesn't leak

Look at `fix.js` to see how it is fixed by extracting the inner function declaration into module scope.

You can verify it by memory timeline again.

## But `fix.js` leaks again after terser minifying

Look at `minify.js` to see how it is being minified, and `output.js` to see the result of minifying.

terser moves the `fix` function from module scope to inner of the `replaceThing` function. which revert the fix.

# Conclusion

This behavior is dangerous because it transform a healthy code into a leaking one.

I don't know which options can I use to disable it, please help.

Even if it is able to be disabled by options, it is still dangerous because it should not be default.
