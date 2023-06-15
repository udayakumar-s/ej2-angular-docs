


import { Component, ViewChild, OnInit } from '@angular/core';
import { enableRipple, isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { DatePicker } from '@syncfusion/ej2-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-angular-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

enableRipple(true);

@Component({
  selector: 'app-container',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  @ViewChild('alertDlg') alertDlg?: DialogComponent;
  @ViewChild('accordion') accordion?: AccordionComponent;
  @ViewChild('mobile') mobile?: NumericTextBoxComponent;
  @ViewChild('cardNo') cardNo?: NumericTextBoxComponent;
  @ViewChild('date') expiry?: DatePickerComponent;
  @ViewChild('cvv') cvv?: NumericTextBoxComponent;

  public dlgTarget?: HTMLElement;
  public dlgButtons?: Object[];
  public success: string = 'Your payment successfully processed';
  public email_alert: string = 'Enter valid email address';
  public mobile_alert: string = 'Mobile number length should be 10';
  public card_alert: string = 'Card number length should be 16';
  public cvv_alert: string = 'CVV number length should be 3';

  public ngOnInit(): void {
    this.dlgTarget = document.body;
    this.dlgButtons = [{
      buttonModel: { content: 'Ok', isPrimary: true },
        click: (() => {
          this.alertDlg?.hide();
          if ((this.accordion as AccordionComponent).expandedIndices[0] === 2 && this.alertDlg?.content === this.success) {
            (this.accordion as AccordionComponent).enableItem(0, true);
            (this.accordion as AccordionComponent).enableItem(1, false);
            (this.accordion as AccordionComponent).enableItem(2, false);
            (this.accordion as AccordionComponent).expandItem(true, 0);
          }
        })
      }];
  }

  public dlgCreated(): void {
    this.alertDlg?.hide();
  }

  public acrdnCreated(): void {
   (this.accordion as AccordionComponent).enableItem(1, false);
   (this.accordion as AccordionComponent).enableItem(2, false);
  }

  public btnClick(e: any): void {
    switch (e.target.id) {
      case 'Continue_Btn':
        let email: string | any = (document.getElementById('email') as HTMLElement);
        let password: string | any = (document.getElementById('password') as HTMLElement);
        if(email.value !== '' && password.value !== '') {
          if(this.checkMail(email.value)) {
            email.value = password.value = '';
            (this.accordion as AccordionComponent).enableItem(1, true);
            (this.accordion as AccordionComponent).enableItem(0, false);
            (this.accordion as AccordionComponent).expandItem(true, 1);
          }
          (document.getElementById('err1') as HTMLElement).classList.remove('show');
        } else {
          (document.getElementById('err1') as HTMLElement).classList.add('show');
        }
        break;
      case 'Continue_BtnAdr':
        let name: string | any = document.getElementById('name');
        let address: string | any = document.getElementById('address');
        if((name.value !== '') && (address.value !== '') && (!isNOU((this.mobile as NumericTextBoxComponent).value))) {
          if(this.checkMobile((this.mobile as NumericTextBoxComponent).value)) {
            (this.accordion as AccordionComponent).enableItem(2, true);
            (this.accordion as AccordionComponent).enableItem(1, false);
            (this.accordion as AccordionComponent).expandItem(true, 2);
          }
          (document.getElementById('err2') as HTMLElement).classList.remove('show');
        } else {
          (document.getElementById('err2') as HTMLElement).classList.add('show');
        }
        break;
      case 'Back_Btn':
        (this.accordion as AccordionComponent).enableItem(1, true);
        (this.accordion as AccordionComponent).enableItem(2, false);
        (this.accordion as AccordionComponent).expandItem(true, 1);
        break;
      case 'Save_Btn':
        let cardHolder: string | any = document.getElementById('cardHolder');
        if(!isNOU((this.cardNo as NumericTextBoxComponent).value) && (cardHolder.value !== '') && (!isNOU((this.expiry as DatePickerComponent).value)) && !isNOU((this.cvv as NumericTextBoxComponent).value)) {
          if (this.checkCardNo((this.cardNo as NumericTextBoxComponent).value)) {
            if (this.checkCVV((this.cvv as NumericTextBoxComponent).value)) {
              (this.alertDlg as DialogComponent).content = this.success;
              (this.alertDlg as DialogComponent).show();
            }
          }
          (document.getElementById('err3') as HTMLElement).classList.remove('show');
        } else {
          (document.getElementById('err3') as HTMLElement).classList.add('show');
        }
        break;
    }
  }

  public checkMail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      (this.alertDlg as DialogComponent).content = this.email_alert;
      (this.alertDlg as DialogComponent).show();
      return false;
    }
  }

  public checkMobile(mobile: number) {
    if (/^\d{10}$/.test(mobile as any)) {
      return true;
    } else {
      (this.alertDlg as DialogComponent).content = this.mobile_alert;
      (this.alertDlg as DialogComponent).show();
      return false;
    }
  }

  public checkCardNo(cardNo: number) {
    if (/^\d{16}$/.test(cardNo as any)) {
      return true;
    } else {
      (this.alertDlg as DialogComponent).content = this.card_alert;
      (this.alertDlg as DialogComponent).show();
      return false;
    }
  }

  public checkCVV(cvv: number) {
    if (/^\d{3}$/.test(cvv as any)) {
      return true;
    } else {
      (this.alertDlg as DialogComponent).content = this.cvv_alert;
      (this.alertDlg as DialogComponent).show();
      return false;
    }
  }
}



