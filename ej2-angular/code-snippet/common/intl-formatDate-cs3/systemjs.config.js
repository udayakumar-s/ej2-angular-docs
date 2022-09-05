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
        "syncfusion:": "{{:CDN_LINK}}",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",

        '@angular/core': 'angular:core@5.2.10/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.10/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.10/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.10/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.10/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.10/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.10/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.10/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.10/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'index' },
    }
});

System.import('app');