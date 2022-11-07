---
layout: post
title: Tree shaking in Angular Frameworks and feature component | Syncfusion
description: Learn here all about Tree shaking in Syncfusion Angular Frameworks and feature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tree shaking 
documentation: ug
domainurl: ##DomainURL##
---

# Tree shaking in Angular Frameworks and feature component

The [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) process basically reduces the download size of an application over network.

## Overview

This article provides the details on what Tree Shaking is and how it works in an Angular application.

## Tree Shaking Concept

Tree Shaking is a way to remove unused modules from the final bundle file of the application. Angluar CLI by default uses [WebPack](https://webpack.js.org/) bundler for bundling the script files which supports Tree Shaking from [WebPack2](https://webpack.js.org/).

## Tree Shaking with Angular

Latest bundlers, compines the complete application scripts into single bundle file. The bundle file dose not contain any export and supports the removed of unused code.

## Using Syncfusion with Tree Shaking

By default, Syncfusion Angular components supports Tree Shaking and it dose not require any special changes in application level.

## Compiling Angular Application with Tree Shaking

The following steps explains how to run Tree Shaking in an Angular Application.

1. Create an Angular application with Syncfusion EJ2 Angular components as in the [Getting Started](../getting-started/angular-cli/) documentation using [Angular CLI](https://cli.angular.io/).

2. Run the `ng build --prod` or `ng serve --prod` command to build or serve the application with Tree Shaking enabled.  