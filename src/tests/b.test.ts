import b from '../b';

describe( 'b function test', () => {
    test( 'check result string', () => {
        const result = b();

        expect( result ).toBe( 'b function string' );
    } );
} );
