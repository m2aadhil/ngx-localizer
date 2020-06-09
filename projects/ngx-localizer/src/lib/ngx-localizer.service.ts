import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxLocalizerService {

  public locale = new Subject<string>();
  private translates: any[] = [];

  constructor(private http: HttpClient) { }

  public setLocale(locale: string): void {
    this.getJSON(locale).subscribe(data => {
      this.translates = data;
      this.locale.next(locale);
    });
  }

  public getTranslates(): any[] {
    return this.translates;
  }

  private getJSON(locale: string): Observable<any> {
    if (locale) {
      return this.http.get("./../assets/localizer/localize." + locale + ".json");
    } else {
      return null;
    }
  }
}
