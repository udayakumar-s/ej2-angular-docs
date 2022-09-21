var ngVersion = '@5.2.10';

System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        '@angular/core': 'angular:core' + ngVersion + '/bundles/core.umd.js',
        '@angular/common': 'angular:common' + ngVersion + '/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler' + ngVersion + '/bundles/compiler.umd.js',
        '@angular/http': 'angular:http' + ngVersion + '/bundles/http.umd.js',
        '@angular/forms': 'angular:forms' + ngVersion + '/bundles/forms.umd.js',
        '@angular/router': 'angular:router' + ngVersion + '/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser' + ngVersion + '/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic' + ngVersion + '/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.10/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'Rx' },
    }
});

System.import('app');