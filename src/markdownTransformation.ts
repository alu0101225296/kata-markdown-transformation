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
    const bracketContent = String(links[0].match(this.bracketRegex)).slice(1, -1);
    const urlContent = String(links[0].match(this.urlRegex)).slice(1, -1);
    text = text.replace(links[0], `${bracketContent} [^anchor1]`) +
      '\n[^anchor1]: ' + urlContent;

    return text;
  }
}

export {MarkdownTransformation};

