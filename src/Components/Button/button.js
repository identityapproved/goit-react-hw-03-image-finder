import { StyledLoadMoreBtn } from './button.styled';

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={loadMore}>
      Load more
    </StyledLoadMoreBtn>
  );
};
