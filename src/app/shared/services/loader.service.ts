import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private reqCount = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() {}

  show() {
    this.reqCount++;
    if (this.reqCount == 1) {
      this.isLoadingSubject.next(true);
    }
  }

  hide() {
    if (this.reqCount > 0) {
      this.reqCount--;
    }

    if (this.reqCount == 0) {
      this.isLoadingSubject.next(false);
    }
  }
}
