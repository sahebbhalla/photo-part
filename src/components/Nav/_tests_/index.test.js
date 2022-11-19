import React from 'react';
import{cleanup,render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe("Nav Component ", ()=>{
    test("renders",()=>{
        render(<Nav />);
    })
    test('matches Snampshot',()=>{
        const {asFragment} = render(<Nav />)
        expect(asFragment()).toMatchSnapshot()
    })
})
describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    
    })
  })

describe('Link Visibility',()=>{
    test("A href",()=>{
        const {getByTestId}= render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh snap');
        expect(getByTestId('about')).toHaveTextContent('About');
    })
})