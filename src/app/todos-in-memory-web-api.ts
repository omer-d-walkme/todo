import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodosInMemoryWebApi implements InMemoryDbService {
    createDb(): {} {
        let todos = [
            {id: 1, text: 'take out the trash'},
            {id: 2, text: 'write some code'},
            {id: 3, text: 'learn component based architecture'}
        ];

        return {todos};
    }
}