

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result w-full overflow-hidden font-OpenSans "
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};