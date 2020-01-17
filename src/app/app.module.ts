import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ListMemberComponent } from './pages/list-member/list-member.component';
import { TemplateComponent } from './pages/template/template.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DialogOverview} from './template/dialog/dialog.component';
import {DialogDetail} from './template/dialog/dialog-detail.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {AddMemberComponent} from './pages/add-member/add-member.component';
import {DialogUpdate} from './template/dialog/dialog-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListMemberComponent,
    TemplateComponent,
    DialogUpdate,
    DialogDetail,
    DialogOverview,
    AddMemberComponent
  ],
  entryComponents: [
    ListMemberComponent,
    DialogUpdate,
    DialogDetail,
    DialogOverview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule, 
    ListMemberComponent,
    DialogDetail,
    DialogOverview
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
