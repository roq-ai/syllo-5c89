import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  inviter_id: string;
  invitee_id: string;
  role: string;
  created_at?: any;
  updated_at?: any;

  user_invite_inviter_idTouser?: UserInterface;
  user_invite_invitee_idTouser?: UserInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  inviter_id?: string;
  invitee_id?: string;
  role?: string;
}
