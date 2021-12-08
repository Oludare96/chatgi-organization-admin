import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public ordersService: PolicyService) { }

  ngOnInit() { this.getZtsForms(); }

  ztsForms;
  getZtsForms = () =>
    this.ordersService
      .getZtsForms()
      .subscribe(res => (this.ztsForms = res));

  headElements = ['firstName', 'middleName', 'lastName', 'Email', 'AddressOne',
    'City', 'State', 'Country', 'ChurchLeadership', 'EnglishProficiency', 'OtherLanguage', 'PhoneNumber', 'Gender', 'EthnicDetail', 'Ethnic',
    'Occupation', 'MaritalStatus', 'SpecialAccomidations', 'SpecialAccomidationsExplain',
    'PreviousConviction', 'PreviousConvicationExplain', 'DateofBirth', 'AddressTwo', 'Denomnination', 'ChurchName', 'Churchsize', 'ChurchRole', 'CountryTwo', 'Church Location', 'AttendanceLength',
    'StatementPurpose', 'InternetAccess', 'refferencePoint', 'anyoneStudyingNow', 'yearsofbeingabeliever', 'CountryCitizenship'];
}
