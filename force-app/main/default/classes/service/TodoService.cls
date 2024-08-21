public with sharing class TodoService {
    @AuraEnabled(cacheable=true)
    public static List<Todo__c> getTodos() {
        return [SELECT Id, Name, DueDate__c, IsComplete__c FROM Todo__c];
    }
}

