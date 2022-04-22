import {MarkdownTransformation} from '../src/markdownTransformation';

describe('Markdown Transformation should', () => {
  it('receive a text without links as input', () => {
    const markdownTransformation = new MarkdownTransformation();
    const exampleWithoutLinks = 'This is an example without links';

    expect(markdownTransformation.link2Footnote(exampleWithoutLinks))
      .toBe(exampleWithoutLinks);
  });

  it('receive a text with links as input', () => {
    const markdownTransformation = new MarkdownTransformation();
    const exampleWithLink = '[this book](https://codigosostenible.com)';
    const result = '[^anchor1]\n[^anchor1]: https://codigosostenible.com';

    expect(markdownTransformation.link2Footnote(exampleWithLink))
      .toBe(result);
  });
  // it('receive md file as input', () => {
  //   const markdownTransformation = new MarkdownTransformation();
  //   // argv.slice(2)
  //   expect(markdownTransformation. ).toBe();
  // });
});
