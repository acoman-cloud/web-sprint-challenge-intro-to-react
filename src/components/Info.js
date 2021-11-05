import axios from "axios";
import React, { useState, useEffect } from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
		border: 2px solid ${pr=>pr.theme.quaternaryColor};
		box-shadow: 0px 1px 6px -2px #807f7f;
		background-color: ${pr=>pr.theme.theFifthOne};
		border-radius: 8px;
		margin-top: 16px;
		padding: 16px;
`

const Info = ({character, id}) => {
	const [state, setState] = useState(null)
	const info = [];

	useEffect(()=>{
		axios.get(id)
			.then(esp => {
				info.push(esp.data);
				console.log(info)
			})
			.catch(err => console.error(err))
	}, [id])

	return (
		<StyledDiv>
			{
				state &&
				<>
					<h2> The sweet deets of {info.name}: </h2>
					<p>height: {info} cm</p>
					<p>weight: {info} kg</p>
					<p>skin color: {info}</p>
					<p>gender: {info}</p>
					<h3>Appeared in Hollywood blockbusters, such as: </h3>
					<ul>
					</ul>
					<button onClick={setState(null)}>Close</button>
				</>
			}
		</StyledDiv>
	)
}

export default Info;