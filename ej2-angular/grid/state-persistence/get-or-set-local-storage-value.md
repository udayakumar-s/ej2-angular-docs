---
layout: post
title: Get or set local storage value in Angular Grid component | Syncfusion
description: Learn here all about Get or set local storage value in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Get or set local storage value 
documentation: ug
domainurl: ##DomainURL##
---

# Get or set local storage value in Angular Grid component

If the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablepersistence) property set as true,
The Grid property value is saved in the **window.localStorage** for reference. You can get/set the localStorage value by using the
**getItem**/**setItem** method in **window.localStorage**.

```typescript
//get the Grid model.
let value: string = window.localStorage.getItem('gridGrid'); //"gridGrid" is component name + component id.
let model: Object = JSON.parse(model);

```

```typescript
//set the Grid model.
window.localStorage.setItem('gridGrid', JSON.stringify(model)); //"gridGrid" is component name + component id.

```