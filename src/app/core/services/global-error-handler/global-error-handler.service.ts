import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public async handleError(error: Error): Promise<void> {
    try {
      console.error(error);
      const dialogService: DialogService = this.injector.get<DialogService>(DialogService);
      await dialogService.showErrorAlert({ message: 'Ein unbekannter Fehler ist aufgetreten.' });
    } catch (errorHandlerError) {
      console.error(`${LOGTAG} Internal Exception:`, errorHandlerError);
    }
  }
}
