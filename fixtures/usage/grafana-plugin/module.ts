import { PanelPlugin, FieldColorModeId } from '@grafana/data';
import { LegendDisplayMode, GraphGradientMode } from '@grafana/schema';
import { SimpleOptions } from './types';
import { SimplePanel } from './panel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel)
  .useFieldConfig({
    standardOptions: {
      color: {
        defaultValue: {
          mode: FieldColorModeId.ContinuousGrYlRd,
        },
      },
    },
    useCustomConfig: (builder) => {
      builder
        .addRadio({
          path: 'gradientMode',
          name: 'Gradient mode',
          defaultValue: GraphGradientMode.Scheme,
          settings: {
            options: [
              {
                label: 'None',
                value: GraphGradientMode.None,
              },
              {
                label: 'Opacity',
                value: GraphGradientMode.Opacity,
                description: 'Enable fill opacity gradient',
              },
              {
                label: 'Hue',
                value: GraphGradientMode.Hue,
                description: 'Small color hue gradient',
              },
              {
                label: 'Scheme',
                value: GraphGradientMode.Scheme,
                description: 'Use color scheme to define gradient',
              },
            ],
          },
        })
        .addSliderInput({
          path: 'fillOpacity',
          name: 'Fill opacity',
          defaultValue: 25,
          settings: {
            min: 0,
            max: 100,
            step: 1,
          },
        });
    },
  })
  .setPanelOptions((builder) => {
    return builder
      .addRadio({
        path: 'legend.displayMode',
        name: 'Legend mode',
        category: ['Legend'],
        description: '',
        defaultValue: LegendDisplayMode.List,
        settings: {
          options: [
            {
              value: LegendDisplayMode.List,
              label: 'List',
            },
            {
              value: LegendDisplayMode.Table,
              label: 'Table',
            },
            {
              value: undefined,
              label: 'Hidden',
            },
          ],
        },
      })
      .addRadio({
        path: 'legend.placement',
        name: 'Legend placement',
        category: ['Legend'],
        description: '',
        defaultValue: 'bottom',
        settings: {
          options: [
            {
              value: 'bottom',
              label: 'Bottom',
            },
            {
              value: 'right',
              label: 'Right',
            },
          ],
        },
        showIf: (config) => !!config.legend.displayMode,
      });
  });
