
import {  Component, ViewChild } from "@angular/core";
import { CarouselComponent } from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: "app-root",
  template: `<!-- To Render Carousel. -->
    <button ejs-button cssClass="e-info" (click)="prevBtnClick()">Previous</button>
    <button ejs-button cssClass="e-info" (click)="nextBtnClick()">Next</button>
    <div class="control-container">
      <ejs-carousel #carousel>
        <e-carousel-items>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Cardinal</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Kingfisher</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Keel-billed-toucan</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Yellow-warbler</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
          <e-carousel-item>
            <ng-template #template>
              <figure class="img-container">
                <img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" />
                <figcaption class="img-caption">Bee-eater</figcaption>
              </figure>
            </ng-template>
          </e-carousel-item>
        </e-carousel-items>
      </ejs-carousel>
    </div>`,
})
export class AppComponent {
  @ViewChild("carousel") carousel!: CarouselComponent;
  public prevBtnClick() {
    this.carousel.prev();
  }

  public nextBtnClick() {
    this.carousel.next();
  }
}


