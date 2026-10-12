/**
 * Path of every page in the site. Single source for the router and the
 * navigation, so the two can never disagree.
 */
export const routes = {
    home: '/',
    projects: '/projects',
    contact: '/contact',
} as const;

/**
 * Union of the route names, derived from the keys of `routes`.
 */
export type RouteName = keyof typeof routes;

/**
 * Route names as a runtime array, in declaration order. The navigation
 * renders its links in this order.
 */
export const routeNames = Object.keys(routes) as RouteName[];