const getLocation = (href: string) => {
  const match = href.match(
    // eslint-disable-next-line no-useless-escape
    /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/
  );
  return (
    match && {
      href,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      path: match[5],
      search: match[6],
      hash: match[7],
    }
  );
};

export const getPath = (href: string) => {
  const location = getLocation(href);
  let { path } = location;
  
  if(path.endsWith('/')){
      path = path.slice(0, -1);
  }
  const { hash } = location;

  if (hash) {
    path += hash.split("?")[0];
  }

  return path;
};
