


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings'>
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings: object;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileAccess/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileAccess/GetImage',
            uploadUrl: this.hostUrl + 'api/FileAccess/Upload',
            downloadUrl: this.hostUrl + 'api/FileAccess/Download'
        };
       }
}



