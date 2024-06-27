

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result w-full overflow-hidden "
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};