import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';

import { PactWrapper } from '../utils/pact-wrapper';
import { CountryService } from './country.service';
import { addInteractionGetUser } from './country.service.pact.interactions';
import { country1 } from './country-data';

describe('CountryServicePact', () => {
  let pact: PactWrapper;
  let service: CountryService;

  beforeAll((done) => {
    pact = new PactWrapper('country-service');

    done();
  });

  beforeEach((done) => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });

    service = TestBed.inject(CountryService);
    service.setUrlPrefix(pact.getMockServerUrl());

    done();
  });

  describe('get()', () => {
    beforeAll((done) => {
      addInteractionGetUser(pact.getProvider());

      done();
    })

    it('should get a Country', () => {
      return pact.getProvider().executeTest(async (mockServer) => {
        return new Promise<void>((resolve, reject) => {
          service.get(country1.id).subscribe({
            next: (response) => {
              expect(response).toEqual(country1);

              resolve();
            },
            error: (error: HttpErrorResponse) => {
              reject(error);
            }
          });
        });
      });
    });
  });
});
