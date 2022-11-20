import { useState } from 'react';
import SearchBar from './components/searchBar/searchBar.component';
import CreateButton from './components/createButton/createButton.component';
import Modal from './components/modal/modal.component';
import Card from './components/card/card.styles';

function App() {
	const [showModal, setShowModal] = useState(false);
	const [formData, setFormData] = useState({
		color: '',
		title: '',
		description: '',
	});
	const [cardData, setCardData] = useState([]);

	function saveData() {
		setCardData(prev => [...prev, formData]);
		setShowModal(false);
	}

	return (
		<div className='App'>
			<SearchBar />
			<CreateButton modalHandler={setShowModal} />
			{showModal && (
				<Modal
					modalHandler={setShowModal}
					formData={formData}
					formDataHandler={setFormData}
					saveData={saveData}
				/>
			)}
			<div
				style={{
					width: '80%',
					margin: '30px auto',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}
			>
				{cardData.length > 0 &&
					cardData.map((card, index) => {
						return (
							<Card key={index}>
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div
										style={{
											width: '50%',
											backgroundColor: card.color,
											height: 'auto',
											minHeight: '150px',
											borderRadius: '25px',
										}}
									></div>
									<div
										style={{
											fontWeight: 'normal',
											wordWrap: 'break-word',
											width: '50%',
										}}
									>
										{card.description}
									</div>
								</div>
								<div
									style={{
										backgroundColor: '#FF0000',
										marginTop: '25px',
										padding: '10px',
										borderRadius: '15px',
									}}
								>
									{card.title}
								</div>
							</Card>
						);
					})}
			</div>
		</div>
	);
}

export default App;
