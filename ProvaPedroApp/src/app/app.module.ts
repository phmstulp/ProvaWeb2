import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatRadioModule, MatButtonModule, 
  MatTableModule, MatIconModule, MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule, MatDialogModule } from '@angular/material';
  import { DialogComponent } from './shared//dialog/dialog.component';
  import { DatePipe } from '@angular/common';
  import { VacinaComponent } from './cadastros/vacina/vacina.component';
import { VacinaListComponent } from './cadastros/vacina/vacina-list/vacina-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    VacinaComponent,
    VacinaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule, //Daqui pra baixo são componentes do material
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule, //Adicionei aqui (icone) //from '@angular/common/http';
    MatPaginatorModule, 
    MatSortModule,
    MatExpansionModule, 
    MatSelectModule, 
    MatDialogModule, 
    //NgxSpinnerModule
  ],
  providers: [HttpClient, DatePipe],
  //Geralmente usa Dialog, Spinner e Message
  entryComponents: [
    DialogComponent
  ],  

  bootstrap: [AppComponent]
})
export class AppModule { }
