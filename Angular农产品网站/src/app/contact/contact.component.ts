import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // 这里可以添加表单提交逻辑
    console.log('表单已提交:', this.contactForm);
    alert('感谢您的留言，我们会尽快回复您！');
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}