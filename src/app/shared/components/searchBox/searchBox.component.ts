import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {

  @ViewChild("txtInput")
  public search!: ElementRef<HTMLInputElement>;

  @Output()
  public onValueEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  onValue(): void {
    console.log(this.search.nativeElement.value)
    this.onValueEvent.emit(this.search.nativeElement.value);
  }
}
