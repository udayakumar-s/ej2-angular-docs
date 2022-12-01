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
        "syncfusion:": "https://cdn.syncfusion.com/ej2/20.2.43/",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        app: 'app',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
		"@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
		"@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",
        "@syncfusion/ej2-angular-inputs": "syncfusion:ej2-angular-inputs/dist/ej2-angular-inputs.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        '@angular/core': 'angular:core' + ngVersion + '/bundles/core.umd.js',
        '@angular/common': 'angular:common' + ngVersion + '/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler' + ngVersion + '/bundles/compiler.umd.js',
        '@angular/http': 'angular:http' + ngVersion + '/bundles/http.umd.js',
        '@angular/forms': 'angular:forms' + ngVersion + '/bundles/forms.umd.js',
        '@angular/router': 'angular:router' + ngVersion + '/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser' + ngVersion + '/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic' + ngVersion + '/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material' + ngVersion + '/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10'
    },
    packages: {
        'app': { main: 'main', defaultExtension: 'ts' },
        'rxjs': { main: 'Rx' },
    }
});

System.import('app');