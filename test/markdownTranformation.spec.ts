import {MarkdownTransformation} from '../src/markdownTransformation';

describe('Markdown Transformation should', () => {
  // const markdownExample = '[this book](https://codigosostenible.com)';
  // const result = `[^anchor1]
  //  [^anchor1]: https://codigosostenible.com`;

  it('receive text as input', () => {
    const markdownTransformation = new MarkdownTransformation();
    const exampleWithoutLinks = 'This is an example without links';
    expect(markdownTransformation.link2Footnote(exampleWithoutLinks))
      .toBe(exampleWithoutLinks);
  });

  // it('receive md file as input', () => {
  //   const markdownTransformation = new MarkdownTransformation();
  //   // argv.slice(2)
  //   expect(markdownTransformation. ).toBe();
  // });
});
