function Platforms({ render, items }) {
  return <section>{items.map(render)}</section>;
}

export default Platforms;
