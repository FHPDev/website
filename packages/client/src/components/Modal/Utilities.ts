import { keyCodes } from '../../library/keycodes';

export const focusTrap = (ele) => {
    const elements = Array.from(ele.querySelectorAll('button', 'input'));
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];

    firstElement.focus();
    const handleKeyboard = (evt) => {
        const keycode = evt.keyCode;
        const handleTabForard = () => {
            if (evt.target === lastElement) {
                evt.preventDefault();
                firstElement.focus();
            }
        };

        const handleTabBack = () => {
            if (evt.target === firstElement) {
                evt.preventDefault();
                lastElement.focus();
            }
        };

        switch (keycode) {
            case keyCodes.tab:
                if (evt.shiftKey) {
                    handleTabBack();
                } else {
                    handleTabForard();
                }
                break;
            default:
                break;
        }
    };

    elements.forEach((item) => {
        item.addEventListener('keydown', handleKeyboard);
    });
};
