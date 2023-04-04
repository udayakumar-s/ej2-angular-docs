---
layout: post
title: Sorting cards in Angular Kanban component | Syncfusion
description: Learn here all about Sorting cards in Syncfusion Angular Kanban component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting cards 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting cards in Angular Kanban component

By default, the Kanban cards are initially placed and drop the card inside the columns based on JSON data orders.

Cards are placed in a particular position in the columns when you drop the cards by specifying the `sortBy` property in `sortSettings`, which is mapped from the datasource. This property allows the users to drop the cards in the Kanban board where exactly created on dropped clone. It is also helpful to render the cards based on the `sortBy` property value.

`Index`: The cards are aligned based on the index value. The index binds to the card based on the mapping field that must be an integer value. Cards will be dropped at the particular position where the user drag-and-drop the cards. The index of the cards will dynamically update its field value based on the dropped position.

`Custom`: Users can map any field to sort the cards using this option, which accepts both string and integer field value. It maintains the initial mapping key-value to drag and drop the cards and does not change their mapping value after dropping the cards.

The following cases are dynamically changed their `sortBy` value when drop the cards.

* If the cell has no cards, the dropped card `sortBy` value does not change.

* If the cell has one card and dropped a card to last position or previous/next cards that do not have continuous order, then the dropped card `sortBy` value changed based on their previous card value.

* If the cell has one card and dropped a card on previous position, then compare both values and the dropped card `sortBy` value is changed if the cards have continuous order otherwise not changed their value.

* When the previous and next cards does not have continuous order, the dropped card `sortBy` value changed based on the previous card value.

* When previous and next cards have continuous order or odd/even value, then the dropped card followed by next all cards up to **continuous value** are dynamically changed their `sortBy` value based on the **previous** card value.

For Example,
**Continuous Order** -
Column A having Card A with field value `1`, Card B with field value `2` and Card C with field value `3`.
Column B having Card D with field value `5`. Dropped Card D between Card A and Card B. Now, Card D, B and C dynamically changed their field value to `2, 3, 4`.

**Odd/Even order** -
Column A having Card A with field value `1`, Card B with field value `3` and Card C with field value `5`.
Column B having Card D with field value `5`. Dropped Card D between Card A and Card B. Now, Card D, B and C dynamically changed their field value to `2, 3, 5`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/kanban/priority-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/kanban/priority-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/kanban/priority-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/kanban/priority-cs2" %}
