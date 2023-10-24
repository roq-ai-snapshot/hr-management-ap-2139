import { ApplicantInterface } from 'interfaces/applicant';
import { EmployeeInterface } from 'interfaces/employee';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  salary: number;
  location: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  employee?: EmployeeInterface[];
  company?: CompanyInterface;
  _count?: {
    applicant?: number;
    employee?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  company_id?: string;
}
