import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

const category= 'Goku';

describe('Test useFetch hooks', () => {
    test('debe de regresar el estado inicial ', () => {
        
        const {result} =renderHook(()=>useFetchGifs(category));
        const {images,isLoading}= result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });
    test('debe de retornar un arreglo de imagenes y isLoading false ', async() => {
        
        const {result} =renderHook(()=>useFetchGifs(category));

        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images,isLoading}= result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });


});