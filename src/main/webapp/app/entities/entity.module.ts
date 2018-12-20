import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MpRegionModule } from './region/region.module';
import { MpCountryModule } from './country/country.module';
import { MpLocationModule } from './location/location.module';
import { MpDepartmentModule } from './department/department.module';
import { MpTaskModule } from './task/task.module';
import { MpEmployeeModule } from './employee/employee.module';
import { MpJobModule } from './job/job.module';
import { MpJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MpRegionModule,
        MpCountryModule,
        MpLocationModule,
        MpDepartmentModule,
        MpTaskModule,
        MpEmployeeModule,
        MpJobModule,
        MpJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MpEntityModule {}
