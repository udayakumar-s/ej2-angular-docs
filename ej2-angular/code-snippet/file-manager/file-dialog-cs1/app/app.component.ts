


import { Component , ViewChild, Inject} from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { FileManagerComponent, FileOpenEventArgs } from '@syncfusion/ej2-angular-filemanager';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('uploadObj')
    public uploadObj: UploaderComponent;
    @ViewChild('dialogObj')
    public dialogObj: DialogComponent;
    @ViewChild('filemanagerObj')
    public filemanagerObj: FileManagerComponent;
    public dialogHeader = 'Select a file';
    public animationSettings: Object = { effect: 'None' };
    public showCloseIcon = true;
    public target = '#target';
    public visible = false;
    public dialogWidth = '850px';
    public ajaxSettings: object;
    public contextMenuSettings: object;
    public toolbarSettings: object;
    public hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    public contextmenuItems: string[] = ['Open', '|', 'Cut', 'Copy', 'Delete', 'Rename', '|', 'Details'];

    public btnClick: EmitType<object> = () => {
        this.dialogObj.show();
        this.dialogOpen();
        this.filemanagerObj.path = '/';
        this.filemanagerObj.selectedItems = [];
        this.filemanagerObj.refresh();
    }

    // Uploader will be hidden, if Dialog is opened
    public dialogOpen: EmitType<object> = () => {
        document.getElementById('uploadFileManager').style.display = 'none';
    }
    // Uploader will be shown, if Dialog is closed
    public dialogClose: EmitType<object> = () => {
        document.getElementById('uploadFileManager').style.display = 'block';
    }

    // File Manager's fileOpen event function
    public onFileOpen(args: FileOpenEventArgs): void {
        let file = (args as any).fileDetails;
        if (file.isFile) {
            args.cancel = true;
            if (file.size <= 0 ) { file.size = 10000; }
            this.uploadObj.files = [{name: file.name, size: file.size, type: file.type }];
            this.dialogObj.hide();
        }
    }

    public ngOnInit(): void {
        this.ajaxSettings = {
            url: this.hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
            uploadUrl: this.hostUrl + 'api/FileManager/Upload',
            downloadUrl: this.hostUrl + 'api/FileManager/Download'
        };
        this.toolbarSettings = {
            items: ['NewFolder', 'Upload', 'Delete', 'Cut', 'Copy', 'Rename', 'SortBy', 'Refresh', 'Selection', 'View', 'Details']
        };
        this.contextMenuSettings = {
            file: this.contextmenuItems,
            folder: this.contextmenuItems
        };
        this.uploadObj.autoUpload = true;
    }

    public ngOnDestroy(): void {
        if (document.querySelector('.sb-demo-section').classList.contains('upload-dialog')) {
            document.querySelector('.sb-demo-section').classList.remove('upload-dialog');
        }
    }
}



