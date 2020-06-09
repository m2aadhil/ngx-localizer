import { NgModule } from '@angular/core';
import { NgxLocalizerDirective } from './ngx-localizer.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgxLocalizerService } from './ngx-localizer.service';



@NgModule({
  declarations: [NgxLocalizerDirective],
  imports: [
    HttpClientModule
  ],
  providers: [NgxLocalizerService],
  exports: [NgxLocalizerDirective, NgxLocalizerService]
})
export class NgxLocalizerModule { }
