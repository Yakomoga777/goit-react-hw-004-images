import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ onClick }) => {
  const onBtnClick = evt => {
    onClick();
  };

  return (
    <StyledButton type="button" onClick={onBtnClick}>
      Load more
    </StyledButton>
  );
};

// export class Button extends Component {
//   onBtnClick = evt => {
//     console.log(evt);
//     this.props.onClick();
//   };

//   render() {
//     return (
//       <StyledButton type="button" onClick={this.onBtnClick}>
//         Load more
//       </StyledButton>
//     );
//   }
// }
