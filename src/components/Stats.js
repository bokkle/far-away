const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      {numItems === 0 || numPackedItems < numItems ? (
        <em>
          💼 You have {numItems} {items.length === 1 ? "item" : "items"} on your
          list, and you've already packed {numPackedItems} (
          {Math.round((numPackedItems / numItems) * 100)}
          %)
        </em>
      ) : (
        <em>You got everything! Ready to go ✈️</em>
      )}
    </footer>
  );
};

export default Stats;
