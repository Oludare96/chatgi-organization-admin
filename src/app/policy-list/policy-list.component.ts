import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
  constructor(public ordersService: PolicyService) { }

  ngOnInit() { }

  isLinear = false;
  ztsForm = [];
  addztsForm = form => this.ztsForm.push(form);

  onSubmit() {
    this.ordersService.form.value.ztsForm = this.ztsForm;
    let data = this.ordersService.form.value;

    this.ordersService.createZtsForms(data).then(res => {
      console.log("success")
    });
  }
}
