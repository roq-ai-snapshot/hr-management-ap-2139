import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  job_id: string;
  start_date: any;
  end_date?: any;
  salary: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_id?: string;
}
