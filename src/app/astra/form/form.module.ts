import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { SharedModule } from '../shared/shared.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FloatLabelComponent } from './float-label/float-label.component';
import { FormRoutingModule } from './form-routing.module';
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

@NgModule({
  declarations: [
    AutoCompleteComponent,
    CalendarComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorPickerComponent,
    DropdownComponent,
    InputGroupComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    FloatLabelComponent,
    KeyFilterComponent,
    ListboxComponent,
    MultiSelectComponent,
    PasswordComponent,
    RadioButtonComponent,
    RatingComponent,
    SelectButtonComponent,
    SliderComponent,
    ToggleButtonComponent,
    TriStateCheckboxComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    PanelModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    CalendarModule,
    RadioButtonModule,
    InputSwitchModule,
    SelectButtonModule,
    DropdownModule,
    AutoCompleteModule,
    ChipsModule,
    ColorPickerModule,
    InputMaskModule,
    InputTextareaModule,
    InputNumberModule,
    MultiSelectModule,
    KeyFilterModule,
    ListboxModule,
    PasswordModule,
    RatingModule,
    SliderModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    SharedModule,
    MessageModule,
  ],
})
export class FormModule {}
