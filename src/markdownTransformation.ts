/* eslint-disable no-unused-vars */
class MarkdownTransformation {
  private readonly link2FooterRegex = /\[.*?\]\(.+?\)/g;

  public link2Footnote(text: string): string {
    const links = text.match(this.link2FooterRegex);
    if (links) {
      text = this.convertLink2Footnote(links, text);
    }
    return text;
  }

  private readonly urlRegex = /\(.+?\)/;
  private readonly bracketRegex = /\[.+?\]/;

  private convertLink2Footnote(links: RegExpMatchArray, text: string) {
    text += '\n';
    for (let i = 0; i < links.length; i ++) {
      const anchorIndex = i + 1;
      const urlContent = this.extractURLInsideParenthesis(links[i]);
      const bracketContent = this.extractContentInsideBrackets(links[i]);
      text = this.replaceAndAddFootnote(text, links[i], bracketContent, urlContent, anchorIndex);
    }
    return text;
  }

  private replaceAndAddFootnote(text: string, link: string, bracketContent: string,
    urlContent: string, anchorIndex: number): string {
    return text.replace(link, `${bracketContent} [^anchor${anchorIndex}]`) +
      `\n[^anchor${anchorIndex}]: ` + urlContent;
  }

  private extractContentInsideBrackets(link: string) {
    return String(link.match(this.bracketRegex)).slice(1, -1);
  }

  private extractURLInsideParenthesis(link: string) {
    return String(link.match(this.urlRegex)).slice(1, -1);
  }
  // node markdownTransformation.js test/examples/input/example1.md
/*   public link2FootnoteFromFile(filePath: string): void {
    return;
  }
  private readFromFile(filePath: string) : string {
    return '';
  }
  private writeToFile(fileName: string) : void {
  } */
}

export {MarkdownTransformation};

