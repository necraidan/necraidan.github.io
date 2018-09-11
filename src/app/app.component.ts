import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor() {}

    ngOnInit(): void {
        const myWorker = new Worker('../assets/worker.js');

        myWorker.postMessage([3, 4]); // Sending message as an array to the worker
        console.log('Message posted to worker');

        myWorker.onmessage = function(e) {
            console.log('Message received from worker');
            console.log(e);
        };
    }
}
