import{Component} from '@angular/core';
//import{BrowserModule} from '@angular/platform-browser';

@Component({
     selector: 'hello-angular',
     template: '<h1> {{greeting}} </h1>'
})

class HelloWorldComponent{
    greeting: string;

    constructor(){
        this.greeting = 'Hello Angular 4';
    }
}
