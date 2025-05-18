import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  teamMembers = [
    {
      name: '张明',
      position: '创始人兼农场经理',
      bio: '20年农业经验，有机种植专家',
      image: 'assets/images/team/zhangming.jpg'
    },
    {
      name: '李华',
      position: '种植主管',
      bio: '负责蔬菜种植管理，10年经验',
      image: 'assets/images/team/lihua.jpg'
    },
    {
      name: '王芳',
      position: '市场总监',
      bio: '负责产品营销和客户关系',
      image: 'assets/images/team/wangfang.jpg'
    },
    {
      name: '刘强',
      position: '技术顾问',
      bio: '农业技术专家，负责种植技术指导',
      image: 'assets/images/team/liuqiang.jpg'
    }
  ];
}