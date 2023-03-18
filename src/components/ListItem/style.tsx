import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}


export const Container = styled.div(( {done}: ContainerProps )=>(
    `
    display: flex;
    backgound-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-botton: 10px;
    aling-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));