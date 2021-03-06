<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


[![deffy](http://i.imgur.com/k1hlQxA.png)](#)

# deffy

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/deffy.svg)](https://www.npmjs.com/package/deffy) [![Downloads](https://img.shields.io/npm/dt/deffy.svg)](https://www.npmjs.com/package/deffy) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

> Small and fast library to set default values.

## :cloud: Installation

```sh
# Using npm
npm install --save deffy

# Using yarn
yarn add deffy
```


## :clipboard: Example



```js
// Dependencies
var Deffy = require("deffy");

console.log(Deffy(undefined, "Hello World"));
// => "Hello World"

console.log(Deffy("Hello World", 42));
// => 42

console.log(Deffy("Hello", "World"));
// => "World"

console.log(Deffy("", "World", true));
// => "World"

console.log(Deffy("", "World"));
// => ""

console.log(Deffy("foo", function (input) {
    return input === "foo" ? "bar" : "foo";
}));
// => "bar"
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `Deffy(input, def, options)`
Computes a final value by providing the input and default values.

#### Params

- **Anything** `input`: The input value.
- **Anything|Function** `def`: The default value or a function getting the input value as first argument.
- **Object|Boolean** `options`: The `empty` value or an object containing the following fields:

 - `empty` (Boolean): Handles the input value as empty field (`input || default`). Default is `false`.

#### Return
- **Anything** The computed value.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`ascii-heart`](https://github.com/nuvipannu/ascii-heart#readme) (by Nuvi Pannu)—Create ASCII hearts using Node.js.
 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.
 - [`bindy`](https://github.com/IonicaBizau/bindy#readme)—Create array of functions bound to input arrays.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`bloggify-contact-form`](https://github.com/Bloggify/contact-form)—The official contact form plugin for Bloggify
 - [`bloggify-paths`](https://github.com/IonicaBizau/bloggify-paths#readme)—Helper library for maintaining the Bloggify paths in one place.
 - [`bloggify-shop`](https://github.com/IonicaBizau/bloggify-shop#readme)—eCommerce plugin for Bloggify.
 - [`bloggify-template-renderer`](https://github.com/Bloggify/template-renderer#readme) (by Bloggify)—The default template renderer for Bloggify.
 - [`bloggify-theme-renderer`](https://github.com/Bloggify/theme-renderer#readme) (by Bloggify)—The default theme renderer for Bloggify.
 - [`bloggify-ws`](https://github.com/Bloggify/bloggify-ws#readme) (by Bloggify)—Websockets for Bloggify Actions!
 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)—Simple way to log messages in stdout or other stream.
 - [`cli-box`](https://github.com/IonicaBizau/node-cli-box)—A library to generate ASCII boxes via NodeJS
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`cute-logger`](https://github.com/IonicaBizau/cute-logger)—Simple way to log messages in stdout or other stream.
 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.
 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) (by jillix)—Low level library providing Engine flow types.
 - [`engine-parser`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`enny`](https://github.com/IonicaBizau/enny) (by jillix)—Generate Engine compositions from human-readable inputs.
 - [`flow-api`](https://github.com/jillix/flow-api) (by jillix)—The flow api library and CLI app.
 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.
 - [`ghosty`](https://github.com/IonicaBizau/ghosty#readme)—A wrapper around PhantomJS, downloading the Phantom binary.
 - [`git-package-json`](https://github.com/IonicaBizau/git-package-json#readme)—Get the package.json contents from git repositories.
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`love-you`](https://github.com/IonicaBizau/love-you#readme)—"I love you" in different languages.
 - [`obj-def`](https://github.com/IonicaBizau/obj-def#readme)—Easily set default fields in objects.
 - [`parrot-bot`](https://github.com/IonicaBizau/parrot-bot#readme)—A parrot-like bot you can talk with.
 - [`pixel-class`](https://github.com/IonicaBizau/pixel-class#readme)—A tiny class for pixel manipulation.
 - [`same-time`](https://github.com/IonicaBizau/same-time.js)—Call functions in parallel and store the results.
 - [`set-or-get`](https://github.com/IonicaBizau/set-or-get.js)—Sets or gets an object field value.
 - [`ssh-remote`](https://github.com/IonicaBizau/ssh-remote)—Automagically switch on the SSH remote url in a Git repository.
 - [`svg.connectable.js`](https://github.com/jillix/svg.connectable.js) (by jillix)—A JavaScript library for connecting SVG things.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.
 - [`transformer`](https://github.com/IonicaBizau/transformer#readme)—Transform data using synchronous and asynchronous functions.
 - [`ul`](https://github.com/IonicaBizau/node-ul)—A minimalist utility library.
 - [`value-breakpoints`](https://github.com/IonicaBizau/value-breakpoints#readme)—Run specific stuff when value reaches a specific range.
 - [`web-term`](https://github.com/IonicaBizau/web-term)—A full screen terminal in your browser.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
