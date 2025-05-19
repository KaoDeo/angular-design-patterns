import { inject, Injectable } from '@angular/core';
import { MessageStrategy } from '../types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackbarMessageStrategy implements MessageStrategy {
  private _snackBar = inject(MatSnackBar);

  send(message: string): void {
    this.openSnackBar(message);
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }
}
