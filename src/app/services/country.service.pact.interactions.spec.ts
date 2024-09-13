import { MatchersV3, PactV3 } from '@pact-foundation/pact';

import { PATH } from './country.service';
import { country1 } from './country-data';

export const addInteractionGetUser = function(provider: PactV3) {
  const path = `${PATH}/${country1.id}`;
  const expectedBody = MatchersV3.like(country1);

  provider.given('Fetch user')
    .uponReceiving('A request to GET a user')
    .withRequest({
      method: 'GET',
      path: path,
      headers: { Accept: 'application/json' }
    })
    .willRespondWith({
      status: 200,
      body: expectedBody,
      headers: { 'Content-Type': 'application/json' }
    })
}
