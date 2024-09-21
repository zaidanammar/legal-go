import { detectFileTypeFromUrl } from '@/lib/utils/url/detect-file-type-from-url';

describe('detectFileTypeFromUrl', () => {
  test('should detect an image file type', () => {
    const url = 'https://example.com/image.jpg';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('image');
  });

  test('should detect a document file type', () => {
    const url = 'https://example.com/document.pdf';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('document');
  });

  test('should return "unknown" for unknown file types', () => {
    const url = 'https://example.com/unknown.xyz';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('unknown');
  });

  test('should handle file extensions in mixed case', () => {
    const url = 'https://example.com/Document.DOCX';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('document');
  });

  test('should handle URLs with query strings', () => {
    const url = 'https://example.com/image.jpg?width=200&height=150';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('image');
  });

  test('should handle URLs without extensions', () => {
    const url = 'https://example.com/no-extension';
    const result = detectFileTypeFromUrl(url);
    expect(result).toBe('unknown');
  });
});
