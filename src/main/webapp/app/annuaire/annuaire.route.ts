import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { AnnuaireComponent } from './';

export const ANNUAIRE_ROUTE: Route = {
  path: 'annuaire',
  component: AnnuaireComponent,
  data: {
    authorities: [],
    pageTitle: 'annuaire.title'
  },
  canActivate: [UserRouteAccessService]
};
