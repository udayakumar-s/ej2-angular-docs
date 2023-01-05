


import { Component } from '@angular/core';
import { MenuOpenEventArgs, MenuClickEventArgs } from '@syncfusion/ej2-filemanager';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    public ajaxSettings: object;
    public contextMenuSettings: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.contextMenuSettings = {
            file: ['Custom', 'Open', '|', 'Delete', 'Rename', '|', 'Details'],
            folder: ['Custom', 'Open', '|', 'Delete', 'Rename', '|', 'Details','Custom'],
            layout: ['Custom', 'SortBy', 'View', 'Refresh', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll'],
            visible: true
        };
    }
menuOpen(args: MenuOpenEventArgs) {
   for(var i=0;i<args.items.length;i++) {
        if (args.items[i].text === 'Custom') {
            args.items[i].iconCss= 'e-icons e-fe-tick';
        }
    }
}

// event for custom menu item
menuClick(args: MenuClickEventArgs) {
    if (args.item.text === 'Custom') {
        alert('You have clicked custom menu item')
    }
}
}



