import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { debounce, debounceTime, map, Observable, startWith, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent   {
  searchHotel!:FormGroup;
  parentForm!:FormGroup;
  options: string[] = ['Pune', 'Satara', 'Nanded'];
  filteredOptions!: Observable<string[]>;
  // filteredOptions!: Observable<string[]>;
  
  constructor( private fb:FormBuilder, private formContainer:FormGroupDirective, private http:HttpService){}

  ngOnInit(): void {
    this.createForm();
    this.parentForm = this.formContainer.form ;
    if(this.parentForm){
      this.parentForm.addControl("searchHotel", this.searchHotel);
    }

this.filteredOptions =   this.searchHotel.controls["city"].valueChanges.pipe(
  debounceTime(1000),
      tap(el => console.log("response",el)),
      startWith(''),
      map(value => this._filter(value || '')),
    );
    
  }
  getCityNames(value:string){
      const endPoint = "listOfCities?_like"+value ; 
      this.http.getDataFromServer(endPoint).subscribe((response:any) => {
        this.filteredOptions = response;
      })
  
    }


  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
    createForm(){
      this.searchHotel=this.fb.group({
        "city":[''],
        "cheakIngDate":[''],
        "cheakOutDate":[''],
        "adults":[1],
        "childrens":[1]
      })
    }

    saveForm(){
      console.log(this.searchHotel.value);
      console.log(this.parentForm.value);
    }

    
    adultsChange(type:string){
      if(type ==  'Increment'){
        this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value + 1); 
      }
      else{
        this.searchHotel.controls['adults'].setValue(this.searchHotel.controls['adults'].value - 1);
      }
    }

    ChildrensChange(type:string){
      if(type ==  'Increment'){
        this.searchHotel.controls['childrens'].setValue(this.searchHotel.controls['childrens'].value + 1); 
      }
      else{
        this.searchHotel.controls['childrens'].setValue(this.searchHotel.controls['childrens'].value - 1);
      }
    }
   

    }
 
   
  
   
  
  

  // getCityNames(value:string){
  //   const endPoint =;
  //  return this.http.getDataFromServer(endPoint)
  // }