import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeneralService } from '../../Services/general.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit, OnDestroy {
  private langChangesSubscription: Subscription;
  public lang: string = this.service.lng;
  public sliderText: any = {};

  constructor(public service: GeneralService) { }

  ngOnInit() {
    this.getData();
    this.langChangesSubscription = this.service.langChange.subscribe((a)=> {
      this.lang = a;
      this.getData();
    });
  }

  public sliders: any = [];
  getData(){
    this.service.getSlider1().subscribe(data => {
      this.sliders = data;
    });

    this.service.getAllTextData().subscribe(data => {
      this.textData = data;
      this.sliderText = this.textData.home.slider[this.lang];
    });
  }
  public textData: any = {
    home: {
      slider: {}
    }
  };

  ngOnDestroy() {
    this.langChangesSubscription.unsubscribe();
  }

}
