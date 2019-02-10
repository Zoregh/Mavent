import { Component, OnInit } from '@angular/core';
import { HttpClient }    from '@angular/common/http';


@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css']
})
export class Slider1Component implements OnInit {
  public sliders: any = [];

  constructor(private getSliders: HttpClient) { }

  ngOnInit() {
    this.getSlider1();
  }

  getSlider1(){
    this.getSliders.get('http://alikogrd.beget.tech/api/slide/ru/slides').subscribe(
      (data: any) => {
        this.sliders = data;
      },
      (error) =>{
        console.log(error);
      }
      );
  }
}
