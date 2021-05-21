export class Story {  
    storyId : number;
    receiverEmployee: string;
    senderEmployee: string;
    storyText: string;
    storyCreatedDateTime: Date;  
    }
  
    export class APIResult<T> {
      code: number;
      msg: string;
      result: T;
    }