import fs from 'fs';
import path from 'path';

import React from 'react';

import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import OffenderSummaryScene from './OffenderSummaryScene';

const mockData = fs.readFileSync(
  path.join(__dirname, '../', 'search/data', 'Results.stub.json'),
  'utf8'
);

describe('Offender Summary', () => {
  let wrapper, offenderSummaryInstance;

  describe('', () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <OffenderSummaryScene
            location={{
              state: { offender: JSON.parse(mockData).hits.hits[0]._source }
            }}
            history={{}}
          />
        </MemoryRouter>
      );
      offenderSummaryInstance = wrapper.find(OffenderSummaryScene).instance();
    });

    xit('renders successfully', () => {
      expect(wrapper.find('h1')).toHaveLength(1);
    });
  });
});
