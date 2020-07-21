import React from 'react';
import logo from './components/assets/imgs/logo.png'
import {Container, Header , SectionPhotos, DivInfos, SectionButtons} from './components/InicialPage/styles.js';

function App() {
  	return (
    	<ContainerRoot>
    	    <Container>
    	    	<Header>
    	    	 	 <img src={logo} alt="logo"/>
    	    	</Header>
    	    	<SectionPhotos>
    	    		<img src="https://s3.portalt5.com.br/imagens/Lula-Molusco.jpg?mtime=20191115152143" alt="foto"/>
    	    	</SectionPhotos>
    	    	<DivInfos>
    	    	    informações sobre 
    	    	</DivInfos>  
				<SectionButtons>
    	    	    <button>no</button>
				    <button>yes</button>
    	    	</SectionButtons>  
			</Container>    
    	</ContainerRoot>
    );
}

export default App;
