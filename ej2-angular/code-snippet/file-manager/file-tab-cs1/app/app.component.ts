


import { Component } from '@angular/core';
import { FileManagerComponent } from '@syncfusion/ej2-angular-filemanager';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    public headerText: Object = [{ text: 'Overview' }, { text: 'FileManager' }];
    public ajaxSettings: object;
    // Mapping Tab items showCloseButton property
    public enableClose: boolean = true;
    public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
    };
}



