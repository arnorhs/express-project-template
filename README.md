# Express project template
I found myself doing roughly the same thing each time I start an express project,
so I made this so I can just clone the repo to a new folder, remove the .git folder
edit the package.json and start from there

```sh
$ git clone https://github.com/arnorhs/express-project-template my-new-project
$ cd my-new-project
$ rm -rf .git
$ npm install
$ npm init
```

Feel free to use it as well, even though I'm creating this just for myself.

I might make it more easily reusable one day with a global bin command such as:

```sh
$ express-project-template init my-new-project
```

But probably not unless I find myself doing this way more often than I think

### License
MIT license
