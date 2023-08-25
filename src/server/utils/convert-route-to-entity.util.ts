const mapping: Record<string, string> = {
  businesses: 'business',
  contents: 'content',
  follows: 'follow',
  invites: 'invite',
  shares: 'share',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
