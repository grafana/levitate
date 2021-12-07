import { Field } from '../types/dataFrame';
import { DisplayProcessor } from '../types/displayValue';
import { TimeZone } from '../types';
import { GrafanaTheme2 } from '../themes/types';
interface DisplayProcessorOptions {
    field: Partial<Field>;
    /**
     * Will pick browser timezone if not defined
     */
    timeZone?: TimeZone;
    /**
     * Will pick 'dark' if not defined
     */
    theme: GrafanaTheme2;
}
export declare function getDisplayProcessor(options?: DisplayProcessorOptions): DisplayProcessor;
export declare function getRawDisplayProcessor(): DisplayProcessor;
export {};
