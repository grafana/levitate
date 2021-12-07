import { QueryRunner } from '@grafana/data';
/**
 * @internal
 */
export declare type QueryRunnerFactory = () => QueryRunner;
/**
 * Used to bootstrap the {@link createQueryRunner} during application start.
 *
 * @internal
 */
export declare const setQueryRunnerFactory: (instance: QueryRunnerFactory) => void;
/**
 * Used to create QueryRunner instances from outside the core Grafana application.
 * This is helpful to be able to create a QueryRunner to execute queries in e.g. an app plugin.
 *
 * @internal
 */
export declare const createQueryRunner: () => QueryRunner;
