import { lowerCaseNormalizeString, normalizeString } from './strings';

describe('Utils', () => {
  it('should remove accents', () => {
    const value = 'Pêra';
    const normalizedValue = normalizeString(value);

    expect(normalizedValue).toBe('Pera');
  });

  it('should remove accents and set lowercase', () => {
    const value = 'Pêra';
    const transformedValue = lowerCaseNormalizeString(value);

    expect(transformedValue).toBe('pera');
  });
});
