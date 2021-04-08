// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {get} from '@loopback/openapi-v3';
import {Geocoder, GeocoderProvider} from '../services/geocoder.service';

export class GeocoderController {
  constructor(
    // @inject('services.Geocoder')
    // private geocoderService: Geocoder

    @service(GeocoderProvider)
    private geocoderService: Geocoder

  ) { }

  @get('/province')
  province() {
    return this.geocoderService.getProvince();
  }

  @get('/district')
  districe() {
    return this.geocoderService.getDistrict();
  }

  @get('/subdistrict')
  subdistrict() {
    return this.geocoderService.getSubDistrict();
  }
}
