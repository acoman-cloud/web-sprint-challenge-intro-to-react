// Write your Character component here
import react from "react";
import styled from "styled-components";

const StyledBody =styled.div`
	border: 6px solid ${pr=>pr.theme.primaryColor};
	width: 90%;
	height: 70%;
	display: flex;
	flex-direction: row;
	align-items: center;
`

const StyledDiv = styled.div`
		display:flex;
		align-items: center;
		background-color: ${pr=>pr.theme.tertiaryColor};
		border: 4px solid ${pr=>pr.theme.primaryColor};
		color: ${pr=>pr.theme.white};
		width: 25%;
		height: 5em;
		flex-direction: column;
		justify-content: center;
`

const Character = ({character, url, open}) => {
	
	return (
		<StyledBody>
		{character.map(ch=>{
			return <StyledDiv><p>{ch.name}</p><button onClick={()=> {
				url(ch.url);
				open(true);
				}}>INFO</button></StyledDiv>
		})}
		</StyledBody>
	)
}

export default Character;