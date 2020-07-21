import React, { useEffect, useState } from 'react'
import {ContainerRoot, Container, Header , SectionPhotos, SectionButtons, ContainerMain} from './components/MatchsPage/styles.js'
import axios from 'axios'
import logo from './components/assets/imgs/logo.png'
import MatchsPage from './components/MatchsPage/index.js'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
	const [profiles, setProfiles]=useState({})
	const [count, setCount] = useState(0)
	const [changePage, setChangePage] = useState(false)

	useEffect(()=>{
		getProfiles();
	}, [count]);
	
	const getProfiles = ()=>{
		axios
			.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/person')
			.then((response)=>{
				setProfiles(response.data.profile)				
			})
			.catch((error)=>{
				alert(error)
			})	
	}

	const onClickYes = () =>{		
		setCount(count+1)
		const body ={
			id: profiles.id,
			choice: true,
		}
		axios
		.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/choose-person', body)
		.then(()=>{						
		})
		.catch((erro)=>{
			alert(erro)
		})	
	}
	
	const onClickNo = () =>{
		setCount(count+1)
	}

	const onCLickSeeMatchs = ()=>{
		setChangePage(!changePage)		
	}

  	return (
		<ContainerMain>
    	<ContainerRoot>			
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			{changePage? <MatchsPage />: 
    	    	<Container>				
					<div class="card-stacked">
    	    			<Header>
    	    			 	<img src={logo} alt="logo"/>
							<a onClick={onCLickSeeMatchs} class="waves-effect waves-light btn  pink darken-1">
								<i class="material-icons left">playlist_add_check</i>
							</a>					
    	    			</Header>
					</div>				
    	    		<SectionPhotos class="col s12 m7">  				  
  					    <div class="card">
  					    	<div class="card-image">
  					    		<img src={profiles.photo}/>
  					    		<span class="card-title">{profiles.name}, {profiles.age}</span>
  					     	</div>
  					    	<div class="card-content">
  					    		<i><p>" {profiles.bio} "</p></i>
  					    	</div>   				    
  					  	</div>  									
					</SectionPhotos>		
					<div class="card-stacked">
						<SectionButtons class= "card-content">
							<button onClick={onClickNo} class="waves-effect waves-light btn  deep-purple darken-4" > 
								<i class="material-icons">close</i>
							</button>
							<button onClick={onClickYes} class="waves-effect waves-light btn pink darken-1"> 
								<i class="material-icons">favorite</i>
							</button>
						</SectionButtons>  
					</div>
				</Container>
			}    
    	</ContainerRoot>
		</ContainerMain>
    );
}

export default App;
