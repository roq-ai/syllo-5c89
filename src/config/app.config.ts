interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Expert'],
  customerRoles: [],
  tenantRoles: ['Expert', 'Business Owner', 'Content Creator'],
  tenantName: 'Business',
  applicationName: 'Syllo',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
