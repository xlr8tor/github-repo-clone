import { useSelector } from "react-redux";
import styled from "styled-components";

const Avatar = () => {
  const selectImageURI = useSelector((state) => state.auth.user.avatar_url);
  return <Image src={selectImageURI} />;
};

export default Avatar;

const Image = styled.img`
  width: max-content;
  display: block;
  border-radius: 50%;
`;
