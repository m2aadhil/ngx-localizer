import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { NgxLocalizerService } from './ngx-localizer.service';

@Directive({
  selector: '[localizer]'
})
export class NgxLocalizerDirective {
  @Input('localizer') tag: string;

  constructor(private el: ElementRef, private renderer: Renderer2, localizerService: NgxLocalizerService) {
    localizerService.locale.subscribe(locale => {
      let language = localizerService.getTranslates();
      let langObject = language.find(i => i.tag == this.tag);
      let translate;
      if (langObject) {
        translate = langObject.value;
      }
      if (translate) {
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', translate);
      }

    })
  }

}