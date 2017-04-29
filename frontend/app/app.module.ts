import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from "@angular/forms";
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { ModalModule } from 'angular2-modal';
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
        BootstrapModalModule,
        BrowserModule,
        DataTableModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: '**', component: ErrorComponent }
        ])
    ],
    entryComponents: [
        DetailsComponent
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
