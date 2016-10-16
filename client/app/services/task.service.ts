import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {
	


	constructor(private _http: Http){

		console.log('-->Servico TaskService Iniciado...');
	}

	getTasks(){
		return this._http.get('http://localhost:3000/api/tasks')
			.map(res => res.json());
	}

	addTask(newTask){
		console.log(newTask);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('http://localhost:3000/api/task', JSON.stringify(newTask), {headers: headers})
			.map(res=> res.json());
		}

	deleteTask(id){
		return this._http.delete('http://localhost:3000/api/task/'+id)
			.map(res=> res.json());
	}

	updateStatus(task){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.put('http://localhost:3000/api/task/'+task._id, JSON.stringify(task), {headers: headers})
			.map(res=> res.json());
		}
	}
	
}