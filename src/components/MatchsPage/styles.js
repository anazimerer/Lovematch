import styled from 'styled-components';

export const ContainerMain =styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#e4e0ef;
`
export const ContainerRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color:#e4e0ef;
    
`
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    width: 400px;
    margin: 2px;
      
`
export const Header = styled.div`
    display: flex;
    flex-direction: row-reverse;
    height: 8vh;
    width: 100%; 
    background-color: #263238;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
    
    a{
       font-size: 18px;
       height: 7.95vh;
       width: 2.5vw;
       padding: 0px!important;
       position: absolute;
       i{
           margin: 6px!important;
           
       }
    }
    img{/*logo*/
        width: 45%;
        height: 85%;        
        margin-right: 5px;
        justify-content: center;
        margin: auto;                
    }
    button{
        position: relative;
        height: 7.95vh;
        width: 2.5vw;
        padding: 0px!important;        
       font-size: 18px;
    }
`


export const SectionPhotos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40%;
    width: 100%;
    
    img{/*photos of lovers*/
        width: 100%;
        height: 55vh;
        opacity: 0.7;
    }
    span{
       font-weight: 500 !important;
        color: black !important;
    }
    div:last-of-type{
        background-color: #fdf4f8;
    }
`
export const DivInfos = styled.div`
    background-color: #263238;
`
export const SectionButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 100%;
    background-color: #263238;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);

    button{
        height: 70px;
        width: 70px;
        border-radius: 90%;
        margin: 10px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
        0 3px 1px -2px rgba(0,0,0,0.12), 
        0 1px 4px 0 rgba(0,0,0,0.2);
        font-size: 1.5em;
    }button:hover{
        height: 75px;
        width: 75px; 
        font-size: 2em;
    }
    
`
export const SectionMatches = styled.div`
    width:100%;
    height: 100%;
 
    div{
       display: flex;
       flex-direction: row;      
       margin: 10px 0px;
       align-items: center;
       background-color: #263238;
       border-radius: 5px;
    }  
    img{
        width: 6vw;
        height: 12vh;
        border-radius: 100%;
        margin: 7px;
        opacity:0.7px;
    }
    h5{
        font-size: 1.2em;
        margin: 5px;
        color: #f1f1f1;
    }
    p{
        font-size: 1.0em;
        margin:5px;
        color:#ff2768;
    }
`
