import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MpSharedModule } from '../shared';

import { ANNUAIRE_ROUTE, AnnuaireComponent } from './';

@NgModule({
    imports: [
      MpSharedModule,
      RouterModule.forRoot([ ANNUAIRE_ROUTE ], { useHash: true })
    ],
    declarations: [
      AnnuaireComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MpAppAnnuaireModule {}
