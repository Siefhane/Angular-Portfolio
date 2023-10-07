import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  foucs:Array<any> =[
    {
      name:'UI/UX Design'
    },
    {
      name:'Web Design'
    },
    {
      name:'Responsive Design'
    },
    

  ]
 skills: Array<any> =[
  {
    name: 'HTML',
    value:'88%',
    bool:true
  },
  {
    name: 'CSS',
    value:'85%'
  },
  {
    name: 'PHP',
    value:'74%'
  },
  {
    name: 'Laravel',
    value:'75%'
  },
  {
    name: 'Node.js',
    value:'65%'
  },
  {
    name: 'Javascript',
    value:'82%'
  },
  {
    name: 'Figma',
    value:'55%'
  }
  ,{
    name: 'Angular',
    value:'81%'
  },
  {
    name: 'SQL',
    value:'84%'
  }
 ]
}
