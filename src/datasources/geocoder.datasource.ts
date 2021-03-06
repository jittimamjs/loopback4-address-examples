import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'geocoder',
  connector: 'rest',
  baseURL: '',
  crud: false,
  operations: [
    {
      template: {
        method: 'GET',
        url:
          '<URL>', // Add your public rest api url in here.
      },
      functions: {
        getProvince: []
      }
    },
    {
      template: {
        method: 'GET',
        url:
          '<URL>', // Add your public rest api url in here.
      },
      functions: {
        getDistrict: []
      }
    },
    {
      template: {
        method: 'GET',
        url:
          '<URL>', // Add your public rest api url in here.
      },
      functions: {
        getSubDistrict: []
      }
    }
  ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class GeocoderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'geocoder';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.geocoder', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
