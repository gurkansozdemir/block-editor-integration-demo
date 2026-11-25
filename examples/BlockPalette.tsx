type DemoBlock = { id: string; label: string };

export function BlockPalette({ blocks, onSelect }: { blocks: DemoBlock[]; onSelect: (id: string) => void }) {
  return <ul>{blocks.map(block => <li key={block.id}>
    <button type="button" onClick={() => onSelect(block.id)}>{block.label}</button>
  </li>)}</ul>;
}
