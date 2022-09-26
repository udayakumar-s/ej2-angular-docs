


import { Component } from '@angular/core';

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
        // Context Menu settings customization
        this.contextMenuSettings = { file: ['Open', '|', 'Details'], folder: ['Open', '|', 'Details'], layout: ['SortBy', 'View', 'Refresh', '|', 'Details', '|'], visible: true};
    };
}



