import {MarkdownTransformation} from '../src/markdownTransformation';

describe('Markdown Transformation should', () => {
  const markdownTransformation = new MarkdownTransformation();

  it('receive a text without links as input', () => {
    const exampleWithoutLinks = 'This is an example without links';

    expect(markdownTransformation.link2Footnote(exampleWithoutLinks))
      .toBe(exampleWithoutLinks);
  });

  it('receive a text with links as input', () => {
    const exampleWithLink1 = '[this book](https://codigosostenible.com)';
    const result1 = 'this book [^anchor1]\n[^anchor1]: https://codigosostenible.com';

    const exampleWithLink2 = `[this book](https://codigosostenible.com) and some other text
    and some other text line.`;
    const result2 = `this book [^anchor1] and some other text
    and some other text line.\n[^anchor1]: https://codigosostenible.com`;

    expect(markdownTransformation.link2Footnote(exampleWithLink1))
      .toBe(result1);
    expect(markdownTransformation.link2Footnote(exampleWithLink2))
      .toBe(result2);
  });
  // it('receive md file as input', () => {
  //   const markdownTransformation = new MarkdownTransformation();
  //   // argv.slice(2)
  //   expect(markdownTransformation. ).toBe();
  // });
});
