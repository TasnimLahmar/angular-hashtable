import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MenubarTemplateDemo} from "./Presentation/view/menuBar/app.menubar.component";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
    declarations: [
        AppComponent,
        MenubarTemplateDemo,
    ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    KeyFilterModule,
    PaginatorModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
