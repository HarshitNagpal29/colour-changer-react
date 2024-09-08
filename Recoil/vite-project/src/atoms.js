import { atom, selector } from 'recoil';
import { COLOURS } from './colours';

export const selectedColourState = atom({
    key: 'selectedColourState',
    default: COLOURS[0] // Default to the first color
});

export const defaultColourState = selector({
    key: 'defaultColourState',
    get: ({ get }) => {
        const selectedColour = get(selectedColourState);
        return selectedColour.value;
    }
});
