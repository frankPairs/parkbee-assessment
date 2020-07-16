import styled from 'styled-components';

const Wrapper = styled.article`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 16px 0, rgba(0, 0, 0, 0.08) 0 0 1px 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1.25rem 1.25rem 0;
  flex: 0 0 calc(25% - 1.25rem);

  .header {
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .footer {
    display: flex;
    padding: 1rem;
  }

  .content-footer {
    flex: 1;
  }

  .country-flag {
    margin-right: 0.5rem;
  }

  .title {
    flex: 1;
    font-size: 1em;
  }
`;

export { Wrapper };
