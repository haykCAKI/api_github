import styles from "styled-components";


export const Loading = styles.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const Container = styles.main`
    display:flex;
    min-height: 100vh;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
    };
`;

export const Sidebar = styles.aside`
    background: ${(props) => props.theme.colors.background};
    min-width: 8rem;
    max-height: 100vh;
    overflow-y: hidden;

`;

export const Main = styles.section`
    background: ${(props) => props.theme.colors.container};
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    padding: 40px;


    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        height: 100%;
    };

    
    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 40px 20px;
    };
`;
