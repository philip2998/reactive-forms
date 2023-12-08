import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZapierService {
  constructor(private http: HttpClient) {}

  public submitUserContactForm(webhookUrl: string, formData: any): void {
    this.http.post(webhookUrl, formData).subscribe(
      (response) => {
        console.log('Form data sent to Zapier successfully', response);
      },
      (error) => {
        console.error('Error sending form data to Zapier', error);
      }
    );
  }
}
