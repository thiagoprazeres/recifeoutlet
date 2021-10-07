exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/noticias/:title": {
      type: "contentFolder",
      title: {
        folder: "./noticias",
      },
    },
  },
};
