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
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.2.43/",
        "angular:": "https://unpkg.com/@angular/",
        "moment": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.js"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-ng-base": "syncfusion:ej2-ng-base/dist/ej2-ng-base.umd.min.js",
        "@syncfusion/ej2-ng-calendars": "syncfusion:ej2-ng-calendars/dist/ej2-ng-calendars.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js", 
        '@angular/core': 'angular:core@5.2.10/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.10/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.10/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.10/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.10/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.10/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.10/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.10/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.10/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10',
        'moment':'moment'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'index' },
    }
});

System.import('app');