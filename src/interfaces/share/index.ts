import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ShareInterface {
  id?: string;
  sharer_id: string;
  shared_id: string;
  created_at?: any;
  updated_at?: any;

  user_share_sharer_idTouser?: UserInterface;
  user_share_shared_idTouser?: UserInterface;
  _count?: {};
}

export interface ShareGetQueryInterface extends GetQueryInterface {
  id?: string;
  sharer_id?: string;
  shared_id?: string;
}
