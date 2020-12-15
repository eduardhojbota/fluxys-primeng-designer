import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { KeyFilterComponent } from './key-filter/key-filter.component';
import { ListboxComponent } from './listbox/listbox.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PasswordComponent } from './password/password.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RatingComponent } from './rating/rating.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SliderComponent } from './slider/slider.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TriStateCheckboxComponent } from './tri-state-checkbox/tri-state-checkbox.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'colorpicker', component: ColorPickerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'inputgroup', component: InputGroupComponent },
  { path: 'inputmask', component: InputMaskComponent },
  { path: 'inputswitch', component: InputSwitchComponent },
  { path: 'inputtext', component: InputTextComponent },
  { path: 'inputtextarea', component: InputTextareaComponent },
  { path: 'inputnumber', component: InputNumberComponent },
  { path: 'floatlabel', component: FloatLabelComponent },
  { path: 'keyfilter', component: KeyFilterComponent },
  { path: 'listbox', component: ListboxComponent },
  { path: 'multiselect', component: MultiSelectComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'radiobutton', component: RadioButtonComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'selectbutton', component: SelectButtonComponent },
  { path: 'togglebutton', component: ToggleButtonComponent },
  { path: 'tristatecheckbox', component: TriStateCheckboxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
