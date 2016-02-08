Package.describe({
  name: 'user:main-test',
  summary: "The main package",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.imply('user:implied-test', 'server');
});
