import { Injectable } from '@angular/core';

declare const $: any;
@Injectable()
export class NotificationService {

  constructor() { }

  public showNotification(from, align, info, color = 'danger') {
    $.notify({
      icon: '<div class="container"><div class="row">notification</div></div>',
      title: 'Error: ',
      message: info

    }, {
        type: color,
        timer: 4000,
        placement: {
          from: from,
          align: align
        }
      });
  }

}
