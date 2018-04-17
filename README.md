# Webpack XKE hackathon

[![Greenkeeper badge](https://badges.greenkeeper.io/ndelangen/xke-webpack-hackathon.svg)](https://greenkeeper.io/)

## the setup

- We have a Plugin to make entrypoints dynamic
- We have a Plugin to generate an html file = assets per entrypoint
- We have a Loader to prepend some code above each entrypoint js asset

## goals:

- switch to use the webpack/webpack-serve Node API
- modify the loader to grab the code to prepend from a file

## challenges
- print all the exports from the example file
- render all exports as react components

