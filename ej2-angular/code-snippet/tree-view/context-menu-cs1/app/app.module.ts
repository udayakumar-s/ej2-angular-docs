import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TreeViewModule, BeforeOpenCloseMenuEventArgs, MenuEventArgs, MenuItemModel, ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule, TreeViewModule
    ],
    declarations: [AppComponent, ContextMenuComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
