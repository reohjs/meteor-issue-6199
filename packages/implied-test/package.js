Package.describe({
  name: 'user:implied-test',
  summary: "The main package",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.addFiles('test.js', 'server');
  api.export('Test', 'server');
});
