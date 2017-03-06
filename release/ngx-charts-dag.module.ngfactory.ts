/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../build/ngx-charts-dag.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@swimlane/ngx-charts/release/common/axes/axes.module';
import * as import4 from '@swimlane/ngx-charts/release/common/tooltip/tooltip.module';
import * as import5 from '@swimlane/ngx-charts/release/common/chart-common.module';
import * as import6 from '../../build/directed-graph/directed-graph.module';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@swimlane/ngx-charts/release/common/tooltip/injection.service';
import * as import9 from '@swimlane/ngx-charts/release/common/tooltip/tooltip.service';
import * as import10 from '@angular/common/src/location/path_location_strategy';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '@angular/core/src/di/injector';
import * as import13 from '../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory';
import * as import14 from '@angular/core/src/i18n/tokens';
import * as import15 from '@angular/core/src/application_ref';
import * as import16 from '@angular/common/src/location/platform_location';
import * as import17 from '@angular/common/src/location/location_strategy';
class NgxChartsDagModuleInjector extends import0.NgModuleInjector<import1.NgxChartsDagModule> {
  _CommonModule_0:import2.CommonModule;
  _AxesModule_1:import3.AxesModule;
  _TooltipModule_2:import4.TooltipModule;
  _ChartCommonModule_3:import5.ChartCommonModule;
  _DirectedGraphModule_4:import6.DirectedGraphModule;
  _NgxChartsDagModule_5:import1.NgxChartsDagModule;
  __NgLocalization_6:import7.NgLocaleLocalization;
  __InjectionService_7:import8.InjectionService;
  __TooltipService_8:import9.TooltipService;
  __LocationStrategy_9:import10.PathLocationStrategy;
  __Location_10:import11.Location;
  constructor(parent:import12.Injector) {
    super(parent,[import13.TooltipContentComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_6():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_6 == null)) { (this.__NgLocalization_6 = new import7.NgLocaleLocalization(this.parent.get(import14.LOCALE_ID))); }
    return this.__NgLocalization_6;
  }
  get _InjectionService_7():import8.InjectionService {
    if ((this.__InjectionService_7 == null)) { (this.__InjectionService_7 = new import8.InjectionService(this.parent.get(import15.ApplicationRef),this,this)); }
    return this.__InjectionService_7;
  }
  get _TooltipService_8():import9.TooltipService {
    if ((this.__TooltipService_8 == null)) { (this.__TooltipService_8 = new import9.TooltipService(this._InjectionService_7)); }
    return this.__TooltipService_8;
  }
  get _LocationStrategy_9():import10.PathLocationStrategy {
    if ((this.__LocationStrategy_9 == null)) { (this.__LocationStrategy_9 = new import10.PathLocationStrategy(this.parent.get(import16.PlatformLocation),this.parent.get(import17.APP_BASE_HREF,(null as any)))); }
    return this.__LocationStrategy_9;
  }
  get _Location_10():import11.Location {
    if ((this.__Location_10 == null)) { (this.__Location_10 = new import11.Location(this._LocationStrategy_9)); }
    return this.__Location_10;
  }
  createInternal():import1.NgxChartsDagModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._AxesModule_1 = new import3.AxesModule();
    this._TooltipModule_2 = new import4.TooltipModule();
    this._ChartCommonModule_3 = new import5.ChartCommonModule();
    this._DirectedGraphModule_4 = new import6.DirectedGraphModule();
    this._NgxChartsDagModule_5 = new import1.NgxChartsDagModule();
    return this._NgxChartsDagModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.AxesModule)) { return this._AxesModule_1; }
    if ((token === import4.TooltipModule)) { return this._TooltipModule_2; }
    if ((token === import5.ChartCommonModule)) { return this._ChartCommonModule_3; }
    if ((token === import6.DirectedGraphModule)) { return this._DirectedGraphModule_4; }
    if ((token === import1.NgxChartsDagModule)) { return this._NgxChartsDagModule_5; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_6; }
    if ((token === import8.InjectionService)) { return this._InjectionService_7; }
    if ((token === import9.TooltipService)) { return this._TooltipService_8; }
    if ((token === import17.LocationStrategy)) { return this._LocationStrategy_9; }
    if ((token === import11.Location)) { return this._Location_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const NgxChartsDagModuleNgFactory:import0.NgModuleFactory<import1.NgxChartsDagModule> = new import0.NgModuleFactory(NgxChartsDagModuleInjector,import1.NgxChartsDagModule);