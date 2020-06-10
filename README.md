# ngx-localizer

ngx-localizer is a easy Angular internationalization tool which can help you make your app available in multiple languages.

## Features
  - Custom type json translation files to translate between languaes.
  - Simple html attribute to markdown html tags to translate.
  - Quick rendering.
  - Single route hosting.

## Upcoming Features
- More customization options.
- Google translator support.
- Currencey, Date, number localization support.

### Installation

ngx-localizer requires [Angular](https://angular.io) v4.3+ to run.

Install the library using npm.

```sh
$ npm install ngx-localizer
```

### Usage

##### 1. Import the NgxLocalizerModule

You have to import NgxLocalizerModule in the root NgModule of your application in order to use the library.
```javascript
import { NgModule } from "@angular/core";
import { NgxLocalizerModule } from "ngx-localizer";
 
 @NgModule({
  imports: [ NgxLocalizerModule]
})
```

##### 2. Define html localizer attribute to mark translations
Once you've imported the NgxLocalizerModule, You can mark html tags which will be used to translate using localizer attributte. string value passed to the localizer will be used to identify the translation.

#app.component.html
```html 
<h1 class="header" [localizer]="'greeting1'">Good Morning</h1>
<h1 [localizer]="'greeting2'">Good Afternoon</h1> 
```

##### 3. Define the translations
You can put your translations in a json file located in a path as "/assets/localizer/localize.[lang].json" (default path). ([lang] is the lang that you're using, for english it could be en).

###### JSON structure
json strucure of the language file will be an array with a tag, value object model. Where tag will be used to identify the html tag. Value will be the translation text.

Example : localize.en.json file
```json
[
    {
        "tag": "greeting1",
        "value": "Good Morning"
    },
    {
        "tag": "greeting2",
        "value": "Good Afternoon"
    }
]
```

Example : localize.fr.json file
```json
[
    {
        "tag": "greeting1",
        "value": "Bonjour"
    },
    {
        "tag": "greeting2",
        "value": "Bonsoir"
    }
]
```

##### 4. Using the NgxLocalizerService to change the language
After configuring the translation you can use NgxLocalizerService to change the language. In following example fr is the [lang] prefix used to define the tranlate json file prefix.

#app.component.ts
```javascript
import { Component } from '@angular/core';
import { NgxLocalizerService } from 'ngx-localizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private localizer:NgxLocalizerService){
  }

  change(): void{
    this.localizer.setLocale('fr');
  }
}
```

##### NgxLocalizerService Methods
- setDefautLocale(lang: string): Used to set the default language as the fallback language.
- setLocale('fr'): Changes the displayed language.
- setPath(path: string) : Set a differnet path folder other than the default folder path.
- setPrefix(prefix: string): Set a diffrenet file prefix. (Default : localize)


-------------
Changelog
-------------

**0.0.1**
- Added service methods to change defult paths;

**0.0.1**
- Inital release;



**1.0.0**
- Initial release;

# Todos
 - Sample plunker project will be added soon

License
----
MIT