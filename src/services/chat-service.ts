import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import {Chat} from '../shared/chat.model';
import {UserService} from './user-service';
import {Message} from '../shared/message.model';
import { UtilService} from '../services/util-service';
import firebase from 'firebase';


@Injectable()
export class ChatService {
  constructor(
    public db: AngularFireDatabase, 
    public us: UserService,
    private utilService: UtilService) {
  }
  // get a specific chat from the list - get chat reference
  getChat(uid: string, id: string): FirebaseObjectObservable<any> {
    let chatRef = this.db.object(`/chats/${uid},${id}`);
    return chatRef;
  }
  getMessages(uid: string, id: string): FirebaseListObservable<any> {
    let messagesRef = this.db.list(`/chats/${uid},${id}/messages`);
    return messagesRef;
  }  // mapping to the chat data used in-app
  toChat(userId, otherId, messages): Chat{
    // unique id based on the ids of two users
    let combinedId = [userId, otherId]
    let chat = {
      id: combinedId,
      messages: messages
    }
    return chat;
  }
  // create a chat - add chat references to both users
  addMessage(uid: string, otherId: string, message: Message): void {
    //push it to the chats list
    let chatsRef = this.db.list(`/chats/${uid},${otherId}/messages`);
    if (message.picture === null){
      chatsRef.push(message);
    } else {
      //assuming we have a picture so we'll need to store it in firebase 
      //storage and save the URL as a picture property
      //generate a unique name for storing in firebase storage
      let uidName = this.utilService.guid();
      firebase.storage().ref(`/chats/${uid},${otherId}/messages`)
      .child(`${uidName}.png`)
      .putString(message.picture, 'base64', {contentType: 'image/png'})
      .then((savedPicture) => {
        message.picture = savedPicture.downloadURL;
        chatsRef.push(message);
      });
    }
  }
  // remove a chat from the list
  removeMessage(userId, otherId: string, messageId: string): void {
    //chats list 
    this.db.list(`/chats/${userId},${otherId}/messages`).remove(messageId);
  }
}