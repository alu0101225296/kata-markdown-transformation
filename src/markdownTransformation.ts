/* eslint-disable no-unused-vars */
class MarkdownTransformation {
  public link2Footnote(text: string): string {
    const link2FooterRegex = /\[.*?\]\(.+?\)/g;
    const links = text.match(link2FooterRegex);
    if (links) {
      text = this.convertLink2Footnote(links, text);
    }

    return text;
  }

  private convertLink2Footnote(links: RegExpMatchArray, text: string) {
    const urlRegex = /\(.+?\)/;
    const bracketRegex = /\[.+?\]/;
    const bracketContent = String(links[0].match(bracketRegex)).slice(1, -1);
    const urlContent = String(links[0].match(urlRegex)).slice(1, -1);
    text = text.replace(links[0], `${bracketContent} [^anchor1]`);
    text = text + '\n[^anchor1]: ' + urlContent;
    return text;
  }
}

export {MarkdownTransformation};

