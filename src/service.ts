import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Injectable()
export class Editor {

  constructor() { }

  edit(target: Target): Promise<Target> {
    return new Promise((resolve, reject) => {
      target.navCtrl.push(target.type, { target: target });
      target.done = resolve;
      target.error = reject;
    });
  }
}

export interface Target {
  title: string;
  navColor?: string;
  doneText?: string;
  navCtrl: NavController;
  type: string;
  
  done?(target: Target);
  error?(e: any);
}
