import a from '../a';

describe( 'a function test', () => {
    test( 'check result string', () => {
        const result = a();

        expect( result ).toBe( 'a function string' );
    } );
} );
