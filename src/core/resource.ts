// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Chonk9kAPI } from '../client';

export abstract class APIResource {
  protected _client: Chonk9kAPI;

  constructor(client: Chonk9kAPI) {
    this._client = client;
  }
}
