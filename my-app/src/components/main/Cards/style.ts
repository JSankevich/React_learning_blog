import styled from 'styled-components';

export const BigCard = styled.div `
  width: 736px;
  height: 452px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  border-bottom: 1px solid #DADADA;
  
  &:hover{
    transform: scale(1.05);
    transition: 1s;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    cursor: pointer;
`;

export const TextContent = styled.div `
  width: 448px;
  height: 356px;
`;

export const DataPost = styled.p `
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  height: 24px;
  color: #8D8E97;
  margin-top: 0;
`;

export const TitlePost = styled.p `
  height: 132px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #313037;
  margin-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TextPost = styled.p `
  width: 100%;
  height: 168px;
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #8D8E97;
  margin-top: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ImageWrapper = styled.div `
  width: 256px;
  height: 244px;
  
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsForCard = styled.div `
  width: 736px;
  height: 65.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LikesWrapper = styled.div `
  display: flex;
  flex-direction: row;
`;

export const Like = styled.div `
  width: 48.68px;
  height: 24px;
  display: flex;
  flex-direction: row;
  
  img {
    width: 21.68px;
    height: 22px;
    cursor: pointer;
  }
  
  p {
    width: 19px;
    height: 24px;
    font-family: 'DIN Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-left: 8px;
  }
`;

export const Dislike = styled.div `
  width: 48.68px;
  height: 24px;
  display: flex;
  flex-direction: row;
  margin-left: 25px;

  img {
    width: 21.68px;
    height: 22px;
    cursor: pointer;
  }

  p {
    width: 19px;
    height: 24px;
    font-family: 'DIN Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-left: 8px;
  }
`;

export const OptionWrapper = styled.div `
  width: 72px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Save = styled.div `
  cursor: pointer
`;

export const More = styled.div `
  cursor: pointer;
`;


export const MediumCardWrapper = styled.div `
  width: 736px;
  height: 943px;
  margin-top: 38.5px;
  flex-direction: row;
  row-gap: 40px;
  column-gap: 30px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`;

export const MediumCard = styled(BigCard) `
  width: 352px;
  height: 452px;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #DADADA;
`;

export const ImageWrapperMed = styled(ImageWrapper) `
  width: 352px;
  height: 246px;
`;

export const DataPostMed = styled(DataPost) `
  margin-top: 24px;
`;

export const TextContentMed = styled(TextContent) `
  width: 352px;
  height: 88px;
`;

export const TitlePostMed = styled(TitlePost) `
  height: 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

export const ButtonsForCardMed = styled(ButtonsForCard) `
  width: 352px;
  height: 25px;
`;


export const LittleCardWrapper = styled(MediumCardWrapper) `
  width: 352px;
  height: 1434.5px;
  margin-left: 40px;
  margin-top: 0px;
`;

export const LittleCard = styled(MediumCard) `
  height: 206px;
  border-bottom: 1px solid #DADADA;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrapperLit = styled(ImageWrapperMed) `
  width: 96px;
  height: 96px;
`;

export const DataPostLit = styled(DataPostMed) `
  margin-top: 0px;
`;

export const TextContentLit = styled(TextContentMed) `
  width: 222px;
  height: 116px;
`;

export const TitlePostLit = styled(TitlePostMed) `
  height: 84px;
`;

export const WrLeft = styled.div `
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
`;




