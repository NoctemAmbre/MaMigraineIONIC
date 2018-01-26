import { Renderer, HostBinding, Directive, HostListener, ElementRef, Input } from '@angular/core';

/**
 * Generated class for the MigraineHistoriqueDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[Questionnaire-Facteur]' // Attribute selector
})
export class MigraineHistoriqueDirective {

  constructor(
    private el: ElementRef,
    private renderer:Renderer) {
    
    //el.nativeElement.style.backgroundColor = 'yellow';

    // console.log('Directive : ', el.nativeElement);
    // this.Color = 'danger';
    
    
    // let puchlineEl = this.el.nativeElement.querySelector('button.historiqueComplet');
    // let puchlineEl1 = this.el.nativeElement.querySelector('.DateDebut');
    // console.log('puchlineE : ', puchlineEl);
    // console.log('puchlineEl : ', puchlineEl1);
    //this.renderer.setElementStyle(puchlineEl, 'border-color', 'danger');

    //window.alert('coucou je suis la directive');
    //var child = this.renderer.invokeElementMethod(this.el.nativeElement, 'querySelector', ['div']);
    console.log(this.el.nativeElement.value);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    //this.el.nativeElement.DateDebut.style.backgroundColor = color;
  }

  @Input('migraine-historique') highlightColor: string;
  @Input() defaultColor: string;
   
  //@HostBinding('style.color') Color : string;

  // @HostListener('mouseover') onMouseOver(){
  //   window.alert('et hop');
  //   let puchlineEl = this.el.nativeElement.querySelector('.historiqueComplet');
  //   this.renderer.setElementStyle(puchlineEl, 'backgroudColor', 'danger');
  // }

  //@HostListener('target:EVENT', [args]) 

  // @HostListener('document:click', ['$event']) elemClicked(elm){
  //   console.log('click', elm);
  //   this.Color = 'danger';
    //elm.target.setElementStyle('color', 'danger');
  //}
}
