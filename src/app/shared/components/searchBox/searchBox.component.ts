import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, viewChildren } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.onDeboce?.unsubscribe();
  }
  ngOnInit(): void {
    this.onDeboce
      .pipe(debounceTime(300))
      .subscribe(
        res => {
          console.log(res);

          this.onValueEvent.emit(res);
        }
      )
  }

  private onDeboce: Subject<string> = new Subject<string>();

  @ViewChild("txtInput")
  public search!: ElementRef<HTMLInputElement>;

  @Output()
  public onValueEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  onValue(term: string): void {

    this.onDeboce.next(term);
  }
}
