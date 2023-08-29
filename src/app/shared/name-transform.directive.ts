import { Directive } from '@angular/core';

@Directive({
  selector: '[appNameTransform]',
})
export class NameTransformDirective {
  // @Input() nameObj;

  constructor() {}

  // getNameWithPrefix() {
  //   if (nameObj.gender.toLowerCase() == 'male') {
  //     return 'Mr ' + value.name;
  //   } else {
  //     return 'Mrs. ' + value.name;
  //   }
  // }
}
