const CategorySelector = ({ categories, onSelect }) => {
	return (
		<div>
			{categories.map((category) => {
				return (
					<div key={category}>
						<label htmlFor="category">{category}</label>
						<input
							id={category}
							name="category"
							onChange={() => onSelect(category)}
							type="radio"
							value={category}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default CategorySelector;
