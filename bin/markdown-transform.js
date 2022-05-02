import {program} from 'commander';
import {MarkdownTransformation} from '../dist/markdownTransformation.js';

program
  .name('markdown-transform')
  .description('Takes a markdown file and returns another markdown file, applying certain transformations to the text')
  .argument('transformation')
  .argument('source')
  .argument('destination')
  .action((transformation, source, destination) => {
    const markdownTransformation = new MarkdownTransformation();
    if (transformation == 'link2footnote') {
      markdownTransformation.link2FootnoteFromFile(source, destination);
      console.log('File generated successfully');
    } else return;
  });

program.parse(process.argv);
// $ bin/markdown-transform link2footnote source.md destination.md
