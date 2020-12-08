import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EditorService {

    constructor(private http: HttpClient) {}

    getEditor(theme: string): Promise<any[]> {
		return this.http.get<any>('assets/editor/' + theme + '.json')
            .toPromise()
            .then(res => res.editor as any[])
            .then(data => data);
    }

}
