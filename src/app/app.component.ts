
import { Component,ViewChild} from '@angular/core';
import { OnInit} from '@angular/core';
import{HttpClientModule, HttpClient} from '@angular/common/http'
import { map, filter, switchMap} from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title="Welcome to my SimpleApplication";
 
 }