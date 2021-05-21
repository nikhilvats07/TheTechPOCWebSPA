import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Story,APIResult } from '../models/story';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }
  

  getAllStories() {
    return this.http.get<APIResult<Story[]>>(`${environment.apiUrl}/Story`);
  } 

  saveNewStory(objStory: Story){
    console.log(JSON.stringify(objStory));
    return this.http.post<void>(`${environment.apiUrl}/Story`, JSON.stringify(objStory));
  }
  updateIncident(objStory: Story){
    return this.http.put<Story[]>(`${environment.apiUrl}/Story`, JSON.stringify(objStory));
  }

  getIncident(storyID: number){
    return this.http.get<APIResult<Story>>(`${environment.apiUrl}/Story/${storyID}`);
  }  

  

 
}

