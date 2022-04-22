/* eslint-disable no-unused-vars */
class MarkdownTransformation {
  public link2Footnote(text: string): string {
    const link2FooterRegex = /\[.*?\]\(.+?\)/g;
    const urlRegex = /\(.+?\)/;
    const links = text.match(link2FooterRegex);
    if (links) {
      text = text.replace(links[0], '[^anchor1]');
      const urlContent = String(links[0].match(urlRegex));
      text = text + '\n[^anchor1]: ' + urlContent.slice(1, -1);
    }
    return text;
  }
}

export {MarkdownTransformation};

