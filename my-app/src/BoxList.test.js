import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '1234')
}));

it("renders without crashing", function() {
    render(<BoxList />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});