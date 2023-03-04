import Card from './components/card/Card';
import MainContainer from './components/main-container/MainContainer';
import { cards } from './constants/cards';
import { key } from './utils/generate-key';

const App = () => {
	return (
		<MainContainer>
			{cards.map(card => (
				<Card key={key()} {...card} />
			))}
		</MainContainer>
	);
};

export default App;
