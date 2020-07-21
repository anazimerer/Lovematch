import React, { useEffect, useState } from 'react'
import axios from 'axios'
import App from '../../App'
import logo from '../assets/imgs/logo.png'
import {Header, SectionMatches} from './styles.js'
import 'materialize-css/dist/css/materialize.min.css';

const MatchsPage =()=>{
    const [changePage, setChangePage]=useState(false)
    const [matches, setMatches] = useState([])

    useEffect(()=>{
       getAllMatches();
    }, [])
    
    const getAllMatches = ()=>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/matches')
        .then((response)=>{
            setMatches(response.data.matches)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    const onClickComebackToProfiles = ()=>{
        setChangePage(!changePage)
    }    
    
    const onClickCleanMatches = ()=>{
        axios
            .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/clear')
            .then(()=>{
            })
            .catch((error)=>{
                alert(error)
            })
        getAllMatches();
    } 

    const listOfMatches = matches.map((person)=>{
        return(           
            <div class="card"> 
                <img src={person.photo} alt='Foto de perfil'/>
                <p>
                    <h5>{person.name}</h5>
                    <i><p>It's a match!</p></i>
                </p>                
            </div>            
        );    
    })

    return(      
        <div>
            {changePage? <App /> :
                <>             
                    <Header>
    	            	<img src={logo} alt="logo"/>
                        <a onClick={onClickCleanMatches} class="waves-effect waves-light btn  pink darken-1">
			        	    <i class="material-icons left">delete</i>
			        	</a>
                        <button onClick={onClickComebackToProfiles} class="waves-effect waves-light btn  pink darken-1">
			        		<i class="material-icons left">chevron_left</i>
			        	</button>                    				
    	            </Header>
                    <SectionMatches class="card-horizontal">
                    {listOfMatches.length>0? listOfMatches : <p align={"center"}>Sem matches por enquanto :(</p>}
                    </SectionMatches>           
                </>
            }
        </div>
    )   
}
export default MatchsPage;