import { Component, ViewEncapsulation } from '@angular/core';
import { FileManagerComponent, NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService } from '@syncfusion/ej2-angular-filemanager';
/**
 * File Manager virtualization feature sample
 */

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService]
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

    onBeforeSend(args) {
        args.ajaxSettings.beforeSend = function (args) {
            args.httpRequest.setRequestHeader('Authorization', 'FileBrowser');
        };
    }
    beforeImageLoad(args) {
        args.imageUrl = args.imageUrl + '&rootName=' + 'FileBrowser';
    }
    beforeDownload(args) {
        args.data.rootFolderName = 'FileBrowser';
    }
}
