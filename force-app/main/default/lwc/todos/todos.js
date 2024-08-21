import {wire, LightningElement} from 'lwc';
import getTodos from '@salesforce/apex/TodoService.getTodos';

export default class Todos extends LightningElement {
    @wire(getTodos)
    todosResult;

    get todos() {
        return this.todosResult.data;
    }

    get countIncompleteTodos() {
        return this.todos?.filter(todo => !todo.IsComplete__c).length;
    }
}

