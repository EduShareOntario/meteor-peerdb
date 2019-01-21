Package.describe({
  name: 'edushareontario:peerdb',
  summary: "Reactive database layer with references, generators, triggers, migrations, etc. (observing tweak)",
  version: '0.27.1',
  git: 'https://github.com/edushareontario/meteor-peerdb.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Core dependencies.
  api.use([
    'coffeescript@2.2.1_1',
    'ecmascript',
    'underscore',
    'minimongo',
    'mongo',
    'ddp',
    'logging',
    'promise'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5',
    'peerlibrary:stacktrace@1.3.1_2'
  ]);

  api.export('Document');

  api.addFiles([
    'lib.coffee'
  ]);

  api.addFiles([
    'server.coffee'
  ], 'server');

  api.addFiles([
    'client.coffee'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  api.use([
    'coffeescript@2.2.1_1',
    'ecmascript',
    'tinytest',
    'test-helpers',
    'insecure',
    'accounts-base',
    'accounts-password',
    'underscore',
    'random',
    'logging',
    'ejson',
    'mongo',
    'ddp'
  ]);

  // Internal dependencies.
  api.use([
    'edushareontario:peerdb'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5'
  ]);

  api.addFiles([
    'tests_defined.js',
    'tests.coffee'
  ]);
});
