

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, MenuItemModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
            <button ejs-button (click)='btnClick()'>Enable all items</button>
            <div class="menu-section">
                <ejs-menu #menu [items]='menuItems' (beforeOpen)='beforeOpen($event)' (created)='created()'></ejs-menu>
            </div>
        </div>`
})

export class AppComponent {
    @ViewChild('menu')
    private menuObj: MenuComponent;

    //Menu items definition
    private menuItems: MenuItemModel[] = [
        {
            text: 'Events',
            items: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            text: 'Movies',
            items: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            text: 'Directory',
            items: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            text: 'Queries',
            items: [
                { text: 'Our Policy' },
                { text: 'Site Map' }
            ]
        },
        { text: 'Services' }
    ];

    private disableItems: string[] = ['Conferences', 'Music', 'Directory'];

    private beforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        //Handling sub menu items
        for (let i: number = 0; i < args.items.length; i++) {
            if (this.disableItems.indexOf(args.items[i].text) > -1) {
                this.menuObj.enableItems([args.items[i].text], false, false);
            }
        }
    }

    private created(): void {
        //Disable items
        this.menuObj.enableItems(this.disableItems, false, false);
    }

    private btnClick(): void {
        //Enable items
        this.menuObj.enableItems(this.disableItems, true, false);
        this.disableItems = [];
    }
}


