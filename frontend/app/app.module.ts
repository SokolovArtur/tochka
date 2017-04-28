import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from "@angular/forms";
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        DataFilterPipe,
        AppComponent,
        HomeComponent,
        DetailsComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        DataTableModule,
        FormsModule,
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
