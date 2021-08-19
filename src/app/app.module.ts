import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {MaterialImportModule} from './shared/modules/material-import/material-import.module';
import {SharedModule} from './shared/modules/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToDoListComponent } from './dashboard/to-do-list/to-do-list.component';
import { DoneListComponent } from './dashboard/done-list/done-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { EntityDataModule } from '@ngrx/data';
// import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import * as todosStore from './store/todos';
import { IncompleteComponent } from './dashboard/incomplete/incomplete.component';
import { NewToDoComponent } from './shared/components/new-to-do/new-to-do.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        DashboardComponent,
        ToDoListComponent,
        DoneListComponent,
        IncompleteComponent,
        NewToDoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialImportModule,
        SharedModule,
        StoreModule.forRoot({}, {}),
        StoreModule.forFeature('to-dos', todosStore.reducers),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature(todosStore.effects),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        NewToDoComponent
    ]
})
export class AppModule {
}
