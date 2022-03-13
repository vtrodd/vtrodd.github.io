# Vic Trodd's Website

This is the code for my website!  I'm building it using React and TypeScript, and then deploying it to be used as a Github Page using the [gh-pages](https://www.npmjs.com/package/gh-pages) package, so there will be a `gh-deploy` branch when I eventually decide this is ready to be deployed!

## Contributing

I have no idea how to let other people contribute, but I can at least help you to get this set up in a local environment (and then have one of you more experienced people tell me what I need to do for you to contribute!).

Feel free to add issues, make them as in-depth as you feel is necessary!

Unless necessary, you should clone from the `master` branch and push updates to a new branch with some relation to the issue you are working on, which should generally be in the form `VT-xxx` depending on what issue number we're at.


## Set up a local vtrodd.github.io

This is a fairly straightforward process that you might already know, but I don't want to leave people behind!

You'll need a couple of things: [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/).

Once you've got those, you'll want to open a Git Bash terminal somewhere, and run this:
```
git clone https://github.com/vtrodd/vtrodd.github.io
```

You'll next want to change directory to the newly created `vtrodd.github.io` folder from within that Git Bash terminal, using:
```
cd vtrodd.github.io
```
Since you'll likely be working on a specific issue, you'll want to switch to a new branch with the relevant name, which you can do in the Git Bash terminal:
```
git checkout -b VT-xxx
```
And from there, still in that Git Bash window:
```
npm install
```
This will install the necessary node modules (don't worry, these won't be tracked and added to any commits you make!).

Now, your local repository is ready for to be worked on, and you'll also already be able to run a local server for the app by opening any command line and running:
```
npm start
```