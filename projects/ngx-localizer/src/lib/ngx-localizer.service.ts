import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxLocalizerService {

  public locale = new Subject<string>();
  private translates: any[] = [];
  private defaultLocale: string = "en";
  private path: string = "./../assets/localizer/";
  private prefix: string = "localize";
  private retryCount: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      //throw new Error("Method not implemented.");
  }

  public setPath(path: string): void {
      if (path) {
          if (path.charAt(path.length - 1) != '/') {
              path = path + "/";
          }
          this.path = "./../../" + path;
      }
  }

  public setPrefix(prefix: string): void {
      if (prefix) {
          this.prefix = prefix;
      }
  }

  public setDefautLocale(locale: string): void {
      if (locale) {
          this.defaultLocale = locale;
      }
  }

  public setLocale = async (locale: string) => {
      await this.getJSON(locale).then((res: any[]) => {
          if (res) {
              this.translates = res;
          }
      });
      this.locale.next(locale);
  }

  private getJSON = async (locale: string) => {
      if (locale) {
          return await this.http.get(this.path + this.prefix + "." + locale + ".json").toPromise().then(data => {
              return data;
          }).catch(err => {
              if (!err.ok) {
                  this.retryCount++;
                  if (this.retryCount < 2) {
                      this.setLocale(this.defaultLocale);
                  } else {
                      this.retryCount = 0;
                  }
              }
              console.error(err);
          })
      } else {
          this.setLocale(this.defaultLocale);
      }
  }
  public getTranslates(): any[] {
      return this.translates;
  }
}
