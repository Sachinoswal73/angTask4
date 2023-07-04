import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'angTask4';

  cForm : any;

  onlyDeg : any;

  passValtoVal1 : any;

  // ihv : any;

  giv2 : any;

  giv1 : any;

  ngOnInit(): void {

    this.cForm = new FormGroup({
      val1 : new FormControl('',[Validators.required,Validators.min(1), Validators.max(100)]),
      val2 : new FormControl('', [Validators.min(1), Validators.max(100)])
    })

    console.log(this.cForm);

    // this.onlyDeg = 180;

    this.onlyDeg = 10 / 100 * 360;

    // `conic-gradient(
    //   pink 70deg, 
    //   lightblue 0 
    //   )`;

      this.passValtoVal1 = `conic-gradient(
        pink ` + this.onlyDeg + `deg, 
        lightblue 0 
        )`;

        // this.ihv = 'innerHtmlInOnInit';
  }


  createChart( ival1 : any ){
      // console.log(ival1);
      this.onlyDeg = Math.round(ival1 / 100 * 360);
      console.log(this.onlyDeg);
      this.passValtoVal1 = `conic-gradient(
        pink ` + this.onlyDeg + `deg, 
        lightblue 0 
        )`;
      console.log(this.passValtoVal1);
      // this.ihv = 'valChangedinaFunction';
      console.log(this.cForm);
  }


  chkVal1( liv1 : any){
      let ivsTotal = 100; 
      console.log(liv1);
      if ( liv1 < 101) {
        this.giv2 = 100 - liv1;
        console.log(this.giv2);
      }
      // this.cForm.controls.val2.value = 99;
      // console.log(this.cForm.get('val2'));
  }

  chkVal2( liv2 : any){
    let ivsTotal = 100; 
    console.log(liv2);
    if ( liv2 < 101) {
        this.giv1 = 100 - liv2;
        console.log(this.giv1);
    }

    
}


}
