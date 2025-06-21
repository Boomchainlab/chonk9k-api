// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Claim extends APIResource {
  /**
   * Claim daily rewards
   */
  create(body: ClaimCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/claim', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ClaimCreateParams {
  wallet?: string;
}

export declare namespace Claim {
  export { type ClaimCreateParams as ClaimCreateParams };
}
