/* eslint-disable no-unused-vars */
class MarkdownTransformation {
  private readonly link2FooterRegex = /\[.*?\]\(.+?\)/g;

  public link2Footnote(text: string): string {
    const links = text.match(this.link2FooterRegex);
    if (links) {
      text = this.convertLink2Footnote(links, text + '\n');
    }

    return text;
  }

  private readonly urlRegex = /\(.+?\)/;
  private readonly bracketRegex = /\[.+?\]/;

  private convertLink2Footnote(links: RegExpMatchArray, text: string) {
    for (let i = 0; i < links.length; i ++) {
      const anchorIndex = i + 1;
      const urlContent = String(links[i].match(this.urlRegex)).slice(1, -1);
      const bracketContent = String(links[i].match(this.bracketRegex)).slice(1, -1);
      text = text.replace(links[i], `${bracketContent} [^anchor${anchorIndex}]`) +
        `\n[^anchor${anchorIndex}]: ` + urlContent;
    }
    return text;
  }
}

export {MarkdownTransformation};

