import { useState, useEffect, useMemo } from 'react';
import {
	ModalWrapper,
	ModalBox,
	ModalHeader,
	ModalColours,
	ModalFooter,
} from './modal.styles';
import { fetchData } from '../../util/data/dataFetch.util';

const Modal = ({ modalHandler, formDataHandler, formData, saveData }) => {
	const [data, setData] = useState(null);

	const getDataAndUpdateState = useMemo(
		() => async () => {
			const data = await fetchData(
				'https://demo2965432.mockable.io/highon/colors'
			);
			console.log(data);
			setData(data.data);
		},
		[setData]
	);

	useEffect(() => {
		getDataAndUpdateState();
	}, [getDataAndUpdateState]);

	return (
		<ModalWrapper>
			<ModalBox>
				<ModalHeader>
					<p>Create Colour Card</p>
				</ModalHeader>
				<ModalHeader>
					<p>Select the Colour</p>
				</ModalHeader>
				<ModalColours>
					{data &&
						data.map((colour, index) => (
							<div
								key={index}
								style={{
									backgroundColor: colour.code,
									width: '15%',
									height: '20px',
									border:
										formData.color === colour.code
											? '2px solid black'
											: 'none',
								}}
								onClick={() =>
									formDataHandler(prev => ({
										...prev,
										color: colour.code,
									}))
								}
							></div>
						))}
				</ModalColours>
				<ModalHeader>
					<p>Give a Title</p>
				</ModalHeader>
				<input
					type='text'
					style={{ margin: 'auto' }}
					onChange={e =>
						formDataHandler(prev => ({
							...prev,
							title: e.target.value,
						}))
					}
				/>
				<ModalHeader>
					<p>Description</p>
				</ModalHeader>
				<textarea
					style={{ width: '60%', margin: 'auto' }}
					cols='20'
					rows='10'
					onChange={e =>
						formDataHandler(prev => ({
							...prev,
							description: e.target.value,
						}))
					}
				></textarea>
				<ModalFooter>
					<button onClick={() => modalHandler(prev => !prev)}>
						Cancel
					</button>
					<button onClick={() => saveData()}>Save</button>
				</ModalFooter>
			</ModalBox>
		</ModalWrapper>
	);
};

export default Modal;
