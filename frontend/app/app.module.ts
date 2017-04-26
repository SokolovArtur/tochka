import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        DetailsComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: '**', component: ErrorComponent }
        ])
    ],
    providers: [
        {
            provide: XSRFStrategy,
            useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
        }
    ]
})
export class AppModule {
}
