import {updateRecord} from 'lightning/uiRecordApi';
import {LightningElement, api} from 'lwc';

export default class Todo extends LightningElement {
    @api
    todo;

    get status() {
        return this.todo.IsComplete__c ? 'Complete' : 'Incomplete';
    }

    get statusClass() {
        return this.todo.IsComplete__c ? 'slds-text-color_success' : 'slds-text-color_error';
    }

    get showMarkCompleteButton() {
        return !this.todo.IsComplete__c;
    }

    async handleMarkComplete() {
        await updateRecord({fields: {...this.todo, IsComplete__c: true}});
        this.dispatchEvent(new CustomEvent('markcomplete'));
    }
}
