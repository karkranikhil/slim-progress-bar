import styled, {css} from 'styled-components'
export const Progress = styled.div`
    display: inline-block;
    position: ${props=>props.progressType === 'header-level' ? 'fixed':props.progressType === 'block-level'?'absolute':''};;
    max-width: 100% !important;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.4);
    border-radius: 0 1px 1px 0;
    opacity: ${props=>props.percent < 100 ? 1:'0'};    
    background-color : ${props=> props.color ? props.color:''};
    transition-property: width;
    ${props => props.position === 'top' && css`
        top: 0;
        left: 0;
        width : ${props=>props.percent ? props.percent:'0'}%;
        height: ${props=>props.height ? props.height:'4'}px;
    `}  
    ${props => props.position === 'bottom' && css`
        bottom: 0;
        left: 0;
        width : ${props=>props.percent ? props.percent:'0'}%;
        height: ${props=>props.height ? props.height:'4'}px;
    `} 
    ${props => props.position === 'right' && css`
        right: 0;
        top: 0;
        width : ${props=>props.width ? props.width:'4'}px;
        height: ${props=>props.percent ? props.percent:''}%;
    `}
    ${props => props.position === 'left' && css`
        left: 0;
        top: 0;
        width : ${props=>props.width ? props.width:'4'}px;
        height: ${props=>props.percent ? props.percent:''}%;
    `}
`