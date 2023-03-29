import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory OnAddCategory={()=>{}}/>)
        const input= screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Goku'}}) ;

        expect(input.value).toBe('Goku');

        screen.debug();

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue= 'Goku';

        const onNewCategory= jest.fn(); //Mock es una simulacion de esa funcion 

        render(<AddCategory OnAddCategory={onNewCategory}/>);

        const input= screen.getByRole('textbox');
        const form= screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}}) ;
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toBeCalledWith(inputValue);

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue= '';
        const onNewCategory= jest.fn();

        render(<AddCategory OnAddCategory={onNewCategory}/>);

        const input= screen.getByRole('textbox');
        const form= screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}}) ;
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });

});

