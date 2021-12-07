import { Pages } from './pages';
import { Components } from './components';
import { E2ESelectors } from '../types';
/**
 * Exposes selectors in package for easy use in e2e tests and in production code
 *
 * @alpha
 */
export declare const selectors: {
    pages: E2ESelectors<typeof Pages>;
    components: E2ESelectors<typeof Components>;
};
/**
 * Exposes Pages, Component selectors and E2ESelectors type in package for easy use in e2e tests and in production code
 *
 * @alpha
 */
export { Pages, Components, E2ESelectors };
