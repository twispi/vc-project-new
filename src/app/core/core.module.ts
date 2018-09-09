import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() core: CoreModule){
    if (core) throw new Error('you must not run');
  }
}
