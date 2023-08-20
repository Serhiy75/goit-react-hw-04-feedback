import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
list-style: none;

`

export const StatisticsItem = styled.li`
font-size: 16px;
line-height: 1.44;
display: flex;
align-items: center;
gap: 8px;


          
`
export const Stats = styled.span`
width: 10px;
height: 10px;
border-radius: 50%;
margin-left: 4px;
 
background-color: ${props =>{
    switch (props.prop) {
        case 'good':
            return `#469916`;
            case 'bad':
            return `#b62932`;
            case 'neutral':
                return `#e5ecee`;
        default:
            return `white`;
            }}}
`