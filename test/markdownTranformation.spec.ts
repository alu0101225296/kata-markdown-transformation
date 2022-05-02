import {MarkdownTransformation} from '../src/markdownTransformation';
import fs from 'fs';

describe('Markdown Transformation should', () => {
  const markdownTransformation = new MarkdownTransformation();

  it('not modify nothing when there are not links', () => {
    const exampleWithoutLinks = 'This is an example without links';

    expect(markdownTransformation.link2Footnote(exampleWithoutLinks))
      .toBe(exampleWithoutLinks);
  });

  it('transform a text with a single link to a footnote', () => {
    const exampleWithLink = `[this book](https://codigosostenible.com) and some other text
    and some other text line.`;
    const result = `this book [^anchor1] and some other text
    and some other text line.\n\n[^anchor1]: https://codigosostenible.com`;

    expect(markdownTransformation.link2Footnote(exampleWithLink))
      .toBe(result);
  });

  it('transform a text with links to a footnotes', () => {
    const exampleWithLink = 'This is an example with [this book](https://codigosostenible1.com) and [this other book](https://codigosostenible2.com)';
    const result = 'This is an example with this book [^anchor1] and this other book [^anchor2]\n\n' +
      '[^anchor1]: https://codigosostenible1.com\n' +
      '[^anchor2]: https://codigosostenible2.com';

    expect(markdownTransformation.link2Footnote(exampleWithLink))
      .toBe(result);
  });

  it('transform markdown file', () => {
    const inputRoute = 'test/examples/input.md';
    const outputRoute = 'test/examples/output.md';
    const resultRoute = 'test/outputs/result.md';

    markdownTransformation.link2FootnoteFromFile(inputRoute);
    const outputContent = fs.readFileSync(outputRoute, {encoding: 'utf8'});
    const resultContent = fs.readFileSync(resultRoute, {encoding: 'utf8'});

    expect(resultContent).toBe(outputContent);
  });
});
