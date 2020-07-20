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

  .header,
  .footer {
    padding: 1.25rem;
  }

  .header {
    align-items: center;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .title {
    flex: 1;
    font-size: 1.5em;
  }

  .content {
    display: flex;
  }

  .image-wrapper,
  .info-wrapper {
    flex: 1;
  }

  .image-wrapper {
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  .info-wrapper {
    padding: 1.25rem;
  }

  .name {
    font-size: 1.3125em;
    font-weight: bold;
    margin-bottom: 1.25rem;
  }

  .features {
    list-style: none;
  }

  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
  }

  .content-footer {
    flex: 1;
  }

  .country-flag {
    margin-right: 0.5rem;
  }
`;

export { Wrapper };
