import { LinkModel } from '@grafana/data';
import { MenuItemProps } from '../components/Menu/MenuItem';
/**
 * Delays creating links until we need to open the ContextMenu
 */
export declare const linkModelToContextMenuItems: (links: () => LinkModel[]) => MenuItemProps[];
