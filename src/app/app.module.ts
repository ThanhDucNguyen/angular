import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ListMemberComponent, DialogOverviewExampleDialog } from './pages/list-member/list-member.component';
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
// import {DialogUpdate} from './template/dialog/dialog-update.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxTimelineModule } from 'ngx-timeline';
import { OktaAuthModule } from '@okta/okta-angular';
import { UpdateMemberComponent } from './pages/update-member/update-member.component';
import { TestSelectboxComponent } from './pages/test-selectbox/test-selectbox.component';
// import { TestFormValidationComponent } from './pages/test-form-validation/test-form-validation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListMemberComponent,
    DialogDetail,
    DialogOverview,
    AddMemberComponent,
    UpdateMemberComponent,
    TestSelectboxComponent,
    // TestFormValidationComponent
    DialogOverviewExampleDialog
  ],
  entryComponents: [
    ListMemberComponent,
    // DialogUpdate,
    DialogDetail,
    DialogOverview,
    DialogOverviewExampleDialog
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
    HttpClientModule,
    NgxTimelineModule, 
    OktaAuthModule.initAuth({
      issuer: 'https://bit.ly/finding-okta-domain',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '{yourClientId}'
    })
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
    DialogOverview,
    DialogOverviewExampleDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
