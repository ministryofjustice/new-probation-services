import fs from 'fs';
import path from 'path';

import React from 'react';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import OffenderSummary from './OffenderSummary';

const mockData = fs.readFileSync(
  path.join(__dirname, '../..', 'search/data', 'Results.stub.json'),
  'utf8'
);

describe('Offender Summary', () => {
  let wrapper, offenderSummaryInstance;

  describe('', () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <OffenderSummary
            location={{
              state: { offender: JSON.parse(mockData).hits.hits[0]._source }
            }}
          />
        </MemoryRouter>
      );
      offenderSummaryInstance = wrapper.find(OffenderSummary).instance();
    });

    it('renders successfully', () => {
      expect(wrapper.find('h1').text()).toEqual('Smith, John - 19/03/1950');
    });
  });
});
