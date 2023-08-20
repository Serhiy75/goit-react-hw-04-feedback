import styled from "@emotion/styled";

export const FeedbackList = styled.ul`
list-style: none;
display: flex;
gap: 16px;
`

export const FeedbackItem = styled.li``

export const FeedbackButton = styled.button`
cursor: pointer;
padding: 6px 16px;
border: none;
border-radius: 15px;
font-size: 16px;
box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.2);
&:hover {
    box-shadow: 0px 0px 3px 0.3px rgba(0,0,0,0.2);
  }  
background-color: ${props =>{
    switch (props.prop) {
        case 'good':
            return `#469916`;
            case 'bad':
            return `#b62932`;
        default:
            return `#e5ecee`;
            }}}
`