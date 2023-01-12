---
layout: post
title: Get or set local storage value in Angular Treegrid component | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get or set local storage value 
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in Angular Treegrid component

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