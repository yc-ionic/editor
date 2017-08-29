import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editor } from './service';

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EditorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: EditorModule,
      providers: [Editor]
    };
  }
}
