# Get or Set Local Storage Value

If the [`enablePersistence`](../../api/grid/#enablepersistence) property set as true,
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