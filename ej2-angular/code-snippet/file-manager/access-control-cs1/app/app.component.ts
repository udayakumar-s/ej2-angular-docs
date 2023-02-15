


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    template: `<ejs-filemanager id='file-manager' [ajaxSettings]='ajaxSettings' [view]='view' (beforeSend)="beforeSend($event)">
    </ejs-filemanager>`
})
export class AppComponent {
    public ajaxSettings: object;
    public view: string;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.view = "Details";
       }
       beforeSend(args){
        args.ajaxSettings.beforeSend = function (args: any) {
            args.httpRequest.setRequestHeader('Authorization', 'Access control');
          };
       }
}



