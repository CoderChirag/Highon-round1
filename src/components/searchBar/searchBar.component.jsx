import SearchBarInput from './searchBar.styles';
const SearchBar = ({ searchTextHandler }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<SearchBarInput
				type='search'
				placeholder='Search'
				onChange={e => searchTextHandler(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
