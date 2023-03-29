import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Test en <GifGrid/>', () => {
    
    const category= 'One punch';

    test('debe de mostrar el loading inicialmente ', () => {
        
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('debe de mostar items cuando se cargan las imagenes useFetchGifs', () => {
        
        const gifs= [
            {
            id:'ABC',
            title:'Saitama',
            url:'https://localhost/saitama.jpg'
            },

            {
            id:'DEF',
            title:'GOKU',
            url:'https://localhost/goku.jpg'
            },
    ];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        })
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});