import styled from 'styled-components';

export const ContainerRoot = styled.div`
    display: flex;
   flex-direction: column;
`
export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    width: 40%;
`
export const Header = styled.div`
    height: 15vh;
    width: 100%;
    border: solid black;
   
    img{
        width: 40%;
        height: 50%;
    }
`
export const SectionPhotos = styled.section`
    height: 50%;
    width: 100%;
    img{
        width: 55%;
        height: 96%;
        border: 1px solid black;
    }
`
export const DivInfos = styled.div`
    height: 20%;
    width: 100%;
    border: 1px solid black;
`
export const SectionButtons = styled.section`
    height: 20%;
    width: 100%;
`
