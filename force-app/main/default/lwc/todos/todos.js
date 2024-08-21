import {LightningElement} from 'lwc';

export default class Todos extends LightningElement {
    todos = [
        {Name: 'Do the dishes', DueDate__c: '2024-09-17', IsComplete__c: false},
        {Name: 'Walk the dog', DueDate__c: '2024-08-23', IsComplete__c: false}
    ];
}

