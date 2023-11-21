import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {NotebookRoutingModule} from './notebook-routing.module';
import {NotebookComponent} from './notebook.component';
import {JsonFormsModule} from "@jsonforms/angular";
import {FormComponent} from './form/form.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {JsonFormsAngularMaterialModule} from '@jsonforms/angular-material';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import { TableComponent } from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRippleModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import { TreeComponent } from './tree/tree.component';
import {MatTreeModule} from "@angular/material/tree";
import { CodeComponent } from './form/code/code.component';
import { ShareDialogComponent } from './share-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ClipboardModule } from '@angular/cdk/clipboard';
import {HistoryComponent} from "./history.component";
import { AssistantComponent } from './assistant/assistant.component';

@NgModule({
  declarations: [
    NotebookComponent,
    FormComponent,
    TableComponent,
    TreeComponent,
    ShareDialogComponent,
    HistoryComponent,
    CodeComponent,
    AssistantComponent
  ],
  imports: [
    CommonModule,
    NotebookRoutingModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTreeModule,
    ClipboardModule,
    MatCardModule,
    MatRippleModule,
    MatRadioModule,
    NgOptimizedImage
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotebookModule {
}
