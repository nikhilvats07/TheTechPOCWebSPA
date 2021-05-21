import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Story } from '../../models/story';
import { StoryService } from '../../services/story.service';
import { first } from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstory',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  private cookieValue : string;
  storyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private storyService: StoryService,
    private cookieService: CookieService,private router: Router  ) { }

  ngOnInit(): void {

    this.storyForm = this.formBuilder.group({
      recieverName:['', Validators.required],
      senderName:['', Validators.required],
      storyText:['', Validators.required]
     
    });  

    this.cookieValue=this.cookieService.get('auth-cookie');



    // if(!(typeof this.cookieValue!='undefined' && this.cookieValue)){
    //    this.router.navigate(['access-denied']);
    //    console.log('auth cookie is missed');
    //  }
  }

   // convenience getter for easy access to form fields
   get f() { return this.storyForm.controls; }

   submitStory()
   {  
    
      this.insertStory();
    
   }

   insertStory(){
    var storyObj = new Story();
    storyObj.storyId = 0;
    storyObj.receiverEmployee = this.f.recieverName.value;
    storyObj.senderEmployee = this.f.senderName.value;
    storyObj.storyText = this.f.storyText.value;
    storyObj.storyCreatedDateTime  = new Date();
   
    
    this.storyService.saveNewStory(storyObj).pipe(first()).subscribe(incObject => {   
      this.storyForm.reset();
      console.log('insert story'); 
      });
  }

}
