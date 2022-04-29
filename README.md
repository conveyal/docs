# Conveyal Docs

Documentation for using the [Conveyal](https://conveyal.com) platform.

## Structure

We utilize the [Documentation System](https://documentation.divio.com) from [Divio](https://www.divio.com). 

> There is a secret that needs to be understood in order to write good software documentation: there isn’t one thing called documentation, there are four.
> 
> They are: tutorials, how-to guides, technical reference and explanation. They represent four different purposes or functions, and require four different approaches to their creation. Understanding the implications of this will help improve most documentation - often immensely.

As of 2022-04-29, most of the documentation was written before we were utilizing this system. Therefore, some of the pages may fall into multiple categories. Going forward, new documentation should use the Documentation System guidance and, over time, old documentation should be migrated to the new system.

There is extensive information about the [Documentation System] on their website, but a quick breakdown is:

| | Tutorials | How-to guides | Reference | Explanation |
| --: | --- | --- | --- | --- |
| oriented to | learning | a goal | information | understanding |
| must | allow the newcomer to get started | show how to solve a specific problem | describe the machinery | explain |
| its form | a lesson | a series of steps | dry description | discursive explanation |
| analogy | teaching a small child how to cook | a recipe in a cookery book | a reference encyclopaedia article | an article on culinary social history |


## Build and develop locally

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.