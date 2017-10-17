import { NgModule } from '@angular/core';
import { DecimalPipe } from './decimal/decimal';
import { DecimalBrPipe } from './decimal-br/decimal-br';
@NgModule({
	declarations: [DecimalPipe,
    DecimalBrPipe],
	imports: [],
	exports: [DecimalPipe,
    DecimalBrPipe]
})
export class PipesModule {}
