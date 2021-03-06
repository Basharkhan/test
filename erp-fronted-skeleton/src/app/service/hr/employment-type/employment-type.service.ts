import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from '../../api.service';
import {Observable} from 'rxjs';
import {EmploymentType} from '../../../model/employee-information/employment-type.model';

@Injectable({
    providedIn: 'root'
})
export class EmploymentTypeService {

    // API Configuration Start
    private _protocol = 'http';	// http or https
    private _host = 'localhost';	// localhost or IP or Domain
    private _port = '8082';		// Port 8080 or 8090 or etc
    private _service_name = 'employment_type';		// Service Name like auth or hr or student
    private _api_path = 'api';		// Path of the API

    private _version_path = 'v';
    private _version_major = 0;
    private _version_minor = 0;
    private _version_patch = 1;

    // private _auth_api_url = this._protocol + '://' + this._host + ':' + this._port + '/' + this._service_name + '/' +
    // this._api_path + '/' + this._version_path + '/' + this._version_major + '.' + this._version_minor + '.' + this._version_patch;
    private _auth_api_proxy_config = '/' + this._service_name;
    private _auth_api_url = this._auth_api_proxy_config + '/' + this._api_path + '/' + this._version_path + '/' +
        this._version_major + '.' + this._version_minor + '.' + this._version_patch;

    public _employmentType_list = this._auth_api_url + '/list';
    public _employmentType_details = this._auth_api_url + '/view';
    public _create_employment_type = this._auth_api_url + '/create';
    public _update_employment_type = this._auth_api_url + '/update';
    public _delete_employment_type = this._auth_api_url + '/delete';

    // API Configuration END


    private _httpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Expose-Headers': '*'
    });


    constructor(
        private _apiService: ApiService
    ) {
    }

    getEmploymentType(pageNumber: number = 0, pageSize: number = 10, sort: string = 'name:asc'): Observable<any> {
        return this._apiService.get(this._employmentType_list + '?pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&sort=' + sort, this._httpHeaders);
    }

    getEmploymentTypeDetails(id: string): Observable<any> {
        return this._apiService.get(this._employmentType_details + '/' + id, this._httpHeaders);
    }

    createEmploymentType(employmentType: EmploymentType): Observable<any> {
        return this._apiService.post(this._create_employment_type, employmentType, this._httpHeaders);
    }

    updateEmploymentType(employmentType: EmploymentType): Observable<any> {
        return this._apiService.put(this._update_employment_type + '/' + employmentType.id, employmentType, this._httpHeaders);
    }
}
