// Write your Character component here
import react from "react";
import styled from "styled-components";

const StyledBody =styled.div`
	border: 10px solid ${pr=>pr.theme.primaryColor};
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledDiv = styled.div`
		background-color: ${pr=>pr.theme.primaryColor};
		color: white;
`

const Character = ({character}) => {
	
	return (
		<StyledBody>
		{character.map(id=>{
			return <StyledDiv><p>{id.name}</p></StyledDiv>
		})}
		</StyledBody>
	)
}

export default Character;