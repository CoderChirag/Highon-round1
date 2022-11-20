import CreateButtonWrapper from './createButton.styles';

const CreateButton = ({modalHandler}) => {
	return (
		<CreateButtonWrapper
			onClick={() => {
				modalHandler(prev => !prev);
			}}
		>
			<span className='material-symbols-outlined'>add</span>
			Create Colour Card
		</CreateButtonWrapper>
	);
};

export default CreateButton;
