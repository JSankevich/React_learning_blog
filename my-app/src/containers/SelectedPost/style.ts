import styled from "styled-components";

export const SelectedWrapper = styled.div `
    width: 1120px;
    height: 100%;
  
    a {
      text-decoration: none;
    }
`;

export const ImageSelectedPost = styled.div `
    width: 992px;
    height: 518px;
    margin: 48px auto;
    
    img {
      width: 992px;
      height: 518px;
      object-fit: contain;
    }
`;

export const DescriptionSelected = styled.div `
    width: 920px;
    height: 100%;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #313037;
    margin: 0 auto;
`;

export const ButtonsLineSelected = styled.div `
    width: 922px;
    height: 56px;
    margin: 48px auto 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LikeWrapperSelected = styled.div `
    width: 88px;
    height: 56px;
    background: #DADADA;
    border-radius: 2px;
    padding-left: 32px;
    padding-top: 14px;
    cursor: pointer;
  
  img {
      width: 24px;
      height: 24px;
  }
`;

export const DislikeWrapperSelected = styled.div `
    width: 88px;
    height: 56px;
    background: #DADADA;
    border-radius: 2px;
    padding-left: 32px;
    padding-top: 14px;
    cursor: pointer;
  
  img {
      width: 24px;
      height: 24px;
  }
`;

export const BookmarkWrapperSelected = styled.div `
    width: 237px;
    height: 56px;
    background: #DADADA;
    border-radius: 2px;
    padding-left: 32px;
    padding-top: 14px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  
  img {
      width: 24px;
      height: 24px;
  }
  
  p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #313037;
      margin-left: 10px;
  }
  `;

export const WrapperLikeDislike = styled.div `
    display: flex;
    width: 182px;
    justify-content: space-between;
`;

export const TitleSelected = styled.h1 `
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 80px;
    color: #313037;
`;

export const Home = styled.div `
    width: 45px;
    height: 24px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #313037;
    margin-bottom: 32px;
    margin-top: 72px;
    cursor: pointer;
`;