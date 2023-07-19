/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/oauth",
        "getting-started/github-app"
      ],
      link: {
        type: "generated-index",
        title: "Get Started",

        slug: "/features",
      },
    },
  ],
};

module.exports = sidebars;
