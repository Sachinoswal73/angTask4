import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : '[chartDir]'
})

export class ChartDirective implements OnInit, OnChanges {

    @Input() value1 : any;

    @HostBinding('style.color') clr = 'green';

    @HostBinding('style.background-image') bim = `conic-gradient(
        pink 180deg, 
        lightblue 0 
        )`;

    // @HostListener('click') clk() {
    //         this.bim = `conic-gradient(
    //             pink 120deg, 
    //             lightblue 0 
    //             )`;
    // }

    constructor( private elRef : ElementRef, private rendr : Renderer2 ){

    }

    ngOnInit(): void {
     
        // this.fz = '40px';
        
        // this.clr = this.value1;

            this.bim = this.value1;

    }

    ngOnChanges(){
        this.bim = this.value1;
    }

}