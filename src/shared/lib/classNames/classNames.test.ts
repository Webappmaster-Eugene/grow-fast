import { classNames } from './classNames';

describe('classNames function', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with only first param', () => {
    // eslint-disable-next-line max-len
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
});
