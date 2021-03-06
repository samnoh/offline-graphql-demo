import styled from 'styled-components';
import markdownStyles from 'github-markdown-css';

export default styled.div`
    ${markdownStyles}
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    ${({ editor }) => editor && `width: 50%;`}

    & ul {
        list-style-type: initial;
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        width: 100%;
        ${({ show }) => (show ? `display: block;` : `display: none;`)};
    }
`;
