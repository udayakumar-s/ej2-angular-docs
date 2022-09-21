---
layout: post
title: State persistence in Angular Treegrid component | Syncfusion
description: Learn here all about State persistence in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: State persistence 
documentation: ug
domainurl: ##DomainURL##
---

# State persistence in Angular Treegrid component

State persistence refers to the TreeGrid's state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.
State persistence stores treegrid’s model object in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablepersistence) is defined as true.

## Get or set localStorage value

If the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#enablepersistence) property is set to true, the treegrid property value is saved in the `window.localStorage` for reference. You can get/set the localStorage value by using the `getItem`/`setItem` method in the `window.localStorage`.

```typescript
//get the TreeGrid model.
let value: string = window.localStorage.getItem('treegridTreeGrid'); //"treegridTreeGrid" is component name + component id.
let model: Object = JSON.parse(model);

```

```typescript
//set the TreeGrid model.
window.localStorage.setItem('treegridTreeGrid', JSON.stringify(model)); //"treegridTreeGrid" is component name + component id.

```

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.