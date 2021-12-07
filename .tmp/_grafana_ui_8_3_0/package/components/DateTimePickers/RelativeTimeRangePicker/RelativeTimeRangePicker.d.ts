import { ReactElement } from 'react';
import { RelativeTimeRange } from '@grafana/data';
/**
 * @internal
 */
export interface RelativeTimeRangePickerProps {
    timeRange: RelativeTimeRange;
    onChange: (timeRange: RelativeTimeRange) => void;
}
/**
 * @internal
 */
export declare function RelativeTimeRangePicker(props: RelativeTimeRangePickerProps): ReactElement | null;
